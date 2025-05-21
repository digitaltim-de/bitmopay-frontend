"use client"

import React, { useState } from "react"
import { Button } from "../ui/button"
import Image from "next/image"
import { ArrowRight, ExternalLink, ChevronRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"

// Enhanced type definitions
interface CardProps {
    imageSrc: string
    imageAlt: string
    title: string
    subtitle: string
    description: string
    buttonText: string
    buttonHref?: string
    className?: string
    isExternal?: boolean
    index: number
}

interface ImageCardProps {
    imageSrc: string
    imageAlt: string
    className?: string
    overlayText?: string
    index: number
}

// Modernized Card component with enhanced visual effects
const Card: React.FC<CardProps> = ({
                                       imageSrc,
                                       imageAlt,
                                       title,
                                       subtitle,
                                       description,
                                       buttonText,
                                       buttonHref = "#",
                                       className,
                                       isExternal = false,
                                       index,
                                   }) => {
    const [isHovered, setIsHovered] = useState(false)
    const isExternalLink = isExternal || buttonHref.startsWith("http")

    // Enhanced animation variants
    const cardVariants = {
        initial: { y: 20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
            },
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    }

    const imageVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    const buttonVariants = {
        initial: { x: 0 },
        hover: {
            x: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                repeat: 0,
            },
        },
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={cardVariants}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={cn(
                "group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 dark:border-gray-700",
                "before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-500/5 before:to-emerald-500/10 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
                className,
            )}
        >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Card number indicator */}
            <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-300 font-medium text-sm border border-emerald-200 dark:border-emerald-700/50">
                {index + 1}
            </div>

            <div className="p-4 sm:p-6 overflow-hidden">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl">
                    <motion.div variants={imageVariants} className="h-full w-full">
                        <Image
                            src={imageSrc || "/placeholder.svg?height=400&width=600&query=crypto payment interface"}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

                    {/* Floating badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800/50 shadow-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {subtitle}
                    </div>
                </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {title}
                    </h2>
                    <div className="w-16 h-1 bg-emerald-500 rounded-full mb-4 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{description}</p>

                {isExternalLink ? (
                    <Button
                        asChild
                        variant="ghost"
                        className="mt-auto group/button inline-flex items-center whitespace-nowrap transition-all hover:translate-y-[-2px] hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 border border-emerald-200 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-700"
                        aria-label={`${buttonText} (opens in new tab)`}
                    >
                        <a href={buttonHref} className="inline-flex items-center" target="_blank" rel="noopener noreferrer">
                            <span>{buttonText}</span>
                            <motion.div variants={buttonVariants} className="ml-1.5 inline-block">
                                <ExternalLink className="h-4 w-4" />
                            </motion.div>
                        </a>
                    </Button>
                ) : (
                    <Button
                        asChild
                        variant="ghost"
                        className="mt-auto group/button inline-flex items-center whitespace-nowrap transition-all hover:translate-y-[-2px] hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 border border-emerald-200 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-700"
                    >
                        <Link href={buttonHref} className="inline-flex items-center">
                            <span>{buttonText}</span>
                            <motion.div variants={buttonVariants} className="ml-1.5 inline-block">
                                <ArrowRight className="h-4 w-4" />
                            </motion.div>
                        </Link>
                    </Button>
                )}

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute transform rotate-45 bg-emerald-100 dark:bg-emerald-900/20 w-16 h-16 bottom-[-8px] right-[-8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>
        </motion.div>
    )
}

// Modernized ImageCard component with enhanced visual effects
const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, imageAlt, className, overlayText, index }) => {
    const [isHovered, setIsHovered] = useState(false)

    // Enhanced animation variants
    const cardVariants = {
        initial: { y: 20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.1 + 0.2,
            },
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    }

    const imageVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    }

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
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={cardVariants}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={cn(
                "group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-700",
                className,
            )}
        >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Card number indicator */}
            <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-300 font-medium text-sm border border-emerald-200 dark:border-emerald-700/50">
                {index + 1}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

            {/* Content overlay */}
            <motion.div variants={textVariants} className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-2xl font-bold mb-3">{overlayText}</h3>
                <p className="text-gray-200 mb-4 max-w-md">
                    Integrate our API with just a few lines of code. Our developer-friendly documentation and SDKs make
                    implementation a breeze.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                    {["REST API", "Webhooks", "SDKs", "Plugins"].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              {tag}
            </span>
                    ))}
                </div>

                <Button
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white group/button"
                >
                    <span>View Documentation</span>
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                </Button>
            </motion.div>

            <div className="p-4 sm:p-6 h-full">
                <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden">
                    <motion.div variants={imageVariants} className="h-full w-full">
                        <Image
                            src={imageSrc || "/placeholder.svg?height=800&width=600&query=developer implementing crypto payment"}
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
    )
}

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
        imageSrc: "https://img.freepik.com/premium-photo/man-working-from-home-using-laptop-mobile-phone_625516-1105.jpg",
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
]

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
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
}

// Modernized StartAccepting component with enhanced layout and animations
const StartAccepting: React.FC = () => {
    const [activeTab, setActiveTab] = useState("all")

    // Filter cards based on active tab (for future expansion)
    const filteredCards = cardsData

    return (
        <section className="py-20 container relative" aria-labelledby="start-accepting-title">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="relative z-10"
            >
                <motion.div variants={itemVariants} className="text-center mb-4">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-4">
            Payment Solutions
          </span>
                </motion.div>

                <motion.h2
                    id="start-accepting-title"
                    className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 dark:from-white dark:via-emerald-300 dark:to-white bg-clip-text text-transparent"
                    variants={itemVariants}
                >
                    Start Accepting Crypto Payments
                </motion.h2>

                <motion.p
                    className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg"
                    variants={itemVariants}
                >
                    Flexible solutions for various business models - from one-time payments to subscriptions
                </motion.p>

                {/* Modern card layout with staggered animation */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full" variants={containerVariants}>
                    {filteredCards.map((card, index) => (
                        <React.Fragment key={index}>
                            {card.type === "standard" ? (
                                <Card
                                    imageSrc={card.imageSrc}
                                    imageAlt={card.imageAlt}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                    description={card.description}
                                    buttonText={card.buttonText}
                                    buttonHref={card.buttonHref}
                                    index={index}
                                />
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
                <motion.div className="mt-20 text-center relative" variants={containerVariants}>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-50 dark:from-emerald-900/10 dark:via-emerald-900/20 dark:to-emerald-900/10 rounded-3xl -z-10 transform -skew-y-1"></div>

                    <div className="py-12 px-6">
                        <motion.h3
                            className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                            variants={itemVariants}
                        >
                            Ready to supercharge your business with crypto?
                        </motion.h3>

                        <motion.p
                            className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg"
                            variants={itemVariants}
                        >
                            Our solutions are designed to be flexible and easy to implement, regardless of your technical expertise.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="group inline-flex items-center hover:translate-y-[-2px] transition-all bg-emerald-600 hover:bg-emerald-700"
                            >
                                <span>View All Payment Solutions</span>
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="group inline-flex items-center hover:translate-y-[-2px] transition-all border-emerald-200 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-700"
                            >
                                <span>Schedule a Demo</span>
                                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default StartAccepting
