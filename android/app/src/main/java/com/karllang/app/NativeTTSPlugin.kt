package com.karllang.app

import android.speech.tts.TextToSpeech
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import java.util.Locale

@CapacitorPlugin(name = "NativeTTS")
class NativeTTSPlugin : Plugin(), TextToSpeech.OnInitListener {
    private var tts: TextToSpeech? = null
    @Volatile private var ready = false

    override fun load() {
        super.load()
        initTts()
    }

    private fun initTts() {
        if (tts != null) return
        tts = TextToSpeech(context.applicationContext, this)
    }

    override fun onInit(status: Int) {
        ready = status == TextToSpeech.SUCCESS
    }

    @PluginMethod
    fun speak(call: PluginCall) {
        val text = call.getString("text")?.trim()
        val langTag = call.getString("lang") ?: "en-US"

        if (text.isNullOrEmpty()) {
            call.reject("text is required")
            return
        }

        val engine = tts
        if (engine == null || !ready) {
            initTts()
            call.reject("Native TTS is not ready")
            return
        }

        val locale = Locale.forLanguageTag(langTag)
        engine.setLanguage(locale)
        engine.stop()
        engine.speak(text, TextToSpeech.QUEUE_FLUSH, null, "karllang-native-tts")
        call.resolve()
    }

    @PluginMethod
    fun stop(call: PluginCall) {
        tts?.stop()
        call.resolve()
    }

    @PluginMethod
    fun isAvailable(call: PluginCall) {
        val langTag = call.getString("lang") ?: "en-US"
        val locale = Locale.forLanguageTag(langTag)
        val engine = tts

        val available = if (engine != null && ready) {
            val result = engine.isLanguageAvailable(locale)
            result != TextToSpeech.LANG_MISSING_DATA &&
                result != TextToSpeech.LANG_NOT_SUPPORTED
        } else {
            false
        }

        val ret = JSObject()
        ret.put("available", available)
        call.resolve(ret)
    }

    override fun handleOnDestroy() {
        tts?.stop()
        tts?.shutdown()
        tts = null
        ready = false
        super.handleOnDestroy()
    }
}
