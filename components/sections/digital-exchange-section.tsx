import Image from "next/image"
import type { Partner, Stat } from "@/lib/types"

interface DigitalExchangeSectionProps {
  partners: Partner[]
  stats: Stat[]
}

export function DigitalExchangeSection({ partners, stats }: DigitalExchangeSectionProps) {
  // Icons for the stats cards
  const statIcons = [
    // Checkmark icon for customer satisfaction
    <svg key="check" className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>,
    // Business person icon for active merchants
    <svg key="user" className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>,
    // Money icon for transaction value
    <svg key="money" className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Chart icon for growth
    <svg key="chart" className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ];

  // Process steps data
  const processSteps = [
    {
      title: "Create Invoice",
      description: "Customers receive a personalized invoice with all options",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Receive Payment",
      description: "Customers pay in Bitcoin, Ethereum or USDT",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Automatic Conversion",
      description: "We automatically convert the amount to stablecoins or FIAT",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Payout",
      description: "You receive the money in your wallet or account",
      icon: (
        <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  // Stats for display
  const displayStats = [
    { value: "94%", label: "Customer Satisfaction" },
    { value: "1,000+", label: "Active Merchants" },
    { value: "$105", label: "Avg. Transaction Value" },
    { value: "18%", label: "Annual Growth" }
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
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-3xl mb-16">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#FFFFFF" d="M47.7,-57.2C59.1,-45.8,64.4,-28.5,68.1,-10.1C71.8,8.3,74,27.8,65.8,41.8C57.6,55.8,39,64.3,19.9,69.9C0.7,75.5,-19,78.3,-36.1,71.6C-53.2,64.9,-67.7,48.7,-73.5,30.1C-79.2,11.5,-76.2,-9.5,-67.1,-26.1C-58,-42.7,-42.8,-54.9,-27.4,-64.4C-12,-73.9,3.6,-80.7,17.8,-76.9C32,-73.1,44.9,-58.7,47.7,-57.2Z" transform="translate(100 100)" />
            </svg>
          </div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-emerald-100 font-medium text-sm mb-6 backdrop-blur-sm">
                  <span className="flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
                  </span>
                  TRUSTED BY 1,000+ BUSINESSES
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Why Choose <span className="text-emerald-300">Bitmopay</span>?
                </h2>

                <p className="text-emerald-100 text-lg md:text-xl mb-8 max-w-xl">
                  Simple, reliable cryptocurrency payment solutions built for modern businesses and developers.
                </p>

                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-emerald-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"></div>

                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="grid grid-cols-2 gap-4">
                      {displayStats.map((stat, index) => (
                        <div 
                          key={index} 
                          className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                        >
                          <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
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

        {/* Process Steps - How it works */}
        <div className="bg-gray rounded-3xl px-8 py-16 md:px-16">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our streamlined process makes accepting crypto payments simple and secure
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-emerald-100"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      {/* Circle with icon */}
                      <div className="w-16 h-16 bg-emerald-50 group-hover:bg-emerald-100 rounded-full flex items-center justify-center transition-colors duration-300">
                        {step.icon}
                      </div>

                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm group-hover:bg-emerald-600 transition-colors duration-300">
                        {index + 1}
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold text-gray-900 ml-4">{step.title}</h4>
                  </div>

                  <p className="text-gray-600">{step.description}</p>

                  {/* Arrow for all but the last step */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-full w-8 h-8 transform -translate-x-1/2">
                      <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h4>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Bitmopay for their cryptocurrency payment needs
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center">
              Start accepting crypto payments
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
