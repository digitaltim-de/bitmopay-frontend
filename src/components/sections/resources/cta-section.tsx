"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useSubtleAnimation } from "@/hooks/use-subtle-animation";

export function CtaSection() {  useSubtleAnimation({
    fadeInElements: ".cta-content",
    fadeInDistance: 15,
    fadeInDuration: 0.5,
    fadeInTrigger: ".cta-section",
    fadeInStart: "top bottom-=80px"
  });

  return (
    <div className="cta-section bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-800 dark:to-teal-900">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-10 md:p-16">
          <div className="cta-content grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Need additional support?
              </h2>
              <p className="mt-4 text-lg text-emerald-50">
                Our team is ready to help you implement Bitmopay and answer any questions you might have.
                Schedule a demo or contact our support team for personalized assistance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="font-medium">
                  <Link href="/become-partner" className="flex items-center">
                    Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium">
                  <Link href="/contact" className="flex items-center">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
            <div className="cta-content hidden md:block">
              <div className="rounded-xl bg-white/20 p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/20 p-4">
                    <p className="font-medium text-white">
                      "Bitmopay's documentation and resources made our integration process seamless. The support team was exceptional."
                    </p>
                    <p className="mt-2 text-sm text-emerald-50">
                      — Sarah J., E-commerce Developer
                    </p>
                  </div>
                  <div className="rounded-lg bg-white/20 p-4">
                    <p className="font-medium text-white">
                      "The video tutorials and code samples helped us implement cryptocurrency payments in record time."
                    </p>
                    <p className="mt-2 text-sm text-emerald-50">
                      — Miguel R., Tech Lead
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
