import {Section} from "../shared/section";
import HeadTitle from "@/components/shared/head-title";

export function StatsSection() {
    const stats = [
        {value: "120", label: "Active Businesses"},
        {value: "0.5%", label: "Transaction Fee"},
        {value: "1%", label: "Payout Fee"},
        {value: "10+", label: "Supported Cryptocurrencies"},
    ];

    const StatItem = ({value, label}: { value: string; label: string }) => (
        <div className="space-y-2 text-center">
            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">{value}</div>
            <p className="text-base text-gray-600 dark:text-gray-300">{label}</p>
        </div>
    );

    return (
        <Section className="bg-secondary">
            <div
                className="group block rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-emerald-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-800/50"
      >
        <div className="mx-auto max-w-3xl space-y-4 text-center mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Built for scalable crypto payments</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Bitmopay helps developers and merchants accept and manage cryptocurrency payments with
            transparent pricing and flexible integration.
          </p>
        </div>

                <div
                    className="grid gap-8 divide-y divide-gray-200 dark:divide-gray-700 md:grid-cols-4 md:gap-4 md:divide-x
            md:divide-y-0"
                >
                    {stats.map((stat, idx) => (
                        <StatItem key={idx} value={stat.value} label={stat.label}/>
                    ))}
                </div>
            </div>
        </Section>
    );
}
