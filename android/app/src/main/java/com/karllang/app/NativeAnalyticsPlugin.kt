package com.karllang.app

import android.os.Bundle
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.google.firebase.analytics.FirebaseAnalytics
import org.json.JSONObject

@CapacitorPlugin(name = "NativeAnalytics")
class NativeAnalyticsPlugin : Plugin() {

    @PluginMethod
    fun logEvent(call: PluginCall) {
        val name = call.getString("name") ?: run {
            call.reject("Missing event name")
            return
        }

        val params = call.getObject("params") ?: JSObject()
        val bundle = jsonToBundle(params.toString())

        FirebaseAnalytics.getInstance(context).logEvent(name, bundle)
        call.resolve()
    }

    private fun jsonToBundle(json: String): Bundle {
        val bundle = Bundle()
        val obj = JSONObject(json)
        val keys = obj.keys()
        while (keys.hasNext()) {
            val key = keys.next()
            when (val value = obj.get(key)) {
                is String -> bundle.putString(key, value)
                is Int -> bundle.putInt(key, value)
                is Long -> bundle.putLong(key, value)
                is Double -> bundle.putDouble(key, value)
                is Boolean -> bundle.putBoolean(key, value)
                else -> bundle.putString(key, value.toString())
            }
        }
        return bundle
    }
}
