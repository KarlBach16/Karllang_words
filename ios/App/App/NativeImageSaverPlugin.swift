import Capacitor
import Photos
import UIKit

@objc(NativeImageSaverPlugin)
public class NativeImageSaverPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "NativeImageSaverPlugin"
    public let jsName = "NativeImageSaver"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "saveImage", returnType: CAPPluginReturnPromise)
    ]

    @objc func saveImage(_ call: CAPPluginCall) {
        guard let dataUrl = call.getString("dataUrl") else {
            call.reject("Missing dataUrl")
            return
        }

        guard let commaIndex = dataUrl.firstIndex(of: ",") else {
            call.reject("Invalid dataUrl")
            return
        }

        let base64 = String(dataUrl[dataUrl.index(after: commaIndex)...])
        guard let data = Data(base64Encoded: base64),
              let image = UIImage(data: data) else {
            call.reject("Invalid image data")
            return
        }

        PHPhotoLibrary.requestAuthorization(for: .addOnly) { status in
            guard status == .authorized || status == .limited else {
                call.reject("Photo permission denied")
                return
            }

            PHPhotoLibrary.shared().performChanges({
                PHAssetChangeRequest.creationRequestForAsset(from: image)
            }, completionHandler: { success, error in
                DispatchQueue.main.async {
                    if success {
                        call.resolve()
                    } else {
                        call.reject(error?.localizedDescription ?? "Failed to save image")
                    }
                }
            })
        }
    }
}
