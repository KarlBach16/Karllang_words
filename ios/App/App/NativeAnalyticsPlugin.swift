import Foundation
import Capacitor
import FirebaseAnalytics

@objc(NativeAnalyticsPlugin)
public class NativeAnalyticsPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "NativeAnalyticsPlugin"
    public let jsName = "NativeAnalytics"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "logEvent", returnType: CAPPluginReturnPromise)
    ]

    @objc func logEvent(_ call: CAPPluginCall) {
        guard let name = call.getString("name") else {
            call.reject("Missing event name")
            return
        }

        let params = call.getObject("params")
        Analytics.logEvent(name, parameters: params)
        call.resolve()
    }
}
