"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "../ui/input";

export function FooterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-emerald-950 text-gray-300 pt-20 pb-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-20 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8 lg:p-10 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-emerald-800/20 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-600/30 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Stay Updated
              </h2>
              <p className="text-emerald-100">
                Subscribe to our newsletter to stay informed about the latest
                features, updates, and offers.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-auto flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-grow">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 rounded-lg bg-white/10 backdrop-blur-sm focus-visible:ring-offset-0 border border-emerald-700/50 text-white !placeholder-gray-300 focus:outline-none focus:!ring-2 focus:!ring-emerald-500 focus:!border-transparent transition-all duration-200"
                />
              </div>
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-white mb-4 group"
            >
              <div className="relative w-10 h-10 flex items-center justify-center bg-emerald-800/30 rounded-lg p-2 transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-6 h-6 text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="relative">
                Bitmopay
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              The easiest way to accept crypto payments. Secure, fast, and
              reliable.
            </p>
            <div className="flex gap-5">
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="github" />
              <SocialLink href="#" icon="linkedin" />
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-white text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="API" />
              <FooterLink href="#" label="Plugins" />
              <FooterLink href="#" label="Payments" />
              <FooterLink href="#" label="Terminal" />
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-white text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="E-Commerce" />
              <FooterLink href="#" label="Business" />
              <FooterLink href="#" label="Developers" />
              <FooterLink href="#" label="Marketplaces" />
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-white text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Documentation" />
              <FooterLink href="#" label="Developers" />
              <FooterLink href="#" label="Blog" />
              <FooterLink href="#" label="Support" />
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-white text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="#" label="Terms of Service" />
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Imprint" />
              <FooterLink href="#" label="Cookies" />
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Bitmopay. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200"
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Footer link component
function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
      >
        <span className="relative">
          {label}
          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-400/50 group-hover:w-full transition-all duration-300"></span>
        </span>
      </Link>
    </li>
  );
}

// Social media link component
function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: "facebook" | "twitter" | "github" | "linkedin";
}) {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 bg-gray-800/50 hover:bg-gray-800 p-2.5 rounded-lg"
      aria-label={`Follow us on ${icon}`}
    >
      {icon === "facebook" && (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      )}

      {icon === "twitter" && (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )}

      {icon === "github" && (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      )}

      {icon === "linkedin" && (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </Link>
  );
}
