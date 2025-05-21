import React from "react";
import { Button } from "@/components/ui/button";
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
}) => {
  return (
    <div
      className={`bg-secondary rounded-lg p-4 sm:p-8 lg:p-10 space-y-4 hover:shadow-md transition-shadow duration-300 shadow flex flex-col`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1920}
        height={1080}
        className="object-cover"
      />
      <div className="flex flex-col h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <h3 className="text-xl text-emerald-600 font-medium mb-4">
          {subtitle}
        </h3>
        <p className={`text-gray-600 text-lg mb-8`}>{description}</p>
        <Button className="mt-auto">{buttonText}</Button>
      </div>
    </div>
  );
};

// Image Card component for the full image card
interface ImageCardProps {
  imageSrc: string;
  imageAlt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, imageAlt }) => {
  return (
    <div className="start-accepting-card2 bg-gray rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative min-h-[400px]">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
    </div>
  );
};

// Data for the cards
const cardsData = [
  {
    type: "standard",
    imageSrc:
      "https://cdn.prod.website-files.com/673f3cfcea6f215bd7496933/6762f5cf569a36e61f72d1b5_Traditional%20card%20like%20functionality.svg",
    imageAlt: "Crypto Checkout",
    title: "Crypto Checkout",
    subtitle: "For Online Stores",
    description:
      "Accept one-time crypto payments via our fast checkout. 100% crypto. No fiat. No chargebacks.",
    buttonText: "Start Integration",
  },
  {
    type: "standard",
    imageSrc:
      "https://cdn.prod.website-files.com/673f3cfcea6f215bd7496933/6761b43f786d671c41326227_Multi-chain%20and%20tokens.webp",
    imageAlt: "API Integration",
    title: "Crypto Subscription Payments",
    subtitle: "For Platforms & SaaS (Optional)",
    description:
      "Easily implement recurring crypto payments. Users are reminded 7, 3 and 1 day before expiry.",
    buttonText: "Explore API Docs",
  },

  {
    type: "image",
    imageSrc:
      "https://img.freepik.com/premium-photo/man-working-from-home-using-laptop-mobile-phone_625516-1105.jpg",
    imageAlt: "Developer working with laptop",
  },
  {
    type: "standard",
    imageSrc:
      "https://cdn.prod.website-files.com/673f3cfcea6f215bd7496933/6761b43e2466008d90bbc378_Smart%20payment%20collection.webp",
    imageAlt: "Flexible Payment Setup",
    title: "Buyer Protection",
    subtitle: "Escrow Mode (Optional)",
    description:
      "Give buyers peace of mind. If enabled, funds are held for 7 days and marked as ‘secured’ during checkout.",
    buttonText: "Learn More",
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
