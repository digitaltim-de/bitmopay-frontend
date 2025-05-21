import { SupportedCoin } from "@/types";
import Image from "next/image";

export function SupportedCoinCard({
  coin,
  className,
}: {
  coin: SupportedCoin;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-xl p-4 shadow-sm flex flex-col items-center transition-transform hover:scale-105 ${
        className || ""
      }`}
    >
      <div className="mb-3 rounded-full bg-blue-50 p-3">
        <Image
          src={coin.icon}
          alt={`${coin.name} Logo`}
          width={40}
          height={40}
          className="h-10 w-10 object-cover"
        />
      </div>
      <h3 className="font-medium text-center">{coin.name}</h3>
      <span className="text-xs text-muted-foreground">{coin.symbol}</span>
    </div>
  );
}
