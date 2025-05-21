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
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-300 rounded-xl p-4 shadow-sm flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-all hover:scale-105">
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
            More coming soon
          </h3>
          <div className="flex items-center mt-1 text-blue-600 text-sm">
            <span>View all coins</span>
            <ChevronRight className="ml-1 h-3 w-3" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="[&>button:last-child]:hidden bg-secondary sm:max-w-4xl">
        <div className="overflow-y-auto p-4 lg:p-6 space-y-4">
          <DialogHeader>
            <DialogTitle>Supported Coins ({supportedCoins.length})</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-2 lg:gap-4 overflow-hidden">
            {supportedCoins.map((coin) => (
              <SupportedCoinCard key={coin.name} coin={coin} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
