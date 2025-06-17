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
      className={`flex flex-col items-center rounded-xl bg-white p-4 shadow-sm transition-transform ${ className || ""
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
      <h3 className="text-center font-medium">{coin.name}</h3>
      <span className="text-xs text-muted-foreground">{coin.symbol}</span>
    </div>
  );
}
