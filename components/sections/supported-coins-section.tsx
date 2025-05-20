import Image from "next/image"
import type { Coin } from "@/lib/types"

interface SupportedCoinsSectionProps {
  coins: Coin[]
}

export function SupportedCoinsSection({ coins }: SupportedCoinsSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Unterstützte Coins & Chains</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Akzeptieren Sie eine Vielzahl von Kryptowährungen und bieten Sie Ihren Kunden flexible Zahlungsoptionen.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {coins.map((coin) => (
            <div key={coin.name} className="flex flex-col items-center">
              <Image src={coin.icon || "/placeholder.svg"} alt={coin.name} width={40} height={40} className="mb-2" />
              <span className="text-sm font-medium">{coin.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
