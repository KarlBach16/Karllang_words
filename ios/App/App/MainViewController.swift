import UIKit
import Capacitor

struct NativeChromeState {
    let view: String
    let title: String
    let activeTab: String
    let presentation: String
    let tabLabels: JSObject
    let settings: JSObject
    let home: JSObject
    let words: JSObject
    let training: JSObject
    let study: JSObject
}

class MainViewController: CAPBridgeViewController, UITabBarDelegate {
    private let nativeHeader = UIView()
    private let nativeHeaderTitle = UILabel()
    private let nativeHeaderSeparator = UIView()
    private let nativeTabBar = UITabBar()
    private var nativeTabBarHeightConstraint: NSLayoutConstraint?
    private var nativeChromePlugin: NativeChromePlugin?
    private let nativeSettingsController = NativeSettingsViewController()
    private let nativeHomeController = NativeHomeViewController()
    private let nativeWordsController = NativeWordsViewController()
    private let nativeTrainingController = NativeTrainingViewController()
    private let nativeStudyController = NativeStudyViewController()
    private var nativeShellInstalled = false

    var nativeChromeTopInset: CGFloat {
        view.safeAreaInsets.top + (nativeHeader.isHidden ? 0 : 52)
    }

    var nativeChromeBottomInset: CGFloat {
        nativeTabBar.isHidden ? 0 : 49 + view.safeAreaInsets.bottom
    }

    override open func viewDidLoad() {
        super.viewDidLoad()
        overrideUserInterfaceStyle = .light
        view.backgroundColor = .systemBackground
    }

    override open func capacitorDidLoad() {
        super.capacitorDidLoad()
        bridge?.registerPluginInstance(NativeAnalyticsPlugin())
        bridge?.registerPluginInstance(NativeImageSaverPlugin())
        bridge?.registerPluginInstance(NativeAppSettingsPlugin())

        let chromePlugin = NativeChromePlugin()
        chromePlugin.shellHost = self
        nativeChromePlugin = chromePlugin
        bridge?.registerPluginInstance(chromePlugin)
        installNativeShellIfNeeded()
    }

    override func viewSafeAreaInsetsDidChange() {
        super.viewSafeAreaInsetsDidChange()
        nativeTabBarHeightConstraint?.constant = 49 + view.safeAreaInsets.bottom
    }

