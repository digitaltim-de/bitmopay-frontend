"use client";

import { Section } from "@/components/shared/section";
import Image from "next/image";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

export function Testimonial({ quote, author, company, image }: TestimonialProps) {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            {/* Author image */}
            <div className="mb-6 flex-shrink-0 md:mb-0 md:mr-6">
              <div className="relative h-20 w-20 overflow-hidden rounded-full">
                <Image
                  src={image}
                  alt={author}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Quote content */}
            <div>
              <div className="mb-4 text-emerald-500 dark:text-emerald-400">
                <Quote size={32} />
              </div>
              
              <blockquote className="mb-4 text-lg font-medium italic text-gray-700 dark:text-gray-300">
                "{quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{author}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}