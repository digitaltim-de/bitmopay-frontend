"use client";

import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import Link from "next/link";

export function HeaderSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event to create sticky header effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (isMenuOpen && !target.closest("[data-menu-container]")) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <header
            className={`${
                isScrolled
                    ? "!bg-white dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
                    : "bg-emerald-900 dark:bg-gray-900"
            } py-4 sticky top-0 z-50 transition-all backdrop-blur-lg`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold text-white flex items-center group"
                        >
                            <svg
                                className="h-8 w-8 mr-2 transition-transform  group-hover:scale-110"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2L2 7L12 12L22 7L12 2Z"
                                    fill="#4ADE80"
                                    stroke="#4ADE80"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2 17L12 22L22 17"
                                    stroke="#4ADE80"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2 12L12 17L22 12"
                                    stroke="#4ADE80"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="relative">
                Bitmopay
                <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all "></span>
              </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex ml-10 space-x-8">
                            <NavItem href="#" label="Products" hasDropdown>
                                <div
                                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                    {[
                                        {href: "#", label: "API"},
                                        {href: "#", label: "Plugins"},
                                        {href: "#", label: "Payments"}
                                    ].map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </NavItem>
                            <NavItem href="#" label="Solutions" hasDropdown>
                                <div
                                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                    {[
                                        {href: "#", label: "E-Commerce"},
                                        {href: "#", label: "Business"},
                                        {href: "#", label: "Developers"}
                                    ].map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </NavItem>

                            <NavItem href="#" label="Resources"/>
                            <NavItem href="#" label="Pricing"/>
                            <NavItem href="#" label="Contact" hasDropdown>
                                <nav className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-xl w-64 p-4 space-y-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                  <ul className="space-y-2">
                                    <li>
                                      <a href="https://discord.gg/bitmopay" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-xl hover:bg-emerald-50 transition">
                                        <div className="font-semibold text-gray-900">Discord</div>
                                        <p className="text-sm text-gray-600 hidden md:block">Join our community on Discord</p>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="block p-3 rounded-xl hover:bg-emerald-50 transition">
                                        <div className="font-semibold text-gray-900">Facebook</div>
                                        <p className="text-sm text-gray-600 hidden md:block">Follow us on Facebook</p>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="block p-3 rounded-xl hover:bg-emerald-50 transition">
                                        <div className="font-semibold text-gray-900">Twitter</div>
                                        <p className="text-sm text-gray-600 hidden md:block">Follow us on Twitter</p>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="block p-3 rounded-xl hover:bg-emerald-50 transition">
                                        <div className="font-semibold text-gray-900">LinkedIn</div>
                                        <p className="text-sm text-gray-600 hidden md:block">Connect with us on LinkedIn</p>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="block p-3 rounded-xl hover:bg-emerald-50 transition">
                                        <div className="font-semibold text-gray-900">GitHub</div>
                                        <p className="text-sm text-gray-600 hidden md:block">Check out our code on GitHub</p>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#" className="block p-3 rounded-xl hover:bg-emerald-50 transition">
                                        <div className="font-semibold text-gray-900">Email</div>
                                        <p className="text-sm text-gray-600 hidden md:block">Contact us via email</p>
                                      </a>
                                    </li>
                                  </ul>
                                </nav>
                            </NavItem>
                        </nav>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="light">
                            Login
                        </Button>
                        <Button>
                            Register
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center" data-menu-container>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            <svg
                                className={`h-6 w-6 transition-transform  ${
                                    isMenuOpen ? "rotate-90" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-emerald-900/95 dark:bg-gray-900/95 backdrop-blur-sm z-40 md:hidden transition-all  ${
                    isMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                }`}
                style={{top: "64px"}}
            >
                <div className="container mx-auto px-4 py-6">
                    <nav className="flex flex-col space-y-6">
                        <MobileNavItem href="#" label="Products"/>
                        <MobileNavItem href="#" label="Solutions"/>
                        <MobileNavItem href="#" label="Resources"/>
                        <MobileNavItem href="#" label="Pricing"/>
                        <MobileNavItem href="#" label="Contact"/>

                        <div className="pt-6 border-t border-emerald-800 dark:border-gray-700 space-y-4">
                            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3">
                                Register
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

// Desktop Navigation Item Component
function NavItem({
                     href,
                     label,
                     hasDropdown = false,
                     children,
                 }: {
    href: string;
    label: string;
    hasDropdown?: boolean;
    children?: React.ReactNode;
}) {
    return (
        <div className="relative group">
            <Link
                href={href}
                className="hover:bg-emerald-950 text-white font-semibold font-outfit py-2 px-4 rounded-xl hover:text-white dark:text-gray-300 dark:hover:text-white flex items-center group-hover:text-white dark:group-hover:text-white transition-colors"
            >
                {label}
                {hasDropdown && (
                    <svg
                        className="ml-1 h-4 w-4 transition-transform  group-hover:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                )}
            </Link>
            {children}
        </div>
    );
}

// Mobile Navigation Item Component
function MobileNavItem({href, label}: { href: string; label: string }) {
    // Special case for Contact to show social links
    if (label === "Contact") {
        return (
            <div className="space-y-3">
                <div className="text-white text-xl font-medium">Contact</div>
                <div className="grid grid-cols-2 gap-3 pl-4 mt-2">
                    <Link 
                        href="https://discord.gg/bitmopay" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Discord
                    </Link>
                    <Link 
                        href="#" 
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Facebook
                    </Link>
                    <Link 
                        href="#" 
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Twitter
                    </Link>
                    <Link 
                        href="#" 
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        LinkedIn
                    </Link>
                    <Link 
                        href="#" 
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        GitHub
                    </Link>
                    <Link 
                        href="#" 
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Email
                    </Link>
                </div>
            </div>
        );
    }

    // Default case for other menu items
    return (
        <Link
            href={href}
            className="text-white text-xl font-medium hover:text-emerald-300 transition-colors "
            onClick={(e) => e.stopPropagation()}
        >
            {label}
        </Link>
    );
}
