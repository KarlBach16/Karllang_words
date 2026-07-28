package com.karllang.app

import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin

data class NativeChromeState(
    val view: String,
    val title: String,
    val activeTab: String,
    val presentation: String,
    val tabLabels: JSObject,
    val settings: JSObject,
    val home: JSObject,
    val words: JSObject
)

@CapacitorPlugin(name = "NativeChrome")
class NativeChromePlugin : Plugin() {

    fun emitNavigation(view: String) {
        notifyListeners("navigate", JSObject().put("view", view))
    }

    fun emitSettingsAction(action: String, value: String? = null) {
        val payload = JSObject().put("action", action)
        if (value != null) payload.put("value", value)
        notifyListeners("settingsAction", payload)
    }

    fun emitWordAction(action: String, wordId: String) {
        notifyListeners("wordAction", JSObject().put("action", action).put("wordId", wordId))
    }

    fun emitSearchAction(action: String, value: String) {
        notifyListeners("searchAction", JSObject().put("action", action).put("value", value))
    }

    @PluginMethod
    fun update(call: PluginCall) {
        val host = activity as? MainActivity
        if (host == null) {
            call.resolve(JSObject().put("ready", false))
            return
        }

        val state = NativeChromeState(
            view = call.getString("view", "study") ?: "study",
            title = call.getString("title", "KarlLang") ?: "KarlLang",
            activeTab = call.getString("activeTab", "study") ?: "study",
            presentation = call.getString("presentation", "standard") ?: "standard",
            tabLabels = call.getObject("tabLabels") ?: JSObject(),
            settings = call.getObject("settings") ?: JSObject(),
            home = call.getObject("home") ?: JSObject(),
            words = call.getObject("words") ?: JSObject()
        )

        host.runOnUiThread {
            host.applyNativeChrome(state)
            call.resolve(
                JSObject()
                    .put("ready", true)
                    .put("topInset", host.nativeChromeTopInsetDp())
                    .put("bottomInset", host.nativeChromeBottomInsetDp())
            )
        }
    }
}
