import Image from "next/image"

export function HowItWorksSection() {
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-2">
            ENSURING STELLAR CRYPTO PAYMENTS EXPERIENCE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bitcoin & Crypto Payments Checkout That Works For You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-semibold !text-xl">
            Adding a crypto checkout to your website or online store is easy with our automated cryptocurrency payment
            gateway, and your customers will love it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="text-indigo-600 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-indigo-600 mr-2">{step.number}.</span> {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl w-full shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">How Bitmopay Works</h3>
                <p className="text-gray-600 mb-6">
                  Our payment gateway makes it easy to accept cryptocurrency payments in just a few simple steps.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Integrate our API with just a few lines of code</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Accept Bitcoin, Ethereum, and 50+ cryptocurrencies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <svg className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>Get paid in crypto or have it automatically converted to fiat</span>
                  </li>
                </ul>
                <div className="mt-8 flex space-x-4">
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Get Started
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
                    View Pricing
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-70 -top-10 -right-10"></div>
                <Image
                  src="/mobile-payment-app.png"
                  alt="Bitmopay mobile interface"
                  width={300}
                  height={400}
                  className="mx-auto rounded-2xl shadow-lg border border-gray-200"
                />
                <div className="absolute -z-10 w-32 h-32 bg-indigo-200 rounded-full blur-2xl opacity-70 -bottom-5 -left-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
