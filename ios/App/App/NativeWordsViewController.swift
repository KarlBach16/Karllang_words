import UIKit

final class NativeWordsViewController: UIViewController {
    private let scrollView = UIScrollView()
    private let stackView = UIStackView()
    private var payload: [String: Any] = [:]
    private var screen = "words"
    var onNavigate: ((String) -> Void)?
    var onWordAction: ((String, String) -> Void)?
    var onSearchAction: ((String, String) -> Void)?
    private let karlBlue = UIColor(red: 0.16, green: 0.38, blue: 1.0, alpha: 1)

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor(red: 0.965, green: 0.969, blue: 0.973, alpha: 1)
        scrollView.translatesAutoresizingMaskIntoConstraints = false
        scrollView.alwaysBounceVertical = true
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.axis = .vertical
        stackView.spacing = 12
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

    func apply(payload: [String: Any], screen: String) {
        self.payload = payload
        self.screen = screen
        guard isViewLoaded else { return }
        rebuild()
    }

    private func rebuild() {
        stackView.arrangedSubviews.forEach {
            stackView.removeArrangedSubview($0)
            $0.removeFromSuperview()
        }
        if screen == "search" {
            buildSearch()
        } else if screen == "mistakes" || screen == "bookmark" {
            buildList()
        } else {
            buildHub()
        }
    }

    private func buildSearch() {
        let search = payload["search"] as? [String: Any] ?? [:]
        let field = UISearchTextField()
        field.placeholder = search["placeholder"] as? String ?? "Search"
        field.text = search["query"] as? String ?? ""
        field.addAction(UIAction { [weak self, weak field] _ in
            self?.onSearchAction?("search_query", field?.text ?? "")
        }, for: .editingChanged)
        let mode = UIButton(configuration: .bordered())
        mode.configuration?.title = search["modeLabel"] as? String ?? ""
        mode.addAction(UIAction { [weak self] _ in self?.showSearchModes(search) }, for: .touchUpInside)
        let controls = UIStackView(arrangedSubviews: [field, mode])
        controls.axis = .horizontal
        controls.spacing = 8
        controls.alignment = .fill
        mode.widthAnchor.constraint(greaterThanOrEqualToConstant: 104).isActive = true
        stackView.addArrangedSubview(controls)
        let items = search["items"] as? [[String: Any]] ?? []
        for item in items { stackView.addArrangedSubview(makeWordItem(item)) }
    }

    private func showSearchModes(_ search: [String: Any]) {
        let sheet = UIAlertController(title: nil, message: nil, preferredStyle: .actionSheet)
        for mode in search["modes"] as? [[String: Any]] ?? [] {
            let label = mode["label"] as? String ?? ""
            let value = mode["value"] as? String ?? ""
            sheet.addAction(UIAlertAction(title: label, style: .default) { [weak self] _ in self?.onSearchAction?("search_mode", value) })
        }
        sheet.addAction(UIAlertAction(title: "Cancel", style: .cancel))
        present(sheet, animated: true)
    }

    private func buildHub() {
        let items = payload["items"] as? [[String: Any]] ?? []
        for item in items {
            stackView.addArrangedSubview(makeHubItem(
                label: item["label"] as? String ?? "",
                icon: item["icon"] as? String ?? "books.vertical",
                action: item["action"] as? String ?? "words"
            ))
        }
    }

    private func buildList() {
        let list = payload["list"] as? [String: Any] ?? [:]
        let items = list["items"] as? [[String: Any]] ?? []
        if items.isEmpty {
            let empty = UILabel()
            empty.text = list["emptyLabel"] as? String ?? ""
            empty.textColor = .secondaryLabel
            empty.font = .systemFont(ofSize: 16)
            empty.textAlignment = .center
            empty.numberOfLines = 0
            empty.backgroundColor = .systemBackground
            empty.layer.cornerRadius = 14
            empty.clipsToBounds = true
            empty.heightAnchor.constraint(equalToConstant: 112).isActive = true
            stackView.addArrangedSubview(empty)
            return
        }
        for item in items { stackView.addArrangedSubview(makeWordItem(item)) }
    }

