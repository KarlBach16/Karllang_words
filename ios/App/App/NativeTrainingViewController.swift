import UIKit

final class NativeTrainingViewController: UIViewController {
    private let scrollView = UIScrollView()
    private let stackView = UIStackView()
    private var payload: [String: Any] = [:]
    var onAction: ((String, String?) -> Void)?

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor(red: 0.965, green: 0.969, blue: 0.973, alpha: 1)
        scrollView.translatesAutoresizingMaskIntoConstraints = false
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
        stackView.arrangedSubviews.forEach { $0.removeFromSuperview() }
        buildTargetsCard()
        buildOptionsCard()
        buildStartButton()
    }

    private func buildTargetsCard() {
        let card = makeCard(title: payload["targetTitle"] as? String ?? "")
        let targets = payload["targets"] as? [[String: Any]] ?? []
        for (index, target) in targets.enumerated() {
            card.addArrangedSubview(makeTargetRow(target))
            if index < targets.count - 1 {
                card.addArrangedSubview(makeSeparator())
            }
        }
    }

    private func buildOptionsCard() {
        let card = makeCard(title: "")
        addOptionRow(to: card, title: payload["modeTitle"] as? String ?? "", key: "mode")
        card.addArrangedSubview(makeSeparator())
        addOptionRow(to: card, title: payload["countTitle"] as? String ?? "", key: "count")
    }

    private func makeTargetRow(_ target: [String: Any]) -> UIView {
        let row = UIStackView()
        row.translatesAutoresizingMaskIntoConstraints = false
        row.axis = .horizontal
        row.alignment = .center
        row.spacing = 12

        let label = UILabel()
        label.text = target["label"] as? String
        label.font = .systemFont(ofSize: 17, weight: .semibold)
        label.numberOfLines = 1

        let toggle = UISwitch()
        toggle.translatesAutoresizingMaskIntoConstraints = false
        toggle.isOn = target["enabled"] as? Bool ?? false
        toggle.onTintColor = UIColor(red: 0.0, green: 0.78, blue: 0.32, alpha: 1)
        let action = target["action"] as? String ?? ""
        toggle.addAction(UIAction { [weak self] _ in self?.onAction?(action, nil) }, for: .valueChanged)

        row.addArrangedSubview(label)
        row.addArrangedSubview(toggle)

        let container = UIView()
        container.addSubview(row)
        NSLayoutConstraint.activate([
            row.topAnchor.constraint(equalTo: container.topAnchor, constant: 14),
            row.leadingAnchor.constraint(equalTo: container.leadingAnchor, constant: 18),
            row.trailingAnchor.constraint(equalTo: container.trailingAnchor, constant: -18),
            row.bottomAnchor.constraint(equalTo: container.bottomAnchor, constant: -14)
        ])
        return container
    }

    private func addOptionRow(to card: UIStackView, title: String, key: String) {
        let option = payload[key] as? [String: Any] ?? [:]
        let button = UIButton(type: .system)
        button.translatesAutoresizingMaskIntoConstraints = false
        button.isExclusiveTouch = true
        button.addAction(UIAction { [weak self] _ in
            self?.presentOptions(option, title: title, action: "training_\(key)")
        }, for: .touchUpInside)

        let titleLabel = UILabel()
        titleLabel.text = title
        titleLabel.font = .systemFont(ofSize: 17, weight: .semibold)
        titleLabel.setContentHuggingPriority(.defaultLow, for: .horizontal)

        let valueLabel = UILabel()
        valueLabel.text = selectedLabel(option)
        valueLabel.font = .systemFont(ofSize: 17, weight: .regular)
        valueLabel.textColor = UIColor(red: 0.18, green: 0.40, blue: 0.96, alpha: 1)
        valueLabel.textAlignment = .right
        valueLabel.setContentHuggingPriority(.required, for: .horizontal)

        let chevron = UIImageView(image: UIImage(systemName: "chevron.right"))
        chevron.tintColor = .tertiaryLabel
        chevron.contentMode = .scaleAspectFit
        chevron.setContentHuggingPriority(.required, for: .horizontal)

        let row = UIStackView(arrangedSubviews: [titleLabel, valueLabel, chevron])
        row.translatesAutoresizingMaskIntoConstraints = false
        row.axis = .horizontal
        row.alignment = .center
        row.spacing = 9
        row.isUserInteractionEnabled = false
        button.addSubview(row)
        NSLayoutConstraint.activate([
            button.heightAnchor.constraint(greaterThanOrEqualToConstant: 56),
            row.topAnchor.constraint(equalTo: button.topAnchor, constant: 16),
            row.leadingAnchor.constraint(equalTo: button.leadingAnchor, constant: 18),
            row.trailingAnchor.constraint(equalTo: button.trailingAnchor, constant: -18),
            row.bottomAnchor.constraint(equalTo: button.bottomAnchor, constant: -16),
            chevron.widthAnchor.constraint(equalToConstant: 9)
        ])
        card.addArrangedSubview(button)
    }

    private func buildStartButton() {
        var config = UIButton.Configuration.filled()
        config.title = payload["startLabel"] as? String
        config.baseBackgroundColor = UIColor(red: 0.0, green: 0.78, blue: 0.32, alpha: 1)
        config.baseForegroundColor = .white
        config.cornerStyle = .capsule
        config.contentInsets = NSDirectionalEdgeInsets(top: 12, leading: 16, bottom: 12, trailing: 16)
        let button = UIButton(configuration: config)
        button.titleLabel?.font = .systemFont(ofSize: 17, weight: .bold)
        button.heightAnchor.constraint(equalToConstant: 48).isActive = true
        button.addAction(UIAction { [weak self] _ in self?.onAction?("training_start", nil) }, for: .touchUpInside)
        stackView.addArrangedSubview(button)
    }

    private func makeCard(title: String) -> UIStackView {
        let card = UIStackView()
        card.axis = .vertical
        card.backgroundColor = .systemBackground
        card.layer.cornerRadius = 14
        card.clipsToBounds = true
        if !title.isEmpty {
            let label = UILabel()
            label.text = title
            label.font = .systemFont(ofSize: 20, weight: .bold)
            let header = UIView()
            label.translatesAutoresizingMaskIntoConstraints = false
            header.addSubview(label)
            NSLayoutConstraint.activate([
                label.topAnchor.constraint(equalTo: header.topAnchor, constant: 18),
                label.leadingAnchor.constraint(equalTo: header.leadingAnchor, constant: 18),
                label.trailingAnchor.constraint(equalTo: header.trailingAnchor, constant: -18),
                label.bottomAnchor.constraint(equalTo: header.bottomAnchor, constant: -8)
            ])
            card.addArrangedSubview(header)
        }
        stackView.addArrangedSubview(card)
        return card
    }

    private func makeSeparator() -> UIView {
        let holder = UIView()
        let separator = UIView()
        separator.translatesAutoresizingMaskIntoConstraints = false
        separator.backgroundColor = UIColor.systemGray4.withAlphaComponent(0.48)
        holder.addSubview(separator)
        NSLayoutConstraint.activate([
            holder.heightAnchor.constraint(equalToConstant: 9),
            separator.heightAnchor.constraint(equalToConstant: 1 / UIScreen.main.scale),
            separator.leadingAnchor.constraint(equalTo: holder.leadingAnchor, constant: 18),
            separator.trailingAnchor.constraint(equalTo: holder.trailingAnchor, constant: -18),
            separator.centerYAnchor.constraint(equalTo: holder.centerYAnchor)
        ])
        return holder
    }

    private func selectedLabel(_ option: [String: Any]) -> String {
        let value = option["value"] as? String
        return (option["options"] as? [[String: Any]] ?? []).first(where: { $0["value"] as? String == value })?["label"] as? String ?? ""
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
