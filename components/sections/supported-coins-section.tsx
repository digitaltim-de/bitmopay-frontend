import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function SupportedCoinsSection() {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      icon: "/bitcoin-logo.png",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      icon: "/ethereum-logo.png",
    },
    {
      name: "Tether",
      symbol: "USDT",
      icon: "/usdt-logo.png",
    },
    {
      name: "BNB",
      symbol: "BNB",
      icon: "/bnb-logo.png",
    },
    {
      name: "Solana",
      symbol: "SOL",
      icon: "/solana-logo.png",
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      icon: "/usdc-logo.png",
    },
    {
      name: "Cardano",
      symbol: "ADA",
      icon: "/cardano-logo.png",
    },
    {
      name: "Polkadot",
      symbol: "DOT",
      icon: "/polkadot-logo.png",
    },
    {
      name: "Avalanche",
      symbol: "AVAX",
      icon: "/avalanche-logo.png",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Supported Coins & Chains</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Accept a variety of cryptocurrencies and offer your customers
            flexible payment options.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {/* First Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-4 md:gap-8">
            {coins.map((coin) => (
              <div
                key={coin.name}
                className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center w-full transition-transform hover:transform hover:scale-105"
              >
                <div className="mb-3 rounded-full bg-blue-50 p-3">
                  <Image
                    src={coin.icon || "/placeholder.svg"}
                    alt={`${coin.name} Logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-cover"
                  />
                </div>
                <h3 className="font-medium text-center">{coin.name}</h3>
                <span className="text-xs text-muted-foreground">
                  {coin.symbol}
                </span>
              </div>
            ))}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center w-full cursor-pointer hover:shadow-md transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-3 rounded-full bg-white p-3 shadow-sm">
                <div className="relative">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-yellow-800">
                      ₿
                    </div>
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                      Ξ
                    </div>
                    <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                      $
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center">
                    <ChevronRight className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-lg text-center text-blue-800">
                30+ More
              </h3>
              <div className="flex items-center mt-1 text-blue-600 text-sm">
                <span>View all coins</span>
                <ChevronRight className="ml-1 h-3 w-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 17H13V11H11V17ZM11 9H13V7H11V9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-1">
                Automatic Currency Conversion
              </h3>
              <p className="text-muted-foreground">
                All cryptocurrencies can be automatically converted to EUR, USD,
                or other fiat currencies at the time of transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
