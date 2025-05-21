"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowRight, ExternalLink, ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "../shared/section";

// Enhanced type definitions
interface CardProps {
  data: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    buttonHref?: string;
    isExternal?: boolean;
  };
  className?: string;
  index: number;
}

interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
  className?: string;
  overlayText?: string;
  index: number;
}

// Modernized Card component with enhanced visual effects
function Card({ data, className, index }: CardProps) {
  return (
    <Link href={data.buttonHref || "#"}>
      <div
        className={cn(
          `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white
          shadow-md transition-all duration-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800`,
          `before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-500/5
          before:to-emerald-500/10 before:opacity-0 before:transition-opacity before:duration-300
          group-hover:before:opacity-100`,
          className,
        )}
      >
        {/* Decorative elements */}
        <div
          className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/10 opacity-0 blur-3xl
            transition-opacity duration-700 group-hover:opacity-100"
        ></div>
        <div
          className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-emerald-400/10 opacity-0 blur-3xl
            transition-opacity duration-700 group-hover:opacity-100"
        ></div>

        <div className="overflow-hidden p-4 sm:p-6">
          <div className="relative h-48 overflow-hidden rounded-xl sm:h-56 md:h-64">
            <div className="h-full w-full">
              <Image
                src={
                  data.imageSrc ||
                  "/placeholder.svg?height=400&width=600&query=crypto payment interface"
                }
                alt={data.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40
                transition-opacity duration-300 group-hover:opacity-60"
            ></div>

            {/* Floating badge */}
            <div
              className="absolute bottom-4 left-4 translate-y-8 transform rounded-full border border-emerald-100 bg-white/90
                px-3 py-1 text-xs font-medium text-emerald-700 opacity-0 shadow-sm backdrop-blur-sm transition-all
                duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:border-emerald-800/50
                dark:bg-gray-800/90 dark:text-emerald-300"
            >
              {data.subtitle}
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-grow flex-col p-6 sm:p-8">
          <div className="mb-4">
            <h2
              className="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-700
                dark:text-white dark:group-hover:text-emerald-400 md:text-3xl"
            >
              {data.title}
            </h2>
            <div
              className="mb-4 h-1 w-16 origin-left scale-0 transform rounded-full bg-emerald-500 transition-transform
                duration-300 ease-out group-hover:scale-100"
            ></div>
          </div>

          <p className="mb-6 flex-grow text-gray-600 dark:text-gray-300">{data.description}</p>

          <div className="inline-flex items-center">
            <span>{data.buttonText}</span>
            <div className="ml-1.5 inline-block">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute bottom-0 right-0 h-16 w-16 overflow-hidden">
            <div
              className="absolute bottom-[-8px] right-[-8px] h-16 w-16 rotate-45 transform bg-emerald-100 opacity-0
                transition-opacity duration-300 group-hover:opacity-100 dark:bg-emerald-900/20"
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Modernized ImageCard component with enhanced visual effects
const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  imageAlt,
  className,
  overlayText,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        `group relative h-full overflow-hidden rounded-2xl border border-gray-100 shadow-md transition-all
        duration-300 hover:shadow-xl dark:border-gray-700`,
        className,
      )}
    >
      {/* Decorative elements */}
      <div
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-emerald-400/10 opacity-0 blur-3xl
          transition-opacity duration-700 group-hover:opacity-100"
      ></div>
      <div
        className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-emerald-400/10 opacity-0 blur-3xl
          transition-opacity duration-700 group-hover:opacity-100"
      ></div>

      {/* Card number indicator */}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/10 opacity-60
          transition-opacity duration-300 group-hover:opacity-80"
      ></div>

      {/* Content overlay */}
      <motion.div
        variants={textVariants}
        className="absolute bottom-0 left-0 right-0 z-20 p-8 text-white"
      >
        <h3 className="mb-3 text-2xl font-bold">{overlayText}</h3>
        <p className="mb-4 max-w-md text-gray-200">
          Integrate our API with just a few lines of code. Our developer-friendly documentation and
          SDKs make implementation a breeze.
        </p>

        <div className="mb-6 flex flex-wrap gap-3">
          {["REST API", "Webhooks", "SDKs", "Plugins"].map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          variant="outline"
          className="group/button border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
        >
          <span>View Documentation</span>
          <ArrowUpRight
            className="ml-2 h-4 w-4 transition-transform group-hover/button:-translate-y-0.5
              group-hover/button:translate-x-0.5"
          />
        </Button>
      </motion.div>

      <div className="h-full">
        <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-lg">
          <motion.div variants={imageVariants} className="h-full w-full">
            <Image
              src={
                imageSrc ||
                "/placeholder.svg?height=800&width=600&query=developer implementing crypto payment"
              }
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
              quality={90}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Updated card data with enhanced content
const cardsData = [
  {
    type: "standard",
    imageSrc:
      "https://cdn.prod.website-files.com/673f3cfcea6f215bd7496933/6762f5cf569a36e61f72d1b5_Traditional%20card%20like%20functionality.svg",
    imageAlt: "User-friendly crypto checkout interface with multiple payment options",
    title: "Crypto Checkout",
    subtitle: "For Online Stores",
    description:
      "Accept one-time crypto payments via our fast checkout. 100% crypto. No fiat. No chargebacks. Seamless integration with your existing store.",
    buttonText: "Start Integration",
    buttonHref: "/integration",
  },
  {
    type: "standard",
    imageSrc:
      "https://cdn.prod.website-files.com/673f3cfcea6f215bd7496933/6761b43f786d671c41326227_Multi-chain%20and%20tokens.webp",
    imageAlt: "Recurring payment system with cryptocurrencies and reminder functionality",
    title: "Crypto Subscription Payments",
    subtitle: "For Platforms & SaaS",
    description:
      "Easily implement recurring crypto payments. Users are reminded 7, 3 and 1 day before expiry. Perfect for membership sites and subscription services.",
    buttonText: "Explore API Docs",
    buttonHref: "/docs/api",
  },
  {
    type: "image",
    imageSrc:
      "https://img.freepik.com/premium-photo/man-working-from-home-using-laptop-mobile-phone_625516-1105.jpg",
    imageAlt: "Developer working with laptop implementing crypto payments",
    overlayText: "Developer-Friendly Integration",
  },
  {
    type: "standard",
    imageSrc:
      "https://cdn.prod.website-files.com/673f3cfcea6f215bd7496933/6761b43e2466008d90bbc378_Smart%20payment%20collection.webp",
    imageAlt: "Buyer protection system with escrow functionality for crypto payments",
    title: "Buyer Protection",
    subtitle: "Escrow Mode (Optional)",
    description:
      "Give buyers peace of mind. If enabled, funds are held for 7 days and marked as 'secured' during checkout. Increase conversion rates with added trust.",
    buttonText: "Learn More",
    buttonHref: "/buyer-protection",
  },
];

// Enhanced animation variants for the main section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

// Modernized StartAccepting component with enhanced layout and animations
const StartAccepting: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Filter cards based on active tab (for future expansion)
  const filteredCards = cardsData;

  return (
    <Section className="relative" aria-labelledby="start-accepting-title">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-40 h-72 w-72 rounded-full bg-emerald-400/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-emerald-400/5 blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-4 text-center">
          <span
            className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700
              dark:bg-emerald-900/30 dark:text-emerald-300"
          >
            Payment Solutions
          </span>
        </motion.div>

        <motion.h2
          id="start-accepting-title"
          className="mb-4 bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-center text-4xl
            font-bold text-transparent dark:from-white dark:via-emerald-300 dark:to-white md:text-5xl"
          variants={itemVariants}
        >
          Start Accepting Crypto Payments
        </motion.h2>

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          Flexible solutions for various business models - from one-time payments to subscriptions
        </motion.p>

        {/* Modern card layout with staggered animation */}
        <motion.div
          className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10"
          variants={containerVariants}
        >
          {filteredCards.map((card, index) => (
            <React.Fragment key={index}>
              {card.type === "standard" ? (
                <Card key={card.title} data={card} index={index} />
              ) : (
                <ImageCard
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                  className="md:h-full"
                  overlayText={card.overlayText}
                  index={index}
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Enhanced CTA section */}
        <motion.div className="relative mt-20 text-center" variants={containerVariants}>
          <div
            className="absolute inset-0 -z-10 -skew-y-1 transform rounded-3xl bg-gradient-to-r from-emerald-50
              via-emerald-100 to-emerald-50 dark:from-emerald-900/10 dark:via-emerald-900/20
              dark:to-emerald-900/10"
          ></div>

          <div className="px-6 py-12">
            <motion.h3
              className="mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl"
              variants={itemVariants}
            >
              Ready to supercharge your business with crypto?
            </motion.h3>

            <motion.p
              className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Our solutions are designed to be flexible and easy to implement, regardless of your
              technical expertise.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group inline-flex items-center bg-emerald-600 transition-all hover:bg-emerald-700"
              >
                <span>View All Payment Solutions</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group inline-flex items-center border-emerald-200 transition-all hover:border-emerald-300
                  dark:border-emerald-800 dark:hover:border-emerald-700"
              >
                <span>Schedule a Demo</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default StartAccepting;
