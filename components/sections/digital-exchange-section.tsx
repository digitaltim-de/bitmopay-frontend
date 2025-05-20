import type {Partner, Stat} from "@/lib/types"

interface DigitalExchangeSectionProps {
    partners: Partner[]
    stats: Stat[]
}

export function DigitalExchangeSection({partners, stats}: DigitalExchangeSectionProps) {

    // Stats for display
    const displayStats = [
        {value: "94%", label: "Customer Satisfaction"},
        {value: "1,000+", label: "Active Merchants"},
        {value: "$105", label: "Avg. Transaction Value"},
        {value: "18%", label: "Annual Growth"}
    ];

    // Benefits list
    const benefits = [
        "Instant settlement in your preferred currency",
        "No chargebacks or fraud risks",
        "Global payments with low fees",
        "Easy integration with your existing systems"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto">
                {/* Hero Section with Background */}
                <div
                    className="relative overflow-hidden bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-3xl mb-16">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path fill="#FFFFFF"
                                  d="M47.7,-57.2C59.1,-45.8,64.4,-28.5,68.1,-10.1C71.8,8.3,74,27.8,65.8,41.8C57.6,55.8,39,64.3,19.9,69.9C0.7,75.5,-19,78.3,-36.1,71.6C-53.2,64.9,-67.7,48.7,-73.5,30.1C-79.2,11.5,-76.2,-9.5,-67.1,-26.1C-58,-42.7,-42.8,-54.9,-27.4,-64.4C-12,-73.9,3.6,-80.7,17.8,-76.9C32,-73.1,44.9,-58.7,47.7,-57.2Z"
                                  transform="translate(100 100)"/>
                        </svg>
                    </div>

                    <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-white">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-10 md:mb-0">
                                <div
                                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-emerald-100 font-medium text-sm mb-6 backdrop-blur-sm">
                  <span className="flex h-2 w-2 mr-2">
                    <span
                        className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
                  </span>
                                    TRUSTED BY 1,000+ BUSINESSES
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                    Why Choose <span className="text-emerald-300">Bitmopay</span>?
                                </h2>

                                <p className="text-emerald-100 text-lg md:text-xl mb-8 max-w-xl">
                                    Simple, reliable cryptocurrency payment solutions built for modern businesses and
                                    developers.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="h-6 w-6 text-emerald-300 mr-2 flex-shrink-0" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M5 13l4 4L19 7"/>
                                            </svg>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="md:w-1/2 flex justify-center">
                                <div className="relative w-full max-w-md">
                                    <div
                                        className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl"></div>
                                    <div
                                        className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"></div>

                                    <div
                                        className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                        <div className="grid grid-cols-2 gap-4">
                                            {displayStats.map((stat, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                                                >
                                                    <div
                                                        className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                                    <div className="text-emerald-200 text-sm">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
