export function StatsSection() {
    const stats = [
        { value: "120", label: "Active Businesses" },
        { value: "0.5%", label: "Transaction Fee" },
        { value: "1%", label: "Payout Fee" },
        { value: "10+", label: "Supported Cryptocurrencies" },
    ]

    const StatItem = ({ value, label }: { value: string; label: string }) => (
        <div className="space-y-2 text-center">
            <div className="text-4xl font-medium">{value}</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{label}</p>
        </div>
    )

    return (
        <section className="pb-8 md:pb-12">
            <div className="container bg-secondary rounded-2xl text-black dark:text-white py-12 px-6 space-y-8 md:space-y-10 shadow-sm">
                <div className="max-w-xl mx-auto text-center space-y-4">
                    <h2 className="text-3xl font-medium lg:text-4xl">Built for scalable crypto payments</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Bitmopay helps developers and merchants accept and manage cryptocurrency payments with transparent pricing
                        and flexible integration.
                    </p>
                </div>

                <div className="grid gap-8 divide-y md:grid-cols-4 md:divide-x md:divide-y-0 md:gap-4 divide-gray-200 dark:divide-gray-700">
                    {stats.map((stat, idx) => (
                        <StatItem key={idx} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    )
}
