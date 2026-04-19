import Foundation
import AVFoundation
import Capacitor

@objc(NativeTTSPlugin)
public class NativeTTSPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "NativeTTSPlugin"
    public let jsName = "NativeTTS"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "speak", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "stop", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "isAvailable", returnType: CAPPluginReturnPromise)
    ]

    private let synthesizer = AVSpeechSynthesizer()

    @objc public func speak(_ call: CAPPluginCall) {
        guard let text = call.getString("text"), !text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
            call.reject("text is required")
            return
        }

        let lang = call.getString("lang") ?? "en-US"

        DispatchQueue.main.async {
            self.synthesizer.stopSpeaking(at: .immediate)

            let utterance = AVSpeechUtterance(string: text)
            utterance.voice = self.resolveVoice(lang: lang)

            self.synthesizer.speak(utterance)
            call.resolve()
        }
    }

    @objc public func stop(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            self.synthesizer.stopSpeaking(at: .immediate)
            call.resolve()
        }
    }

    @objc public func isAvailable(_ call: CAPPluginCall) {
        let lang = call.getString("lang") ?? "en-US"
        let voice = resolveVoice(lang: lang)

        call.resolve([
            "available": voice != nil
        ])
    }

    private func resolveVoice(lang: String) -> AVSpeechSynthesisVoice? {
        if let exact = AVSpeechSynthesisVoice(language: lang) {
            return exact
        }

        let normalized = lang.lowercased()
        let languagePrefix = normalized.components(separatedBy: "-").first ?? normalized

        return AVSpeechSynthesisVoice.speechVoices().first { voice in
            voice.language.lowercased().hasPrefix(languagePrefix)
        }
    }
}