    private func makeHubItem(label: String, icon: String, action: String) -> UIControl {
        let control = UIControl()
        control.translatesAutoresizingMaskIntoConstraints = false
        control.backgroundColor = .systemBackground
        control.layer.cornerRadius = 14
        control.layer.cornerCurve = .continuous
        control.heightAnchor.constraint(equalToConstant: 72).isActive = true
        control.addAction(UIAction { [weak self] _ in self?.onNavigate?(action) }, for: .touchUpInside)
        let image = UIImageView(image: UIImage(systemName: symbolName(for: icon)))
        image.translatesAutoresizingMaskIntoConstraints = false
        image.tintColor = karlBlue
        image.preferredSymbolConfiguration = UIImage.SymbolConfiguration(pointSize: 21, weight: .semibold)
        let title = UILabel()
        title.translatesAutoresizingMaskIntoConstraints = false
        title.text = label
        title.font = .systemFont(ofSize: 17, weight: .semibold)
        title.textColor = .label
        let chevron = UIImageView(image: UIImage(systemName: "chevron.right"))
        chevron.translatesAutoresizingMaskIntoConstraints = false
        chevron.tintColor = .tertiaryLabel
        chevron.preferredSymbolConfiguration = UIImage.SymbolConfiguration(pointSize: 15, weight: .semibold)
        control.addSubview(image)
        control.addSubview(title)
        control.addSubview(chevron)
        NSLayoutConstraint.activate([
            image.leadingAnchor.constraint(equalTo: control.leadingAnchor, constant: 18), image.centerYAnchor.constraint(equalTo: control.centerYAnchor), image.widthAnchor.constraint(equalToConstant: 24),
            title.leadingAnchor.constraint(equalTo: image.trailingAnchor, constant: 14), title.trailingAnchor.constraint(equalTo: chevron.leadingAnchor, constant: -12), title.centerYAnchor.constraint(equalTo: control.centerYAnchor),
            chevron.trailingAnchor.constraint(equalTo: control.trailingAnchor, constant: -18), chevron.centerYAnchor.constraint(equalTo: control.centerYAnchor)
        ])
        return control
    }

    private func makeWordItem(_ item: [String: Any]) -> UIControl {
        let id = item["id"] as? String ?? ""
        let row = UIControl()
        row.translatesAutoresizingMaskIntoConstraints = false
        row.backgroundColor = .systemBackground
        row.layer.cornerRadius = 14
        row.layer.cornerCurve = .continuous
        row.addAction(UIAction { [weak self] _ in self?.onWordAction?("word_detail", id) }, for: .touchUpInside)
        let title = UILabel()
        title.translatesAutoresizingMaskIntoConstraints = false
        title.text = item["word"] as? String ?? ""
        title.font = .systemFont(ofSize: 18, weight: .bold)
        title.textColor = .label
        let meta = UILabel()
        meta.translatesAutoresizingMaskIntoConstraints = false
        meta.text = item["meta"] as? String ?? ""
        meta.font = .systemFont(ofSize: 14)
        meta.textColor = .secondaryLabel
        meta.numberOfLines = 2
        let actions = UIStackView()
        actions.translatesAutoresizingMaskIntoConstraints = false
        actions.axis = .horizontal
        actions.spacing = 4
        if item["canSpeak"] as? Bool == true { actions.addArrangedSubview(makeIconButton("speaker.wave.2", action: "word_speak", id: id)) }
        actions.addArrangedSubview(makeIconButton(item["bookmarked"] as? Bool == true ? "bookmark.fill" : "bookmark", action: "word_bookmark", id: id))
        row.addSubview(title)
        row.addSubview(meta)
        row.addSubview(actions)
        NSLayoutConstraint.activate([
            row.heightAnchor.constraint(greaterThanOrEqualToConstant: 82),
            title.leadingAnchor.constraint(equalTo: row.leadingAnchor, constant: 18), title.trailingAnchor.constraint(equalTo: actions.leadingAnchor, constant: -8), title.topAnchor.constraint(equalTo: row.topAnchor, constant: 14),
            meta.leadingAnchor.constraint(equalTo: title.leadingAnchor), meta.trailingAnchor.constraint(equalTo: actions.leadingAnchor, constant: -8), meta.topAnchor.constraint(equalTo: title.bottomAnchor, constant: 4), meta.bottomAnchor.constraint(lessThanOrEqualTo: row.bottomAnchor, constant: -14),
            actions.trailingAnchor.constraint(equalTo: row.trailingAnchor, constant: -10), actions.centerYAnchor.constraint(equalTo: row.centerYAnchor)
        ])
        return row
    }

    private func makeIconButton(_ symbol: String, action: String, id: String) -> UIButton {
        var config = UIButton.Configuration.plain()
        config.image = UIImage(systemName: symbol)
        config.baseForegroundColor = karlBlue
        config.contentInsets = NSDirectionalEdgeInsets(top: 8, leading: 8, bottom: 8, trailing: 8)
        let button = UIButton(configuration: config)
        button.addAction(UIAction { [weak self] _ in self?.onWordAction?(action, id) }, for: .touchUpInside)
        return button
    }

    private func symbolName(for icon: String) -> String {
        switch icon { case "warning": return "exclamationmark.triangle"; case "bookmark": return "bookmark"; case "search": return "magnifyingglass"; default: return "books.vertical" }
    }
}
