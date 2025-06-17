import { HeroLayout } from "@/components/layouts/hero-layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function BecomePartnerHeroSection() {
  return (
    <HeroLayout
      className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-950 text-white
        dark:from-gray-900 dark:to-gray-950"
    >
      <Image
        src="https://i0.wp.com/lovis.com/wp-content/uploads/2019/08/Referral-2400x1200.jpg?resize=2400%2C1200&quality=89&ssl=1"
        alt="Bitmopay Partner Program"
        className="absolute inset-0 h-full w-full object-cover object-top brightness-[25%]"
        width={1920}
        height={1080}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left column - Hero content */}
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Become a</span>
              <span
                className="bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent dark:from-gray-100
                  dark:to-emerald-400"
              >
                Bitmopay Partner
              </span>
            </h1>

            <p className="mb-8 max-w-xl text-2xl font-semibold text-gray-300 dark:text-gray-200">
              Earn 0.5% commission in the first year, then 0.15% thereafter on all your customers'
              payments – directly in crypto.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Become a Partner
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </HeroLayout>
  );
}
