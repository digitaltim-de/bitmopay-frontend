"use client";

import { MailIcon, MapPin, PhoneCall, Clock } from "lucide-react";
import { useSubtleAnimation } from "@/hooks/use-subtle-animation";

export function ContactInfoSection() {
  useSubtleAnimation({
    fadeInElements: [".contact-info"],
    fadeInDuration: 0.5,
    fadeInStagger: 0.1,
    fadeInTrigger: ".contact-info-section",
  });

  const contactDetails = [
    {
      icon: <MailIcon className="h-6 w-6 text-emerald-500" />,
      title: "Email Us",
      content: "support@bitmopay.com",
      description: "For general inquiries and support",
    },
    {
      icon: <PhoneCall className="h-6 w-6 text-emerald-500" />,
      title: "Call Us",
      content: "+1 (888) 123-4567",
      description: "Mon-Fri from 9am to 5pm EST",
    },
    {
      icon: <MapPin className="h-6 w-6 text-emerald-500" />,
      title: "Visit Us",
      content: "123 Blockchain Street, Suite 101",
      description: "San Francisco, CA 94103, USA",
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-500" />,
      title: "Business Hours",
      content: "Monday to Friday: 9am - 5pm EST",
      description: "Weekend support via email only",
    },
  ];

  return (
    <div className="contact-info-section bg-gray-50 py-16 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How to Reach Us</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our team is available through multiple channels to ensure you get the support you need
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="contact-info flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-all
                hover:shadow-md dark:bg-gray-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-2 font-medium text-gray-800 dark:text-gray-200">{item.content}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-emerald-50 p-6 shadow-sm dark:bg-emerald-950">
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Need Immediate Assistance?
            </h3>
            <p className="mb-6 max-w-2xl text-gray-600 dark:text-gray-300">
              For urgent matters, our priority support line is available to Enterprise customers.
              Contact your account manager or visit our help center for detailed resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/documentation"
                className="rounded-md bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
              >
                Visit Help Center
              </a>
              <a
                href="/faq"
                className="rounded-md border border-emerald-600 bg-transparent px-6 py-3 font-medium text-emerald-600
                  transition-colors hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500
                  dark:hover:bg-emerald-900/30"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
