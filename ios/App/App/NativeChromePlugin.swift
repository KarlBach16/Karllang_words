import Capacitor

@objc(NativeChromePlugin)
public final class NativeChromePlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "NativeChromePlugin"
    public let jsName = "NativeChrome"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "update", returnType: CAPPluginReturnPromise)
    ]

    weak var shellHost: MainViewController?

    @objc func update(_ call: CAPPluginCall) {
        let state = NativeChromeState(
            view: call.getString("view", "study"),
            title: call.getString("title", "KarlLang"),
            activeTab: call.getString("activeTab", "study"),
            presentation: call.getString("presentation", "standard"),
            tabLabels: call.getObject("tabLabels") ?? [:],
            settings: call.getObject("settings") ?? [:],
            home: call.getObject("home") ?? [:],
            words: call.getObject("words") ?? [:],
            training: call.getObject("training") ?? [:],
            study: call.getObject("study") ?? [:]
        )

        DispatchQueue.main.async { [weak self] in
            guard let host = self?.shellHost else {
                call.resolve(["ready": false])
                return
            }

            host.applyNativeChrome(state)
            call.resolve([
                "ready": true,
                "topInset": host.nativeChromeTopInset,
                "bottomInset": host.nativeChromeBottomInset
            ])
        }
    }

    func emitNavigation(view: String) {
        notifyListeners("navigate", data: ["view": view])
    }

    func emitSettingsAction(action: String, value: String? = nil) {
        var data: [String: Any] = ["action": action]
        if let value { data["value"] = value }
        notifyListeners("settingsAction", data: data)
    }

    func emitWordAction(action: String, wordId: String) {
        notifyListeners("wordAction", data: ["action": action, "wordId": wordId])
    }

    func emitSearchAction(action: String, value: String) {
        notifyListeners("searchAction", data: ["action": action, "value": value])
    }
    func emitTrainingAction(action: String, value: String? = nil) {
        shellHost?.dispatchTrainingActionToWeb(action: action, value: value)
    }

    func emitStudyAction(action: String, value: String? = nil) {
        shellHost?.dispatchStudyActionToWeb(action: action, value: value)
    }
}
