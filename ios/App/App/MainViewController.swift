import UIKit
import Capacitor

class MainViewController: CAPBridgeViewController {
    override open func viewDidLoad() {
        super.viewDidLoad()
        overrideUserInterfaceStyle = .light
    }

    override open func capacitorDidLoad() {
        super.capacitorDidLoad()
        bridge?.registerPluginInstance(NativeAnalyticsPlugin())
        bridge?.registerPluginInstance(NativeImageSaverPlugin())
        bridge?.registerPluginInstance(NativeAppSettingsPlugin())
    }
}
