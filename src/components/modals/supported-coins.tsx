import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supportedCoins } from "@/constants";
import { ChevronRight, Divide } from "lucide-react";
import { SupportedCoinCard } from "../cards/supported-coin-card";

export function SupportedCoinsModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-emerald-300
            bg-gradient-to-br from-emerald-100 to-emerald-200 p-4 shadow-sm transition-all hover:scale-105
            hover:shadow-md"
        >
          <div className="mb-3 rounded-full bg-white p-3 shadow-sm">
            <div className="relative">
              <div className="flex -space-x-2">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-yellow-400
                    text-[10px] font-bold text-yellow-800"
                >
                  ₿
                </div>
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-emerald-500
                    text-[10px] font-bold text-white"
                >
                  Ξ
                </div>
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green-500 text-[10px]
                    font-bold text-white"
                >
                  $
                </div>
              </div>
              <div
                className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2
                  border-white bg-emerald-600"
              >
                <ChevronRight className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
          <h3 className="text-center text-lg font-bold text-emerald-800">More coming soon</h3>
          <div className="mt-1 flex items-center text-sm text-emerald-600">
            <span>View all coins</span>
            <ChevronRight className="ml-1 h-3 w-3" />
          </div>
        </div>
      </DialogTrigger>{" "}
      <DialogContent className="bg-secondary sm:max-h-[98vh] sm:max-w-4xl [&>button:last-child]:hidden">
        <div className="space-y-4 overflow-y-auto p-4 lg:p-6">
          <DialogHeader>
            <DialogTitle>Supported Coins ({supportedCoins.length})</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-2 overflow-hidden lg:gap-4">
            {supportedCoins.map((coin) => (
              <SupportedCoinCard key={coin.name} coin={coin} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
