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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto bg-gray-50 px-20 rounded-2xl">
        {/* Section Headline - Centered */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-4 pt-10">Why Bitmopay?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Simple, reliable and made for developers.
          </p>
        </div>

        {/* KPI Cards - 4 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {displayStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-emerald-50 p-3 rounded-full mb-4">
                {statIcons[index]}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Process Steps - How it works */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  {/* Circle with icon */}
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-2">
                    {step.icon}
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {index + 1}
                  </div>

                  {/* Arrow for all but the last step */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gray-200 transform translate-x-1">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-gray-200 rotate-45"></div>
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Light divider at the bottom */}
        <div className="mt-16 border-t border-gray-100"></div>
      </div>
    </section>
  )
}
