function DashboardStats({ title, icon, value, description, colorIndex }) {

    const COLORS = ["primary", "accent"]
    return (
        <div className="stats shadow">
            <a href="#">
                <div className="stat">
                    <div className={`stat-figure text-${COLORS[colorIndex % 2]}`}>{icon}</div>
                    <div className="stat-title">{title}</div>
                    <div className={`text-${COLORS[colorIndex % 2]}`}>{value}</div>
                    <div className="stat-desc">{description}</div>
                </div>
            </a>
        </div>
    )
}

export default DashboardStats