import React from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

// Card component for standard cards
interface CardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({
                                       imageSrc,
                                       imageAlt,
                                       title,
                                       subtitle,
                                       description,
                                       buttonText,
                                       className = "",
                                   }) => {
    return (
        <div
            className={`bg-gray rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center ${className}`}>
            <div className="mb-6 relative w-48 h-48">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={192}
                    height={192}
                    className="object-contain"
                />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {title}
            </h2>
            <h3 className="text-xl text-emerald-600 font-medium mb-4">
                {subtitle}
            </h3>
            <p className={`text-gray-600 ${className === "start-accepting-card1" ? "text-2xl font-semibold" : "text-lg"} mb-8`}>
                {description}
            </p>
            <Button className={className === "start-accepting-card1" ? "mt-auto" : ""}>
                {buttonText}
            </Button>
        </div>
    );
};

// Image Card component for the full image card
interface ImageCardProps {
    imageSrc: string;
    imageAlt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({imageSrc, imageAlt}) => {
    return (
        <div
            className="start-accepting-card2 bg-gray rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative min-h-[400px]">
            <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
            />
        </div>
    );
};

// Data for the cards
const cardsData = [
    {
        type: "standard",
        imageSrc: "/credit-card-logos.png",
        imageAlt: "Crypto Checkout",
        title: "Crypto Checkout",
        subtitle: "For Online Stores",
        description:
            "Accept one-time crypto payments via our fast checkout. 100% crypto. No fiat. No chargebacks.",
        buttonText: "Start Integration",
        className: "start-accepting-card2",
    },
    {
        type: "standard",
        imageSrc: "/mobile-payment-app.png",
        imageAlt: "Flexible Payment Setup",
        title: "Buyer Protection",
        subtitle: "Escrow Mode (Optional)",
        description:
            "Give buyers peace of mind. If enabled, funds are held for 7 days and marked as ‘secured’ during checkout.",
        buttonText: "Learn More",
        className: "start-accepting-card2",
    },
    {
        type: "image",
        imageSrc:
            "https://img.freepik.com/premium-photo/man-working-from-home-using-laptop-mobile-phone_625516-1105.jpg",
        imageAlt: "Developer working with laptop",
    },
    {
        type: "standard",
        imageSrc: "/mobile-payment-app.png",
        imageAlt: "API Integration",
        title: "Offer Subscriptions",
        subtitle: "For Platforms & SaaS (Optional)",
        description:
            "Easily implement recurring crypto payments. Users are reminded 7, 3 and 1 day before expiry.",
        buttonText: "Explore API Docs",
        className: "start-accepting-card1",
    },
];


const StartAccepting = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {cardsData.map((card, index) =>
                card.type === "standard" ? (
                    <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        imageAlt={card.imageAlt}
                        title={card.title}
                        subtitle={card.subtitle}
                        description={card.description}
                        buttonText={card.buttonText}
                        className={card.className}
                    />
                ) : (
                    <ImageCard
                        key={index}
                        imageSrc={card.imageSrc}
                        imageAlt={card.imageAlt}
                    />
                )
            )}
        </div>
    );
};

export default StartAccepting;
