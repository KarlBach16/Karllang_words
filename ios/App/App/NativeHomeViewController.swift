import UIKit

final class NativeHomeViewController: UIViewController {
    private let scrollView = UIScrollView()
    private let stackView = UIStackView()
    private var payload: [String: Any] = [:]

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

    private func rebuild() {
        stackView.arrangedSubviews.forEach {
            stackView.removeArrangedSubview($0)
            $0.removeFromSuperview()
        }
        buildAttendanceCard()
        buildProgressCard()
    }

    private func buildAttendanceCard() {
        let attendance = payload["attendance"] as? [String: Any] ?? [:]
        let card = makeCard(title: string(attendance, "title", "Attendance"))
        let days = attendance["days"] as? [[String: Any]] ?? []
        let row = UIStackView()
        row.axis = .horizontal
        row.alignment = .center
        row.distribution = .fillEqually
        row.spacing = 4
        row.translatesAutoresizingMaskIntoConstraints = false
        for day in days {
            row.addArrangedSubview(makeAttendanceDay(
                label: string(day, "label"),
                attended: bool(day, "attended"),
                today: bool(day, "today")
            ))
        }
        let wrapper = UIView()
        wrapper.addSubview(row)
        NSLayoutConstraint.activate([
            row.leadingAnchor.constraint(equalTo: wrapper.leadingAnchor, constant: 14),
            row.trailingAnchor.constraint(equalTo: wrapper.trailingAnchor, constant: -14),
            row.topAnchor.constraint(equalTo: wrapper.topAnchor, constant: 8),
            row.bottomAnchor.constraint(equalTo: wrapper.bottomAnchor, constant: -18)
        ])
        card.addArrangedSubview(wrapper)
        stackView.addArrangedSubview(card)
    }

    private func buildProgressCard() {
        let progress = payload["progress"] as? [String: Any] ?? [:]
        let card = makeCard(title: string(progress, "title", "Vocabulary progress"))
        let levels = progress["levels"] as? [[String: Any]] ?? []
        for (index, level) in levels.enumerated() {
            card.addArrangedSubview(makeProgressRow(
                label: string(level, "label"),
                count: string(level, "count"),
                percent: CGFloat(number(level, "percent")) / 100
            ))
            if index < levels.count - 1 { card.addArrangedSubview(makeDivider()) }
        }
        stackView.addArrangedSubview(card)
    }

    private func makeCard(title: String) -> UIStackView {
        let card = UIStackView()
        card.axis = .vertical
        card.backgroundColor = .systemBackground
        card.layer.cornerRadius = 14
        card.layer.cornerCurve = .continuous
        card.clipsToBounds = true

        let titleLabel = UILabel()
        titleLabel.text = title
        titleLabel.font = .systemFont(ofSize: 20, weight: .bold)
        titleLabel.textColor = .label
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        let header = UIView()
        header.addSubview(titleLabel)
        NSLayoutConstraint.activate([
            titleLabel.leadingAnchor.constraint(equalTo: header.leadingAnchor, constant: 18),
            titleLabel.trailingAnchor.constraint(equalTo: header.trailingAnchor, constant: -18),
            titleLabel.topAnchor.constraint(equalTo: header.topAnchor, constant: 18),
            titleLabel.bottomAnchor.constraint(equalTo: header.bottomAnchor, constant: -8)
        ])
        card.addArrangedSubview(header)
        return card
    }

    private func makeAttendanceDay(label: String, attended: Bool, today: Bool) -> UIView {
        let container = UIStackView()
        container.axis = .vertical
        container.alignment = .center
        container.spacing = 8
        let labelView = UILabel()
        labelView.text = label
        labelView.font = .systemFont(ofSize: 14, weight: today ? .bold : .regular)
        labelView.textColor = today ? .label : .secondaryLabel
        let dot = UIView()
        dot.translatesAutoresizingMaskIntoConstraints = false
        dot.backgroundColor = attended ? karlGreen : UIColor.systemGray5
        dot.layer.cornerRadius = 7
        NSLayoutConstraint.activate([
            dot.widthAnchor.constraint(equalToConstant: 14),
            dot.heightAnchor.constraint(equalToConstant: 14)
        ])
        container.addArrangedSubview(labelView)
        container.addArrangedSubview(dot)
        return container
    }

