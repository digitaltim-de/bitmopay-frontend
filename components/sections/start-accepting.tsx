import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const StartAccepting = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      <div className="start-accepting-card1 bg-gray rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
        <div className="mb-6 relative w-48 h-48">
          <Image
            src="/mobile-payment-app.png"
            alt="Mobile Payment App"
            width={192}
            height={192}
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Start accepting crypto payments
        </h2>
        <h3 className="text-xl text-emerald-600 font-medium mb-4">
          For online businesses
        </h3>
        <p className="text-gray-600 text-lg mb-8">
          Adding a crypto checkout to your website or online store is easy with
          our automated cryptocurrency payment gateway, and your customers will
          love it.
        </p>
        <Button className="mt-auto">Accept crypto payments in 10 minutes</Button>
      </div>

      <div className="start-accepting-card2 bg-gray rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
        <div className="mb-6 relative w-48 h-48">
          <Image
            src="/credit-card-logos.png"
            alt="Credit Card Logos"
            width={192}
            height={192}
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Integrate payment solutions
        </h2>
        <h3 className="text-xl text-emerald-600 font-medium mb-4">
          For developers
        </h3>
        <p className="text-gray-600 text-lg mb-8">
          Our API and developer tools make it simple to integrate cryptocurrency
          payments into your applications with secure and reliable transaction
          processing.
        </p>
        <Button>View developer documentation</Button>
      </div>
      <div className="start-accepting-card2 bg-gray rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative min-h-[400px]">
        <Image
          src="https://img.freepik.com/premium-photo/man-working-from-home-using-laptop-mobile-phone_625516-1105.jpg"
          alt="Credit Card Logos"
          fill
          className="object-cover"
        />
      </div>
      <div className="start-accepting-card2 bg-gray rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
        <div className="mb-6 relative w-48 h-48">
          <Image
            src="/credit-card-logos.png"
            alt="Credit Card Logos"
            width={192}
            height={192}
            className="object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Integrate payment solutions
        </h2>
        <h3 className="text-xl text-emerald-600 font-medium mb-4">
          For developers
        </h3>
        <p className="text-gray-600 text-lg mb-8">
          Our API and developer tools make it simple to integrate cryptocurrency
          payments into your applications with secure and reliable transaction
          processing.
        </p>
        <Button>View developer documentation</Button>
      </div>
    </div>
  );
};

export default StartAccepting;