    private func installNativeShellIfNeeded() {
        guard !nativeShellInstalled else { return }
        nativeShellInstalled = true

        nativeHeader.translatesAutoresizingMaskIntoConstraints = false
        nativeHeader.backgroundColor = .systemBackground
        nativeHeader.isHidden = true

        nativeHeaderTitle.translatesAutoresizingMaskIntoConstraints = false
        nativeHeaderTitle.font = .preferredFont(forTextStyle: .title2)
        nativeHeaderTitle.adjustsFontForContentSizeCategory = true
        nativeHeaderTitle.textColor = .label
        nativeHeaderTitle.numberOfLines = 1

        nativeHeaderSeparator.translatesAutoresizingMaskIntoConstraints = false
        nativeHeaderSeparator.backgroundColor = .separator

        nativeHeader.addSubview(nativeHeaderTitle)
        nativeHeader.addSubview(nativeHeaderSeparator)
        view.addSubview(nativeHeader)

        nativeTabBar.translatesAutoresizingMaskIntoConstraints = false
        nativeTabBar.delegate = self
        nativeTabBar.isTranslucent = true
        nativeTabBar.isHidden = true
        nativeTabBar.tintColor = UIColor(red: 0.16, green: 0.38, blue: 1.0, alpha: 1)
        nativeTabBar.unselectedItemTintColor = .secondaryLabel
        nativeTabBar.items = [
            makeTabItem(title: "Home", symbol: "house", tag: 0),
            makeTabItem(title: "Study", symbol: "text.book.closed", tag: 1),
            makeTabItem(title: "Drill", symbol: "scope", tag: 2),
            makeTabItem(title: "Words", symbol: "books.vertical", tag: 3),
            makeTabItem(title: "Settings", symbol: "gearshape", tag: 4)
        ]

        let appearance = UITabBarAppearance()
        appearance.configureWithDefaultBackground()
        appearance.backgroundEffect = UIBlurEffect(style: .systemChromeMaterial)
        appearance.shadowColor = .separator
        nativeTabBar.standardAppearance = appearance
        nativeTabBar.scrollEdgeAppearance = appearance
        view.addSubview(nativeTabBar)

        addChild(nativeSettingsController)
        nativeSettingsController.view.translatesAutoresizingMaskIntoConstraints = false
        nativeSettingsController.view.isHidden = true
        nativeSettingsController.onAction = { [weak self] action, value in
            self?.nativeChromePlugin?.emitSettingsAction(action: action, value: value)
        }
        view.addSubview(nativeSettingsController.view)
        nativeSettingsController.didMove(toParent: self)

        addChild(nativeHomeController)
        nativeHomeController.view.translatesAutoresizingMaskIntoConstraints = false
        nativeHomeController.view.isHidden = true
        view.addSubview(nativeHomeController.view)
        nativeHomeController.didMove(toParent: self)

        addChild(nativeWordsController)
        nativeWordsController.view.translatesAutoresizingMaskIntoConstraints = false
        nativeWordsController.view.isHidden = true
        nativeWordsController.onNavigate = { [weak self] view in
            self?.nativeChromePlugin?.emitNavigation(view: view)
        }
        nativeWordsController.onWordAction = { [weak self] action, wordId in
            self?.nativeChromePlugin?.emitWordAction(action: action, wordId: wordId)
        }
        nativeWordsController.onSearchAction = { [weak self] action, value in
            self?.nativeChromePlugin?.emitSearchAction(action: action, value: value)
        }
        view.addSubview(nativeWordsController.view)
        nativeWordsController.didMove(toParent: self)
        addChild(nativeTrainingController)
        nativeTrainingController.view.translatesAutoresizingMaskIntoConstraints = false
        nativeTrainingController.view.isHidden = true
        nativeTrainingController.onAction = { [weak self] action, value in self?.nativeChromePlugin?.emitTrainingAction(action: action, value: value) }
        view.addSubview(nativeTrainingController.view)
        nativeTrainingController.didMove(toParent: self)

        addChild(nativeStudyController)
        nativeStudyController.view.translatesAutoresizingMaskIntoConstraints = false
        nativeStudyController.view.isHidden = true
        nativeStudyController.onAction = { [weak self] action, value in
            self?.nativeChromePlugin?.emitStudyAction(action: action, value: value)
        }
        view.addSubview(nativeStudyController.view)
        nativeStudyController.didMove(toParent: self)

        nativeTabBarHeightConstraint = nativeTabBar.heightAnchor.constraint(
            equalToConstant: 49 + view.safeAreaInsets.bottom
        )

        NSLayoutConstraint.activate([
            nativeHeader.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            nativeHeader.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            nativeHeader.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            nativeHeader.heightAnchor.constraint(equalToConstant: 52),

            nativeHeaderTitle.leadingAnchor.constraint(equalTo: nativeHeader.leadingAnchor, constant: 20),
            nativeHeaderTitle.trailingAnchor.constraint(equalTo: nativeHeader.trailingAnchor, constant: -20),
            nativeHeaderTitle.centerYAnchor.constraint(equalTo: nativeHeader.centerYAnchor),

            nativeHeaderSeparator.leadingAnchor.constraint(equalTo: nativeHeader.leadingAnchor),
            nativeHeaderSeparator.trailingAnchor.constraint(equalTo: nativeHeader.trailingAnchor),
            nativeHeaderSeparator.bottomAnchor.constraint(equalTo: nativeHeader.bottomAnchor),
            nativeHeaderSeparator.heightAnchor.constraint(equalToConstant: 1 / UIScreen.main.scale),

            nativeTabBar.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            nativeTabBar.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            nativeTabBar.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            nativeTabBarHeightConstraint!,

            nativeSettingsController.view.topAnchor.constraint(equalTo: nativeHeader.bottomAnchor),
            nativeSettingsController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            nativeSettingsController.view.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            nativeSettingsController.view.bottomAnchor.constraint(equalTo: nativeTabBar.topAnchor),
            nativeHomeController.view.topAnchor.constraint(equalTo: nativeHeader.bottomAnchor),
            nativeHomeController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            nativeHomeController.view.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            nativeHomeController.view.bottomAnchor.constraint(equalTo: nativeTabBar.topAnchor),
            nativeWordsController.view.topAnchor.constraint(equalTo: nativeHeader.bottomAnchor),
            nativeWordsController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            nativeWordsController.view.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            nativeWordsController.view.bottomAnchor.constraint(equalTo: nativeTabBar.topAnchor),
            nativeTrainingController.view.topAnchor.constraint(equalTo: nativeHeader.bottomAnchor),
            nativeTrainingController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            nativeTrainingController.view.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            nativeTrainingController.view.bottomAnchor.constraint(equalTo: nativeTabBar.topAnchor),
            nativeStudyController.view.topAnchor.constraint(equalTo: nativeHeader.bottomAnchor),
            nativeStudyController.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            nativeStudyController.view.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            nativeStudyController.view.bottomAnchor.constraint(equalTo: nativeTabBar.topAnchor)
        ])

        view.bringSubviewToFront(nativeHeader)
        view.bringSubviewToFront(nativeTabBar)
    }

