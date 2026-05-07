package com.karllang.app

import android.content.ContentValues
import android.os.Build
import android.provider.MediaStore
import android.util.Base64
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

@CapacitorPlugin(name = "NativeImageSaver")
class NativeImageSaverPlugin : Plugin() {

    @PluginMethod
    fun saveImage(call: PluginCall) {
        val dataUrl = call.getString("dataUrl")
        val filename = call.getString("filename") ?: "karllang.png"
        if (dataUrl.isNullOrBlank()) {
            call.reject("Missing dataUrl")
            return
        }

        val commaIndex = dataUrl.indexOf(',')
        if (commaIndex < 0 || commaIndex >= dataUrl.length - 1) {
            call.reject("Invalid dataUrl")
            return
        }

        try {
            val bytes = Base64.decode(dataUrl.substring(commaIndex + 1), Base64.DEFAULT)
            val resolver = context.contentResolver
            val values = ContentValues().apply {
                put(MediaStore.Images.Media.DISPLAY_NAME, filename)
                put(MediaStore.Images.Media.MIME_TYPE, "image/png")
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    put(MediaStore.Images.Media.RELATIVE_PATH, "Pictures/KarlLang")
                    put(MediaStore.Images.Media.IS_PENDING, 1)
                }
            }

            val uri = resolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values)
            if (uri == null) {
                call.reject("Failed to create media item")
                return
            }

            resolver.openOutputStream(uri)?.use { output ->
                output.write(bytes)
            } ?: run {
                call.reject("Failed to open output stream")
                return
            }

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                values.clear()
                values.put(MediaStore.Images.Media.IS_PENDING, 0)
                resolver.update(uri, values, null, null)
            }

            call.resolve()
        } catch (error: Exception) {
            call.reject(error.message ?: "Failed to save image")
        }
    }
}
