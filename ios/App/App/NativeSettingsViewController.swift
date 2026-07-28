import UIKit

final class NativeSettingsViewController: UIViewController {
    private let scrollView = UIScrollView()
    private let stackView = UIStackView()
    private var payload: [String: Any] = [:]
    var onAction: ((String, String?) -> Void)?

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor(red: 0.965, green: 0.969, blue: 0.973, alpha: 1)

        scrollView.translatesAutoresizingMaskIntoConstraints = false
        scrollView.alwaysBounceVertical = true
        scrollView.keyboardDismissMode = .onDrag

        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.axis = .vertical
        stackView.spacing = 14
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.directionalLayoutMargins = NSDirectionalEdgeInsets(top: 16, leading: 16, bottom: 28, trailing: 16)

        view.addSubview(scrollView)
        scrollView.addSubview(stackView)
        NSLayoutConstraint.activate([
            scrollView.topAnchor.constraint(equalTo: view.topAnchor),
            scrollView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            scrollView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            scrollView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
            stackView.topAnchor.constraint(equalTo: scrollView.contentLayoutGuide.topAnchor),
            stackView.leadingAnchor.constraint(equalTo: scrollView.frameLayoutGuide.leadingAnchor),
            stackView.trailingAnchor.constraint(equalTo: scrollView.frameLayoutGuide.trailingAnchor),
            stackView.bottomAnchor.constraint(equalTo: scrollView.contentLayoutGuide.bottomAnchor)
        ])
    }

    func apply(payload: [String: Any]) {
        self.payload = payload
        guard isViewLoaded else { return }
        rebuild()
    }

    private var language: [String: Any] { payload["language"] as? [String: Any] ?? [:] }
    private var account: [String: Any] { payload["account"] as? [String: Any] ?? [:] }
    private var sync: [String: Any] { payload["sync"] as? [String: Any] ?? [:] }
    private var feedback: [String: Any] { payload["feedback"] as? [String: Any] ?? [:] }

    private func rebuild() {
        stackView.arrangedSubviews.forEach {
            stackView.removeArrangedSubview($0)
            $0.removeFromSuperview()
        }

        buildLanguageCard()
        buildAccountCard()
        if bool(sync, "visible") { buildSyncCard() }
        buildFeedbackCard()
    }

    private func buildLanguageCard() {
        let card = makeCard(title: string(language, "title", "Language"))
        addRow(
            to: card,
            makeSelectionRow(
                title: string(language, "uiLabel", "App language"),
                value: selectedOptionLabel(language["ui"] as? [String: Any]),
                action: "ui_language",
                option: language["ui"] as? [String: Any]
            )
        )
        addRow(
            to: card,
            makeSelectionRow(
                title: string(language, "studyLabel", "Study language"),
                value: selectedOptionLabel(language["study"] as? [String: Any]),
                action: "study_language",
                option: language["study"] as? [String: Any]
            ),
            divider: false
        )
        stackView.addArrangedSubview(card)
    }

    private func buildAccountCard() {
        let signedIn = bool(account, "signedIn")
        let card = makeCard(title: string(account, "title", "Account"))
        addRow(
            to: card,
            makeInfoRow(
                title: string(account, "status", "Guest mode"),
                detail: string(account, "detail")
            ),
            divider: !signedIn
        )

        if signedIn {
            addRow(
                to: card,
                makeOutlinedActionButton(
                    title: string(account, "signOutLabel", "Sign out"),
                    color: .systemRed,
                    action: "sign_out"
                ),
                divider: false,
                inset: true
            )
        } else {
            addRow(
                to: card,
                makeFilledActionButton(
                    title: string(account, "appleLabel", "Sign in with Apple"),
                    color: .label,
                    action: "sign_in_apple"
                ),
                divider: false,
                inset: true
            )
            addRow(
                to: card,
                makeFilledActionButton(
                    title: string(account, "googleLabel", "Sign in with Google"),
                    color: karlBlue,
                    action: "sign_in_google"
                ),
                divider: false,
                inset: true
            )
        }
        stackView.addArrangedSubview(card)
    }

    private func buildSyncCard() {
        let card = makeCard(title: string(sync, "title", "Sync"))
        let checking = bool(sync, "checking")
        let status = string(sync, "status")
        let detail = status.isEmpty && bool(sync, "panelVisible") ? string(sync, "detail") : status
        addRow(
            to: card,
            makeSyncRow(
                title: string(sync, "checkLabel", "Check sync"),
                detail: detail,
                isEnabled: !checking,
                action: "sync_check"
            ),
            divider: bool(sync, "panelVisible")
        )

        if bool(sync, "panelVisible") && bool(sync, "uploadVisible") {
            addRow(
                to: card,
                makeFilledActionButton(
                    title: string(sync, "uploadLabel", "Upload this device"),
                    color: karlGreen,
                    action: "sync_upload",
                    isEnabled: !bool(sync, "uploadDisabled")
                ),
                divider: false,
                inset: true
            )
        }
        if bool(sync, "panelVisible") && bool(sync, "downloadVisible") {
            addRow(
                to: card,
                makeFilledActionButton(
                    title: string(sync, "downloadLabel", "Use cloud data"),
                    color: karlBlue,
                    action: "sync_download",
                    isEnabled: !bool(sync, "downloadDisabled")
                ),
                divider: false,
                inset: true
            )
        }
        stackView.addArrangedSubview(card)
    }

    private func buildFeedbackCard() {
        let card = makeCard(title: string(feedback, "title", "Feedback"))
        addRow(to: card, makeSwitchRow(title: string(feedback, "soundLabel", "Sound"), isOn: bool(feedback, "soundEnabled"), action: "sound"))
        addRow(to: card, makeSwitchRow(title: string(feedback, "hapticLabel", "Haptics"), isOn: bool(feedback, "hapticEnabled"), action: "haptic"))
        addRow(to: card, makeSwitchRow(title: string(feedback, "reminderLabel", "Study reminder"), isOn: bool(feedback, "reminderEnabled"), action: "reminder"))
        addRow(
            to: card,
            makeSelectionRow(
                title: string(feedback, "reminderTimeLabel", "Reminder time"),
                value: selectedOptionLabel(feedback["reminderTime"] as? [String: Any]),
                action: "reminder_time",
                option: feedback["reminderTime"] as? [String: Any],
                isEnabled: bool(feedback, "reminderEnabled")
            )
        )
        addRow(
            to: card,
            makeOutlinedActionButton(
                title: string(feedback, "feedbackLabel", "Send feedback"),
                color: karlBlue,
                action: "feedback"
            ),
            divider: false,
            inset: true
        )
        stackView.addArrangedSubview(card)
    }

    private var karlBlue: UIColor { UIColor(red: 0.16, green: 0.38, blue: 1.0, alpha: 1) }
    private var karlGreen: UIColor { UIColor(red: 0.0, green: 0.78, blue: 0.32, alpha: 1) }

    private func makeCard(title: String) -> UIStackView {
        let card = UIStackView()
        card.axis = .vertical
        card.backgroundColor = .systemBackground
        card.layer.cornerRadius = 14
        card.layer.cornerCurve = .continuous
        card.clipsToBounds = true

        let header = UILabel()
        header.text = title
        header.textColor = .label
        header.font = .systemFont(ofSize: 20, weight: .bold)
        header.translatesAutoresizingMaskIntoConstraints = false
        let headerWrap = UIView()
        headerWrap.addSubview(header)
        NSLayoutConstraint.activate([
            header.leadingAnchor.constraint(equalTo: headerWrap.leadingAnchor, constant: 18),
            header.trailingAnchor.constraint(equalTo: headerWrap.trailingAnchor, constant: -18),
            header.topAnchor.constraint(equalTo: headerWrap.topAnchor, constant: 18),
            header.bottomAnchor.constraint(equalTo: headerWrap.bottomAnchor, constant: -8)
        ])
        card.addArrangedSubview(headerWrap)
        return card
    }

    private func addRow(to card: UIStackView, _ row: UIView, divider: Bool = true, inset: Bool = false) {
        if inset {
            let wrapper = UIView()
            row.translatesAutoresizingMaskIntoConstraints = false
            wrapper.addSubview(row)
            NSLayoutConstraint.activate([
                row.leadingAnchor.constraint(equalTo: wrapper.leadingAnchor, constant: 18),
                row.trailingAnchor.constraint(equalTo: wrapper.trailingAnchor, constant: -18),
                row.topAnchor.constraint(equalTo: wrapper.topAnchor, constant: 8),
                row.bottomAnchor.constraint(equalTo: wrapper.bottomAnchor, constant: -4)
            ])
            card.addArrangedSubview(wrapper)
        } else {
            card.addArrangedSubview(row)
        }
        if divider {
            let line = UIView()
            line.backgroundColor = .separator
            line.translatesAutoresizingMaskIntoConstraints = false
            let holder = UIView()
            holder.addSubview(line)
            NSLayoutConstraint.activate([
                line.heightAnchor.constraint(equalToConstant: 1 / UIScreen.main.scale),
                line.leadingAnchor.constraint(equalTo: holder.leadingAnchor, constant: 18),
                line.trailingAnchor.constraint(equalTo: holder.trailingAnchor, constant: -18),
                line.centerYAnchor.constraint(equalTo: holder.centerYAnchor)
            ])
            card.addArrangedSubview(holder)
            holder.heightAnchor.constraint(equalToConstant: 1 / UIScreen.main.scale).isActive = true
        }
    }

    private func makeInfoRow(title: String, detail: String) -> UIView {
        let row = makeRowBase()
        let labels = makeLabels(title: title, detail: detail)
        row.addSubview(labels)
        NSLayoutConstraint.activate([
            labels.leadingAnchor.constraint(equalTo: row.leadingAnchor, constant: 18),
            labels.trailingAnchor.constraint(equalTo: row.trailingAnchor, constant: -18),
            labels.topAnchor.constraint(equalTo: row.topAnchor, constant: 8),
            labels.bottomAnchor.constraint(equalTo: row.bottomAnchor, constant: -8)
        ])
        return row
    }

    private func makeSyncRow(title: String, detail: String, isEnabled: Bool, action: String) -> UIControl {
        let row = UIControl()
        row.translatesAutoresizingMaskIntoConstraints = false
        row.isEnabled = isEnabled
        row.alpha = isEnabled ? 1 : 0.55
        row.addAction(UIAction { [weak self] _ in self?.onAction?(action, nil) }, for: .touchUpInside)
        let labels = makeLabels(title: title, detail: detail)
        let chevron = makeChevron()
        row.addSubview(labels)
        row.addSubview(chevron)
        NSLayoutConstraint.activate([
            row.heightAnchor.constraint(greaterThanOrEqualToConstant: detail.isEmpty ? 54 : 64),
            labels.leadingAnchor.constraint(equalTo: row.leadingAnchor, constant: 18),
            labels.trailingAnchor.constraint(equalTo: chevron.leadingAnchor, constant: -8),
            labels.topAnchor.constraint(equalTo: row.topAnchor, constant: 9),
            labels.bottomAnchor.constraint(equalTo: row.bottomAnchor, constant: -9),
            chevron.trailingAnchor.constraint(equalTo: row.trailingAnchor, constant: -18),
            chevron.centerYAnchor.constraint(equalTo: row.centerYAnchor)
        ])
        return row
    }

    private func makeSelectionRow(title: String, value: String, action: String, option: [String: Any]?, isEnabled: Bool = true) -> UIControl {
        let row = UIControl()
        row.translatesAutoresizingMaskIntoConstraints = false
        row.isEnabled = isEnabled
        row.alpha = isEnabled ? 1 : 0.45
        row.addAction(UIAction { [weak self] _ in self?.showOptions(option, action: action) }, for: .touchUpInside)

        let titleLabel = makeText(title, size: 16, weight: .semibold, color: .label)
        let valueLabel = makeText(value, size: 16, weight: .regular, color: karlBlue)
        valueLabel.textAlignment = .right
        let chevron = makeChevron()
        row.addSubview(titleLabel)
        row.addSubview(valueLabel)
        row.addSubview(chevron)
        NSLayoutConstraint.activate([
            row.heightAnchor.constraint(equalToConstant: 56),
            titleLabel.leadingAnchor.constraint(equalTo: row.leadingAnchor, constant: 18),
            titleLabel.centerYAnchor.constraint(equalTo: row.centerYAnchor),
            valueLabel.leadingAnchor.constraint(greaterThanOrEqualTo: titleLabel.trailingAnchor, constant: 12),
            valueLabel.trailingAnchor.constraint(equalTo: chevron.leadingAnchor, constant: -8),
            valueLabel.centerYAnchor.constraint(equalTo: row.centerYAnchor),
            chevron.trailingAnchor.constraint(equalTo: row.trailingAnchor, constant: -18),
            chevron.centerYAnchor.constraint(equalTo: row.centerYAnchor)
        ])
        return row
    }

    private func makeSwitchRow(title: String, isOn: Bool, action: String) -> UIView {
        let row = makeRowBase(height: 56)
        let titleLabel = makeText(title, size: 16, weight: .semibold, color: .label)
        let toggle = UISwitch()
        toggle.translatesAutoresizingMaskIntoConstraints = false
        toggle.isOn = isOn
        toggle.onTintColor = karlGreen
        toggle.addAction(UIAction { [weak self] _ in self?.onAction?(action, nil) }, for: .valueChanged)
        row.addSubview(titleLabel)
        row.addSubview(toggle)
        NSLayoutConstraint.activate([
            titleLabel.leadingAnchor.constraint(equalTo: row.leadingAnchor, constant: 18),
            titleLabel.centerYAnchor.constraint(equalTo: row.centerYAnchor),
            toggle.trailingAnchor.constraint(equalTo: row.trailingAnchor, constant: -18),
            toggle.centerYAnchor.constraint(equalTo: row.centerYAnchor)
        ])
        return row
    }

    private func makeFilledActionButton(title: String, color: UIColor, action: String, isEnabled: Bool = true) -> UIButton {
        var configuration = UIButton.Configuration.filled()
        configuration.title = title
        configuration.baseBackgroundColor = color
        configuration.baseForegroundColor = .white
        configuration.cornerStyle = .capsule
        configuration.contentInsets = NSDirectionalEdgeInsets(top: 12, leading: 16, bottom: 12, trailing: 16)
        let button = UIButton(configuration: configuration)
        button.titleLabel?.font = .systemFont(ofSize: 17, weight: .bold)
        button.isEnabled = isEnabled
        button.addAction(UIAction { [weak self] _ in self?.onAction?(action, nil) }, for: .touchUpInside)
        return button
    }

    private func makeOutlinedActionButton(title: String, color: UIColor, action: String) -> UIButton {
        var configuration = UIButton.Configuration.bordered()
        configuration.title = title
        configuration.baseForegroundColor = color
        configuration.cornerStyle = .capsule
        configuration.background.strokeColor = color.withAlphaComponent(0.35)
        configuration.background.strokeWidth = 1
        configuration.contentInsets = NSDirectionalEdgeInsets(top: 11, leading: 16, bottom: 11, trailing: 16)
        let button = UIButton(configuration: configuration)
        button.titleLabel?.font = .systemFont(ofSize: 17, weight: .bold)
        button.addAction(UIAction { [weak self] _ in self?.onAction?(action, nil) }, for: .touchUpInside)
        return button
    }

    private func makeRowBase(height: CGFloat? = nil) -> UIView {
        let row = UIView()
        row.translatesAutoresizingMaskIntoConstraints = false
        if let height { row.heightAnchor.constraint(equalToConstant: height).isActive = true }
        return row
    }

    private func makeLabels(title: String, detail: String) -> UIStackView {
        let labels = UIStackView()
        labels.translatesAutoresizingMaskIntoConstraints = false
        labels.axis = .vertical
        labels.spacing = 3
        labels.addArrangedSubview(makeText(title, size: 16, weight: .semibold, color: .label))
        if !detail.isEmpty { labels.addArrangedSubview(makeText(detail, size: 13, weight: .regular, color: .secondaryLabel, lines: 2)) }
        return labels
    }

    private func makeChevron() -> UIImageView {
        let image = UIImageView(image: UIImage(systemName: "chevron.right"))
        image.translatesAutoresizingMaskIntoConstraints = false
        image.tintColor = .tertiaryLabel
        image.contentMode = .scaleAspectFit
        image.setContentHuggingPriority(.required, for: .horizontal)
        NSLayoutConstraint.activate([image.widthAnchor.constraint(equalToConstant: 10), image.heightAnchor.constraint(equalToConstant: 16)])
        return image
    }

    private func makeText(_ text: String, size: CGFloat, weight: UIFont.Weight, color: UIColor, lines: Int = 1) -> UILabel {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.text = text
        label.font = .systemFont(ofSize: size, weight: weight)
        label.textColor = color
        label.numberOfLines = lines
        return label
    }

    private func string(_ dictionary: [String: Any], _ key: String, _ fallback: String = "") -> String { dictionary[key] as? String ?? fallback }
    private func bool(_ dictionary: [String: Any], _ key: String) -> Bool { dictionary[key] as? Bool ?? false }

    private func selectedOptionLabel(_ option: [String: Any]?) -> String {
        guard let option, let value = option["value"] as? String,
              let options = option["options"] as? [[String: Any]] else { return "" }
        return options.first(where: { ($0["value"] as? String) == value })?["label"] as? String ?? value
    }

    private func showOptions(_ option: [String: Any]?, action: String) {
        guard let option, let options = option["options"] as? [[String: Any]] else { return }
        let title: String
        if action == "ui_language" { title = string(language, "uiLabel") }
        else if action == "study_language" { title = string(language, "studyLabel") }
        else { title = string(feedback, "reminderTimeLabel") }
        let picker = NativeSettingsOptionsViewController(title: title, options: options, selectedValue: option["value"] as? String ?? "") { [weak self] value in
            self?.onAction?(action, value)
        }
        let navigation = UINavigationController(rootViewController: picker)
        navigation.modalPresentationStyle = .pageSheet
        present(navigation, animated: true)
    }
}

final class NativeSettingsOptionsViewController: UITableViewController {
    private let options: [[String: Any]]
    private let selectedValue: String
    private let onSelect: (String) -> Void

    init(title: String, options: [[String: Any]], selectedValue: String, onSelect: @escaping (String) -> Void) {
        self.options = options
        self.selectedValue = selectedValue
        self.onSelect = onSelect
        super.init(style: .insetGrouped)
        self.title = title
    }

    required init?(coder: NSCoder) { nil }

    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.backgroundColor = .systemGroupedBackground
        navigationItem.leftBarButtonItem = UIBarButtonItem(barButtonSystemItem: .close, target: self, action: #selector(close))
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int { options.count }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = UITableViewCell(style: .default, reuseIdentifier: "native-settings-option")
        let option = options[indexPath.row]
        let value = option["value"] as? String ?? ""
        cell.textLabel?.text = option["label"] as? String ?? value
        cell.accessoryType = value == selectedValue ? .checkmark : .none
        return cell
    }

    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let value = options[indexPath.row]["value"] as? String ?? ""
        dismiss(animated: true) { [onSelect] in onSelect(value) }
    }

    @objc private func close() { dismiss(animated: true) }
}