    private func makeProgressRow(label: String, count: String, percent: CGFloat) -> UIView {
        let row = UIView()
        row.translatesAutoresizingMaskIntoConstraints = false
        let name = UILabel()
        name.text = label
        name.font = .systemFont(ofSize: 17, weight: .bold)
        name.textColor = .label
        name.translatesAutoresizingMaskIntoConstraints = false
        let countLabel = UILabel()
        countLabel.text = count
        countLabel.font = .systemFont(ofSize: 15, weight: .regular)
        countLabel.textColor = .secondaryLabel
        countLabel.textAlignment = .right
        countLabel.translatesAutoresizingMaskIntoConstraints = false
        let track = UIView()
        track.translatesAutoresizingMaskIntoConstraints = false
        track.backgroundColor = .systemGray5
        track.layer.cornerRadius = 5
        let fill = UIView()
        fill.translatesAutoresizingMaskIntoConstraints = false
        fill.backgroundColor = karlGreen
        fill.layer.cornerRadius = 5
        track.addSubview(fill)
        let width = fill.widthAnchor.constraint(equalTo: track.widthAnchor, multiplier: max(0, min(1, percent)))
        width.priority = .defaultHigh
        NSLayoutConstraint.activate([
            fill.leadingAnchor.constraint(equalTo: track.leadingAnchor),
            fill.topAnchor.constraint(equalTo: track.topAnchor),
            fill.bottomAnchor.constraint(equalTo: track.bottomAnchor),
            width,
            track.heightAnchor.constraint(equalToConstant: 10)
        ])
        row.addSubview(name)
        row.addSubview(countLabel)
        row.addSubview(track)
        NSLayoutConstraint.activate([
            row.heightAnchor.constraint(equalToConstant: 72),
            name.leadingAnchor.constraint(equalTo: row.leadingAnchor, constant: 18),
            name.topAnchor.constraint(equalTo: row.topAnchor, constant: 10),
            countLabel.trailingAnchor.constraint(equalTo: row.trailingAnchor, constant: -18),
            countLabel.centerYAnchor.constraint(equalTo: name.centerYAnchor),
            countLabel.leadingAnchor.constraint(greaterThanOrEqualTo: name.trailingAnchor, constant: 12),
            track.leadingAnchor.constraint(equalTo: row.leadingAnchor, constant: 18),
            track.trailingAnchor.constraint(equalTo: row.trailingAnchor, constant: -18),
            track.bottomAnchor.constraint(equalTo: row.bottomAnchor, constant: -12)
        ])
        return row
    }

    private func makeDivider() -> UIView {
        let holder = UIView()
        let line = UIView()
        line.backgroundColor = .separator
        line.translatesAutoresizingMaskIntoConstraints = false
        holder.addSubview(line)
        NSLayoutConstraint.activate([
            holder.heightAnchor.constraint(equalToConstant: 1 / UIScreen.main.scale),
            line.leadingAnchor.constraint(equalTo: holder.leadingAnchor, constant: 18),
            line.trailingAnchor.constraint(equalTo: holder.trailingAnchor, constant: -18),
            line.centerYAnchor.constraint(equalTo: holder.centerYAnchor),
            line.heightAnchor.constraint(equalToConstant: 1 / UIScreen.main.scale)
        ])
        return holder
    }

    private func string(_ object: [String: Any], _ key: String, _ fallback: String = "") -> String {
        object[key] as? String ?? fallback
    }

    private func bool(_ object: [String: Any], _ key: String) -> Bool {
        object[key] as? Bool ?? false
    }

    private func number(_ object: [String: Any], _ key: String) -> Double {
        if let value = object[key] as? Double { return value }
        if let value = object[key] as? Int { return Double(value) }
        return 0
    }
}
