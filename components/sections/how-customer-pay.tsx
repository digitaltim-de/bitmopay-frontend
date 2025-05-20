import Image from "next/image"

export function HowCustomerPay() {
  // Customer journey steps
  const steps = [
    {
      number: 1,
      title: "Choose Products",
      description: "Browse and select products from an online store that uses Bitmopay.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Checkout",
      description: "At checkout, select 'Pay with Cryptocurrency' as your payment method.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Choose Crypto",
      description: "Select your preferred cryptocurrency from the available options.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.31 11.14C10.54 10.69 9.97 10.2 9.97 9.47C9.97 8.63 10.76 8.04 12.07 8.04C13.45 8.04 13.97 8.7 14.01 9.68H15.72C15.67 8.34 14.85 7.11 13.23 6.71V5H10.9V6.69C9.39 7.01 8.18 7.99 8.18 9.5C8.18 11.29 9.67 12.19 11.84 12.71C13.79 13.17 14.18 13.86 14.18 14.58C14.18 15.11 13.79 15.97 12.08 15.97C10.48 15.97 9.85 15.25 9.76 14.33H8.04C8.14 16.03 9.4 16.99 10.9 17.3V19H13.24V17.33C14.76 17.04 15.98 16.17 15.98 14.56C15.98 12.36 14.07 11.6 12.31 11.14Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Complete Payment",
      description: "Scan the QR code or copy the wallet address to complete your payment.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ]

  // Customer benefits
  const benefits = [
    "Fast and secure payments with cryptocurrencies",
    "Support for Bitcoin, Ethereum, and 50+ other digital currencies",
    "No need to create an account or share personal information",
    "Transparent exchange rates with no hidden fees"
  ]

  return (
    <section className="py-20 bg-gray overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Hero Section with Gradient Background */}
        <h2 className="text-5xl font-bold text-gray-900 text-center mb-16">
          How customers pay with Bitmopay
        </h2>

        {/* Customer Journey Steps with Connection Line */}
        <div className="relative mb-16">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-emerald-100 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-emerald-200 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    {/* Circle with icon */}
                    <div className="w-16 h-16 bg-emerald-50 group-hover:bg-emerald-100 rounded-full flex items-center justify-center transition-colors duration-300">
                      <div className="text-emerald-600">{step.icon}</div>
                    </div>

                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm group-hover:bg-emerald-600 transition-colors duration-300">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{step.title}</h3>
                </div>

                <p className="text-gray-600">{step.description}</p>

                {/* Arrow for all but the last step */}
                {index < steps.length - 1 && (
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

        {/* Secondary Section with Glass Effect - Customer Checkout UI */}
        <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Customer Benefits</h3>
                <p className="text-gray-600 mb-8">
                  Your customers will enjoy these advantages when paying with cryptocurrency at your store:
                </p>

                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <svg className="h-4 w-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center">
                    See Demo Checkout
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"></div>
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-emerald-300/20 rounded-2xl blur-xl"></div>
                <Image
                  src="/mobile-payment-app.png"
                  alt="Bitmopay customer checkout interface"
                  width={350}
                  height={450}
                  className="mx-auto rounded-2xl shadow-xl border border-white/20 relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
