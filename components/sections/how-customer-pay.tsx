import Image from "next/image"

export function HowCustomerPay() {
  const steps = [
    {
      number: 1,
      title: "Invoice",
      description: "We generate a detailed invoice for your customer with all payment options.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 8H4V6H20V8ZM20 12H4V10H20V12ZM20 16H4V14H20V16ZM22 2H2V22H22V2ZM20 4V20H4V4H20Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Payment",
      description: "Your customer pays the invoice at a fixed exchange rate.",
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
      number: 3,
      title: "Conversion",
      description: "We convert the payment into your preferred currency.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 6.5V9H11V11H15V13.5L19 10L15 6.5ZM9 17.5V15H13V13H9V10.5L5 14L9 17.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Settlement",
      description: "We send the funds to your bank account whenever you request.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 14V6C19 4.9 18.1 4 17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14ZM17 14H3V6H17V14ZM10 7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7ZM23 7V18C23 19.1 22.1 20 21 20H4C4 19 4 19.1 4 18H21V7C22.1 7 22 7 23 7Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ]

  // Features list for the secondary section
  const features = [
    "Integrate our API with just a few lines of code",
    "Accept Bitcoin, Ethereum, and 50+ cryptocurrencies",
    "Get paid in crypto or have it automatically converted to fiat",
    "No chargebacks or fraud risks"
  ]

  return (
    <section className="py-20 bg-gray overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Hero Section with Gradient Background */}

        {/* Secondary Section with Glass Effect */}
        <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">How Bitmopay Works</h3>
                <p className="text-gray-600 mb-8">
                  Our payment gateway makes it easy to accept cryptocurrency payments in just a few simple steps.
                </p>

                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
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
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center">
                    Get Started
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    View Pricing
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
                  alt="Bitmopay mobile interface"
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
