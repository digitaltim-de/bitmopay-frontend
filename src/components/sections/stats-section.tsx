export function StatsSection() {
    const stats = [
        { value: "120", label: "Active Businesses" },
        { value: "0.5%", label: "Transaction Fee" },
        { value: "1%", label: "Payout Fee" },
        { value: "10+", label: "Supported Cryptocurrencies" },
    ]

    const StatItem = ({ value, label }: { value: string; label: string }) => (
        <div className="space-y-2 text-center">
            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{value}</div>
            <p className="text-gray-600 dark:text-gray-300 text-base">{label}</p>
        </div>
    )

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-emerald-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl text-gray-900 dark:text-white py-12 px-6 space-y-8 md:space-y-10 shadow-md">
                    <div className="max-w-xl mx-auto text-center space-y-4">
                        <h2 className="text-4xl font-bold mb-4">Built for scalable crypto payments</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
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
            </div>
        </section>
    )
}
