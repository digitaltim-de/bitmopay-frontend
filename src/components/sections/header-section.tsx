"use client";

import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import Link from "next/link";
import {MessageCircle, ChevronDown} from "lucide-react";

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
                        <nav className="hidden md:flex ml-10 space-x-6">
                            <NavItem href="/solutions" label="Solutions" hasDropdown isScrolled={isScrolled}>
                                <div
                                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="solutions-menu">
                                    {[
                                        {href: "/solutions/ecommerce", label: "E-Commerce"},
                                        {href: "/solutions/saas", label: "SaaS"},
                                        {href: "/solutions/donations", label: "Donations"},
                                        {href: "/solutions/membership", label: "Membership"},
                                        {href: "/solutions/invoicing", label: "Invoicing"},
                                        {href: "/solutions/digital-downloads", label: "Digital Downloads"},
                                        {href: "/solutions/reseller", label: "Reseller"}
                                    ].map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400"
                                            role="menuitem"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </NavItem>

                            <NavItem href="/become-partner" label="Become a Partner" isScrolled={isScrolled}/>
                            <NavItem href="/about" label="About Us" isScrolled={isScrolled}/>

                            <NavItem href="#" label="More" hasDropdown isScrolled={isScrolled}>
                                <div
                                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="more-menu">
                                    {[
                                        {href: "/resources", label: "Resources"},
                                        {href: "/pricing", label: "Pricing"}
                                    ].map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400"
                                            role="menuitem"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </NavItem>

                        </nav>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href="/contact"
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                            aria-label="Contact"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </Link>
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
                        <MobileNavItem href="/products" label="Products"/>
                        <MobileNavItem href="/solutions" label="Solutions"/>
                        <MobileNavItem href="/become-partner" label="Become a Partner"/>
                        <MobileNavItem href="/about" label="About Us"/>
                        <MobileNavItem href="#" label="More" isDropdown={true}>
                            <div className="grid grid-cols-1 gap-3 pl-4 mt-2">
                                <Link 
                                    href="/resources"
                                    className="text-white text-base hover:text-emerald-300 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Resources
                                </Link>
                                <Link 
                                    href="/pricing"
                                    className="text-white text-base hover:text-emerald-300 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Pricing
                                </Link>
                            </div>
                        </MobileNavItem>
                        <MobileNavItem href="/contact" label="Contact" icon={<MessageCircle className="mr-2 h-5 w-5" />}/>

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
                     isScrolled,
                 }: {
    href: string;
    label?: string;
    hasDropdown?: boolean;
    children?: React.ReactNode;
    isScrolled?: boolean;
}) {
    return (
        <div className="relative group">
            <Link
                href={href}
                className={`${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-emerald-950'} ${isScrolled ? 'text-gray-950' : 'text-white'} font-semibold font-outfit py-1 px-3 rounded-xl ${isScrolled ? 'hover:text-gray-950' : 'hover:text-white'} dark:text-gray-300 dark:hover:text-white flex items-center ${isScrolled ? 'group-hover:text-gray-950' : 'group-hover:text-white'} dark:group-hover:text-white transition-colors`}
            >
                {label ? (
                    <>
                        {label}
                        {hasDropdown && (
                            <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                        )}
                    </>
                ) : (
                    children && React.Children.toArray(children)[0]
                )}
            </Link>
            {label && children}
        </div>
    );
}

// Mobile Navigation Item Component
function MobileNavItem({
    href, 
    label, 
    icon, 
    isDropdown = false, 
    children
}: { 
    href: string; 
    label: string; 
    icon?: React.ReactNode;
    isDropdown?: boolean;
    children?: React.ReactNode;
}) {
    // Special case for Contact to show social links
    if (label === "Contact" && !icon) {
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
                        href="https://facebook.com/bitmopay" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Facebook
                    </Link>
                    <Link 
                        href="https://twitter.com/bitmopay" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Twitter
                    </Link>
                    <Link 
                        href="https://linkedin.com/company/bitmopay" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        LinkedIn
                    </Link>
                    <Link 
                        href="https://github.com/bitmopay" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        GitHub
                    </Link>
                    <Link 
                        href="mailto:contact@bitmopay.com" 
                        className="text-white text-base hover:text-emerald-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Email
                    </Link>
                </div>
            </div>
        );
    }

    // Case for dropdown items
    if (isDropdown) {
        return (
            <div className="space-y-3">
                <div className="text-white text-xl font-medium flex items-center">
                    {icon}
                    {label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                </div>
                {children}
            </div>
        );
    }

    // Default case for other menu items
    return (
        <Link
            href={href}
            className="text-white text-xl font-medium hover:text-emerald-300 transition-colors flex items-center"
            onClick={(e) => e.stopPropagation()}
        >
            {icon}
            {label}
        </Link>
    );
}
