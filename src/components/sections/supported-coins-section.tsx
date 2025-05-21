import Image from "next/image";
import { SupportedCoinsModal } from "../modals/supported-coins";
import { supportedCoins } from "@/constants";
import { SupportedCoinCard } from "../cards/supported-coin-card";
import { useRef, useState, useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export function SupportedCoinsSection() {
  const coinsGridRef = useRef<HTMLDivElement>(null);
  const [visibleCoins, setVisibleCoins] = useState<typeof supportedCoins>([]);

  // Calculate coins per row on window resize
  useEffect(() => {
    window.addEventListener("resize", calculateVisibleCoins);
    return () => window.removeEventListener("resize", calculateVisibleCoins);
  }, []);

  // Calculate how many coins fit in 2 rows
  function calculateVisibleCoins() {
    if (coinsGridRef.current) {
      // Calculate number of columns based on computed style
      const gridStyles = window.getComputedStyle(coinsGridRef.current);
      const columns = gridStyles.gridTemplateColumns.split(" ").length;

      // Ensure we show exactly 2 rows of coins (minus one for the "More coming soon" card)
      const coinsToShow = supportedCoins.slice(0, columns * 2 - 1);
      setVisibleCoins(coinsToShow);
    }
  }

  // Initial calculation
  useEffect(() => {
    calculateVisibleCoins();
  }, []);
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Supported Coins & Chains</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Accept the most used cryptocurrencies with support for Bitcoin,
            Ethereum, Tron, BNB and stablecoins across major networks.
          </p>
        </div>{" "}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 mb-12"
          ref={coinsGridRef}
        >
          {visibleCoins.map((coin) => (
            <SupportedCoinCard
              key={coin.name}
              coin={coin}
              className="coin-card"
            />
          ))}

          <SupportedCoinsModal />
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 mx-auto max-w-3xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="rounded-full bg-blue-100 p-3 flex-shrink-0">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                className="h-6 w-6 text-blue-600"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-1">Future Expansion</h3>
              <p className="text-muted-foreground">
                We’re starting with the most widely used coins. Support for
                additional currencies will be added step by step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
