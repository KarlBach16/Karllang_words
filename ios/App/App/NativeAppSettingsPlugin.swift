import Capacitor
import UIKit

@objc(NativeAppSettingsPlugin)
public class NativeAppSettingsPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "NativeAppSettingsPlugin"
    public let jsName = "NativeAppSettings"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "openAppSettings", returnType: CAPPluginReturnPromise)
    ]

    @objc func openAppSettings(_ call: CAPPluginCall) {
        guard let url = URL(string: UIApplication.openSettingsURLString),
              UIApplication.shared.canOpenURL(url) else {
            call.reject("App settings are unavailable")
            return
        }

        DispatchQueue.main.async {
            UIApplication.shared.open(url, options: [:]) { success in
                if success {
                    call.resolve()
                } else {
                    call.reject("Failed to open app settings")
                }
            }
        }
    }
}
