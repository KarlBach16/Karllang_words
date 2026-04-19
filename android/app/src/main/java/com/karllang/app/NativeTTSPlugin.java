package com.karllang.app;

import android.speech.tts.TextToSpeech;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Locale;

@CapacitorPlugin(name = "NativeTTS")
public class NativeTTSPlugin extends Plugin implements TextToSpeech.OnInitListener {
    private TextToSpeech tts;
    private volatile boolean ready = false;

    @Override
    public void load() {
        super.load();
        initTts();
    }

    private void initTts() {
        if (tts != null) return;
        tts = new TextToSpeech(getContext().getApplicationContext(), this);
    }

    @Override
    public void onInit(int status) {
        ready = status == TextToSpeech.SUCCESS;
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text");
        String langTag = call.getString("lang", "en-US");

        if (text == null || text.trim().isEmpty()) {
            call.reject("text is required");
            return;
        }

        if (tts == null || !ready) {
            initTts();
            call.reject("Native TTS is not ready");
            return;
        }

        Locale locale = Locale.forLanguageTag(langTag);
        tts.setLanguage(locale);
        tts.stop();
        tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "karllang-native-tts");
        call.resolve();
    }

    @PluginMethod
    public void stop(PluginCall call) {
        if (tts != null) {
            tts.stop();
        }
        call.resolve();
    }

    @PluginMethod
    public void isAvailable(PluginCall call) {
        String langTag = call.getString("lang", "en-US");
        Locale locale = Locale.forLanguageTag(langTag);

        boolean available = false;
        if (tts != null && ready) {
            int result = tts.isLanguageAvailable(locale);
            available = result != TextToSpeech.LANG_MISSING_DATA &&
                result != TextToSpeech.LANG_NOT_SUPPORTED;
        }

        JSObject ret = new JSObject();
        ret.put("available", available);
        call.resolve(ret);
    }

    @Override
    protected void handleOnDestroy() {
        if (tts != null) {
            tts.stop();
            tts.shutdown();
            tts = null;
        }
        ready = false;
        super.handleOnDestroy();
    }
}