    private func makeTabItem(title: String, symbol: String, tag: Int) -> UITabBarItem {
        let item = UITabBarItem(title: title, image: UIImage(systemName: symbol), tag: tag)
        item.accessibilityIdentifier = "native-tab-\(tag)"
        return item
    }

    func applyNativeChrome(_ state: NativeChromeState) {
        installNativeShellIfNeeded()
        nativeHeaderTitle.text = state.title
        updateNativeTabLabels(state.tabLabels)
        selectNativeTab(state.activeTab)

        switch state.presentation {
        case "standard":
            nativeHeader.isHidden = false
            nativeTabBar.isHidden = false
        case "session":
            nativeHeader.isHidden = true
            nativeTabBar.isHidden = false
        default:
            nativeHeader.isHidden = true
            nativeTabBar.isHidden = true
        }

        let showNativeSettings = state.presentation == "standard" && state.activeTab == "settings"
        let showNativeHome = state.presentation == "standard" && state.activeTab == "user"
        let showNativeWords = state.presentation == "standard" && state.view == "words"
        let showNativeTraining = state.presentation == "standard" && state.view == "training"
        let studyReady = state.study["ready"] as? Bool ?? false
        let showNativeStudy = state.presentation == "standard" && state.view == "study" && studyReady
        nativeSettingsController.apply(payload: state.settings)
        nativeSettingsController.view.isHidden = !showNativeSettings
        nativeHomeController.apply(payload: state.home)
        nativeHomeController.view.isHidden = !showNativeHome
        nativeWordsController.apply(payload: state.words, screen: state.view)
        nativeWordsController.view.isHidden = !showNativeWords
        nativeTrainingController.apply(payload: state.training)
        nativeTrainingController.view.isHidden = !showNativeTraining
        nativeStudyController.apply(payload: state.study)
        nativeStudyController.view.isHidden = !showNativeStudy
        if showNativeSettings || showNativeHome || showNativeWords || showNativeTraining || showNativeStudy {
            if showNativeSettings { view.bringSubviewToFront(nativeSettingsController.view) }
            if showNativeHome { view.bringSubviewToFront(nativeHomeController.view) }
            if showNativeWords { view.bringSubviewToFront(nativeWordsController.view) }
            if showNativeTraining { view.bringSubviewToFront(nativeTrainingController.view) }
            if showNativeStudy { view.bringSubviewToFront(nativeStudyController.view) }
            view.bringSubviewToFront(nativeHeader)
            view.bringSubviewToFront(nativeTabBar)
        }
    }

    private func updateNativeTabLabels(_ labels: JSObject) {
        let views = ["user", "study", "training", "words", "settings"]
        for (index, viewName) in views.enumerated() {
            guard let item = nativeTabBar.items?[index] else { continue }
            if let label = labels[viewName] as? String, !label.isEmpty {
                item.title = label
            }
        }
    }

    private func selectNativeTab(_ viewName: String) {
        let tabIndex: Int
        switch viewName {
        case "user": tabIndex = 0
        case "study": tabIndex = 1
        case "training": tabIndex = 2
        case "words": tabIndex = 3
        case "settings": tabIndex = 4
        default: tabIndex = 1
        }
        nativeTabBar.selectedItem = nativeTabBar.items?[tabIndex]
    }

    func tabBar(_ tabBar: UITabBar, didSelect item: UITabBarItem) {
        let views = ["user", "study", "training", "words", "settings"]
        guard item.tag >= 0, item.tag < views.count else { return }
        nativeChromePlugin?.emitNavigation(view: views[item.tag])
    }

    func dispatchTrainingActionToWeb(action: String, value: String?) {
        var detail: [String: Any] = ["action": action]
        if let value { detail["value"] = value }
        guard JSONSerialization.isValidJSONObject(detail),
              let data = try? JSONSerialization.data(withJSONObject: detail),
              let json = String(data: data, encoding: .utf8) else { return }

        let script = "window.dispatchEvent(new CustomEvent('karllang:nativeTrainingAction', { detail: \(json) }));"
        bridge?.webView?.evaluateJavaScript(script)
    }

    func dispatchStudyActionToWeb(action: String, value: String?) {
        var detail: [String: Any] = ["action": action]
        if let value { detail["value"] = value }
        guard JSONSerialization.isValidJSONObject(detail),
              let data = try? JSONSerialization.data(withJSONObject: detail),
              let json = String(data: data, encoding: .utf8) else { return }

        let script = "window.dispatchEvent(new CustomEvent('karllang:nativeStudyAction', { detail: \(json) }));"
        bridge?.webView?.evaluateJavaScript(script)
    }
}
