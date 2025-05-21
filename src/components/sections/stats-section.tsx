export function StatsSection() {
    const stats = [
        { value: "120", label: "Active Businesses" },
        { value: "0.5%", label: "Transaction Fee" },
        { value: "1%", label: "Payout Fee" },
        { value: "10+", label: "Supported Cryptocurrencies" },
    ];

    const StatItem = ({ value, label }: { value: string; label: string }) => (
        <div className="space-y-4 text-center">
            <div className="text-5xl font-bold">{value}</div>
            <p className="text-gray-700">{label}</p>
        </div>
    );

    return (
        <section className="pb-12 md:pb-20">
            <div className="container bg-secondary rounded-3xl text-black py-20 px-6 space-y-12 md:space-y-16">
                <div className="max-w-xl mx-auto text-center space-y-6">
                    <h2 className="text-4xl font-semibold lg:text-5xl">
                        Built for scalable crypto payments.
                    </h2>
                    <p className="text-gray-700">
                        Bitmopay helps developers and merchants accept and manage
                        cryptocurrency payments with transparent pricing and flexible
                        integration.
                    </p>
                </div>

                <div className="grid gap-12 divide-y md:grid-cols-4 md:divide-x md:divide-y-0 md:gap-4">
                    {stats.map((stat, idx) => (
                        <StatItem key={idx} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
}
