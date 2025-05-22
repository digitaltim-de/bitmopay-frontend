import {SupportedCoinsModal} from "../modals/supported-coins";
import {supportedCoins} from "@/constants";
import {SupportedCoinCard} from "../cards/supported-coin-card";
import {useEffect, useRef, useState} from "react";
import {Section} from "../shared/section";
import HeadTitle from "@/components/shared/head-title";

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
        <Section className="bg-gray">
            <HeadTitle
                title="Supported Coins"
                htype="h2"
                subtitle=" Accept the most used cryptocurrencies with support for Bitcoin, Ethereum, Tron, BNB and
          stablecoins across major networks."
            />
            <div
                className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8 lg:grid-cols-5"
                ref={coinsGridRef}
            >
                {visibleCoins.map((coin) => (
                    <SupportedCoinCard key={coin.name} coin={coin} className="coin-card"/>
                ))}

                <SupportedCoinsModal/>
            </div>
            <div className="mx-auto max-w-3xl rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <div className="flex-shrink-0 rounded-full bg-emerald-100 p-3">
                        <svg
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="h-6 w-6 text-emerald-600"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"/>
                        </svg>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="mb-1 text-lg font-bold">Future Expansion</h3>
                        <p className="text-muted-foreground">
                            We’re starting with the most widely used coins. Support for additional currencies will
                            be added step by step.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
