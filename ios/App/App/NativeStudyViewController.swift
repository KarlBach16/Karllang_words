import UIKit

final class NativeStudyViewController: UIViewController {
    private let scrollView = UIScrollView()
    private let stackView = UIStackView()
    private var payload: [String: Any] = [:]
    var onAction: ((String, String?) -> Void)?

    private let karlBlue = UIColor(red: 0.16, green: 0.38, blue: 1.0, alpha: 1)
    private let karlGreen = UIColor(red: 0.0, green: 0.78, blue: 0.32, alpha: 1)

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor(red: 0.965, green: 0.969, blue: 0.973, alpha: 1)

        scrollView.translatesAutoresizingMaskIntoConstraints = false
        scrollView.alwaysBounceVertical = true

        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.axis = .vertical
        stackView.spacing = 14
        stackView.isLayoutMarginsRelativeArrangement = true
        stackView.directionalLayoutMargins = NSDirectionalEdgeInsets(
            top: 16,
            leading: 16,
            bottom: 28,
            trailing: 16
        )

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

    private func rebuild() {
        stackView.arrangedSubviews.forEach {
            stackView.removeArrangedSubview($0)
            $0.removeFromSuperview()
        }
        buildStartCard()
        buildSettingsCard()
    }

    private func buildStartCard() {
        let card = makeCard()
        let content = UIStackView()
        content.translatesAutoresizingMaskIntoConstraints = false
        content.axis = .vertical
        content.alignment = .fill
        content.spacing = 22

        let prompt = UILabel()
        prompt.text = payload["prompt"] as? String
        prompt.textColor = .label
        prompt.font = .systemFont(ofSize: 19, weight: .semibold)
        prompt.textAlignment = .center
        prompt.numberOfLines = 2

        let startButton = makeFilledButton(
            title: payload["startLabel"] as? String ?? "",
            color: karlGreen,
            action: "study_start"
        )

        content.addArrangedSubview(prompt)
        content.addArrangedSubview(startButton)
        card.addSubview(content)
        NSLayoutConstraint.activate([
            content.topAnchor.constraint(equalTo: card.topAnchor, constant: 34),
            content.leadingAnchor.constraint(equalTo: card.leadingAnchor, constant: 18),
            content.trailingAnchor.constraint(equalTo: card.trailingAnchor, constant: -18),
            content.bottomAnchor.constraint(equalTo: card.bottomAnchor, constant: -22)
        ])
        stackView.addArrangedSubview(card)
    }

    private func buildSettingsCard() {
        let card = UIStackView()
        card.axis = .vertical
        card.backgroundColor = .systemBackground
        card.layer.cornerRadius = 14
        card.layer.cornerCurve = .continuous
        card.clipsToBounds = true

        let rows = payload["rows"] as? [[String: Any]] ?? []
        for (index, row) in rows.enumerated() {
            card.addArrangedSubview(makeSelectionRow(row))
            if index < rows.count - 1 { card.addArrangedSubview(makeDivider()) }
        }

        if !rows.isEmpty { card.addArrangedSubview(makeDivider()) }
        let newSetButton = makeOutlinedButton(
            title: payload["newSetLabel"] as? String ?? "",
            action: "study_new_set"
        )
        let wrapper = UIView()
        newSetButton.translatesAutoresizingMaskIntoConstraints = false
        wrapper.addSubview(newSetButton)
        NSLayoutConstraint.activate([
            newSetButton.leadingAnchor.constraint(equalTo: wrapper.leadingAnchor, constant: 18),
            newSetButton.trailingAnchor.constraint(equalTo: wrapper.trailingAnchor, constant: -18),
            newSetButton.topAnchor.constraint(equalTo: wrapper.topAnchor, constant: 12),
            newSetButton.bottomAnchor.constraint(equalTo: wrapper.bottomAnchor, constant: -14)
        ])
        card.addArrangedSubview(wrapper)
        stackView.addArrangedSubview(card)
    }

