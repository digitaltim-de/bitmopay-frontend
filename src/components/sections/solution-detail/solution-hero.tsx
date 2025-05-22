"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeroButton {
  text: string;
  link: string;
  variant: "default" | "outline";
}

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  buttons: HeroButton[];
}

export function SolutionHero({ title, subtitle, buttons }: SolutionHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-950 py-16 text-white
      dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div
          className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl dark:bg-emerald-600/10"></div>
        <div
          className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-700/20 blur-3xl dark:bg-emerald-700/10"></div>
        <div
          className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left column - Hero content */}
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            
            <p className="mb-8 text-xl text-gray-300 dark:text-gray-200">
              {subtitle}
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={button.variant}
                  className={button.variant === "outline" 
                    ? "border-white text-white hover:bg-white/10 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800" 
                    : "bg-white text-emerald-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"}
                  asChild
                >
                  <Link href={button.link}>
                    {button.text}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Right column - Payment UI mockup */}
          <div
            className="relative h-full w-full delay-300 duration-700 animate-in slide-in-from-right rounded-lg">
            <div
              className="absolute inset-0 z-10 bg-gradient-to-r from-emerald-900 to-transparent md:hidden rounded-lg"></div>

            <div className="perspective-1000 absolute z-20 h-full w-full overflow-visible rounded-lg ">
              <Image
                src="/bitmopay/crypto-payment-gateway.png"
                alt="Payment UI Mockup"
                fill
                className="object-contain rounded-lg"
                priority
              />

              {/* Decorative elements */}
              <div
                className="absolute -bottom-12 -right-12 -z-10 h-64 w-64 rounded-full bg-emerald-600/30 blur-3xl"></div>
              <div
                className="absolute -left-8 -top-8 -z-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}