    private func makeSelectionRow(_ rowData: [String: Any]) -> UIButton {
        let key = rowData["key"] as? String ?? ""
        let title = rowData["title"] as? String ?? ""
        let option = rowData["option"] as? [String: Any] ?? [:]

        let button = UIButton(type: .system)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.addAction(UIAction { [weak self] _ in
            self?.presentOptions(option, title: title, action: "study_\(key)")
        }, for: .touchUpInside)

        let titleLabel = UILabel()
        titleLabel.text = title
        titleLabel.font = .systemFont(ofSize: 17, weight: .semibold)
        titleLabel.textColor = .label
        titleLabel.setContentHuggingPriority(.defaultLow, for: .horizontal)

        let valueLabel = UILabel()
        valueLabel.text = selectedLabel(option)
        valueLabel.font = .systemFont(ofSize: 17, weight: .regular)
        valueLabel.textColor = karlBlue
        valueLabel.textAlignment = .right
        valueLabel.setContentHuggingPriority(.required, for: .horizontal)

        let chevron = UIImageView(image: UIImage(systemName: "chevron.right"))
        chevron.tintColor = .tertiaryLabel
        chevron.contentMode = .scaleAspectFit

        let row = UIStackView(arrangedSubviews: [titleLabel, valueLabel, chevron])
        row.translatesAutoresizingMaskIntoConstraints = false
        row.axis = .horizontal
        row.alignment = .center
        row.spacing = 9
        row.isUserInteractionEnabled = false
        button.addSubview(row)
        NSLayoutConstraint.activate([
            button.heightAnchor.constraint(equalToConstant: 58),
            row.leadingAnchor.constraint(equalTo: button.leadingAnchor, constant: 18),
            row.trailingAnchor.constraint(equalTo: button.trailingAnchor, constant: -18),
            row.centerYAnchor.constraint(equalTo: button.centerYAnchor),
            chevron.widthAnchor.constraint(equalToConstant: 9)
        ])
        return button
    }

    private func makeCard() -> UIView {
        let card = UIView()
        card.backgroundColor = .systemBackground
        card.layer.cornerRadius = 14
        card.layer.cornerCurve = .continuous
        card.clipsToBounds = true
        return card
    }

    private func makeDivider() -> UIView {
        let holder = UIView()
        let line = UIView()
        line.translatesAutoresizingMaskIntoConstraints = false
        line.backgroundColor = UIColor.systemGray4.withAlphaComponent(0.48)
        holder.addSubview(line)
        NSLayoutConstraint.activate([
            holder.heightAnchor.constraint(equalToConstant: 1 / UIScreen.main.scale),
            line.heightAnchor.constraint(equalToConstant: 1 / UIScreen.main.scale),
            line.leadingAnchor.constraint(equalTo: holder.leadingAnchor, constant: 18),
            line.trailingAnchor.constraint(equalTo: holder.trailingAnchor, constant: -18),
            line.centerYAnchor.constraint(equalTo: holder.centerYAnchor)
        ])
        return holder
    }

    private func makeFilledButton(title: String, color: UIColor, action: String) -> UIButton {
        var configuration = UIButton.Configuration.filled()
        configuration.title = title
        configuration.baseBackgroundColor = color
        configuration.baseForegroundColor = .white
        configuration.cornerStyle = .capsule
        configuration.contentInsets = NSDirectionalEdgeInsets(top: 12, leading: 16, bottom: 12, trailing: 16)
        let button = UIButton(configuration: configuration)
        button.titleLabel?.font = .systemFont(ofSize: 17, weight: .bold)
        button.heightAnchor.constraint(equalToConstant: 48).isActive = true
        button.addAction(UIAction { [weak self] _ in self?.onAction?(action, nil) }, for: .touchUpInside)
        return button
    }

    private func makeOutlinedButton(title: String, action: String) -> UIButton {
        var configuration = UIButton.Configuration.bordered()
        configuration.title = title
        configuration.baseForegroundColor = karlBlue
        configuration.cornerStyle = .capsule
        configuration.background.strokeColor = karlBlue.withAlphaComponent(0.35)
        configuration.background.strokeWidth = 1
        configuration.contentInsets = NSDirectionalEdgeInsets(top: 11, leading: 16, bottom: 11, trailing: 16)
        let button = UIButton(configuration: configuration)
        button.titleLabel?.font = .systemFont(ofSize: 17, weight: .bold)
        button.addAction(UIAction { [weak self] _ in self?.onAction?(action, nil) }, for: .touchUpInside)
        return button
    }

    private func selectedLabel(_ option: [String: Any]) -> String {
        let value = option["value"] as? String
        return (option["options"] as? [[String: Any]] ?? [])
            .first(where: { $0["value"] as? String == value })?["label"] as? String ?? ""
    }

    private func presentOptions(_ option: [String: Any], title: String, action: String) {
        guard let options = option["options"] as? [[String: Any]] else { return }
        let picker = NativeSettingsOptionsViewController(
            title: title,
            options: options,
            selectedValue: option["value"] as? String ?? ""
        ) { [weak self] value in
            self?.onAction?(action, value)
        }
        let navigation = UINavigationController(rootViewController: picker)
        navigation.modalPresentationStyle = .pageSheet
        present(navigation, animated: true)
    }
}
