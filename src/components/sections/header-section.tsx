"use client";

import {Button} from "@/components/ui/button";
import {useEffect, useState, useRef} from "react";
import Link from "next/link";
import {
    MessageCircle, 
    ChevronDown, 
    Mail, 
    Github, 
    Linkedin, 
    Twitter, 
    Facebook, 
    MessageSquare, 
    ExternalLink,
    CreditCard,
    Shield,
    Wallet,
    FileText,
    Smartphone,
    ShoppingCart,
    Instagram,
    DiscIcon as Discord,
    ShoppingBag,
    FileDigit,
    Globe,
    Code,
    ShieldCheck,
    Webhook,
    Coins,
    TestTube,
    Plus,
    Heart,
    Users,
    Download,
    RefreshCw,
    File
} from "lucide-react";
import { Solution } from "@/lib/types";

export function HeaderSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const contactTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [solutions, setSolutions] = useState<Solution[]>([]);

    // Fetch solutions data when component mounts
    useEffect(() => {
        async function fetchSolutions() {
            try {
                const response = await fetch('/api/solutions');
                if (!response.ok) {
                    throw new Error('Failed to fetch solutions');
                }
                const data = await response.json();
                setSolutions(data);
            } catch (error) {
                console.error('Error fetching solutions:', error);
            }
        }

        fetchSolutions();
    }, []);

    const socialFeatures = [
        {
            title: "Twitter",
            description: "Folgen Sie uns für die neuesten Updates und Ankündigungen.",
            icon: <Twitter className="h-6 w-6 text-blue-500" />,
            href: "https://twitter.com/bitmopay",
            color: "bg-blue-50",
        },
        {
            title: "Facebook",
            description: "Verbinden Sie sich mit unserer Community und teilen Sie Ihre Erfahrungen.",
            icon: <Facebook className="h-6 w-6 text-blue-600" />,
            href: "https://facebook.com/bitmopay",
            color: "bg-blue-50",
        },
        {
            title: "Discord",
            description: "Treten Sie unserem Discord-Server bei für direkten Support und Diskussionen.",
            icon: <Discord className="h-6 w-6 text-indigo-500" />,
            href: "https://discord.gg/bitmopay",
            color: "bg-indigo-50",
        },
        {
            title: "Instagram",
            description: "Sehen Sie unsere visuellen Updates und Geschichten.",
            icon: <Instagram className="h-6 w-6 text-pink-500" />,
            href: "https://instagram.com/bitmopay",
            color: "bg-pink-50",
        },
        {
            title: "LinkedIn",
            description: "Vernetzen Sie sich beruflich und bleiben Sie über Karrieremöglichkeiten informiert.",
            icon: <Linkedin className="h-6 w-6 text-blue-700" />,
            href: "https://linkedin.com/company/bitmopay",
            color: "bg-blue-50",
        },
        {
            title: "GitHub",
            description: "Entdecken Sie unsere Open-Source-Projekte und tragen Sie bei.",
            icon: <Github className="h-6 w-6 text-gray-800" />,
            href: "https://github.com/bitmopay",
            color: "bg-gray-50",
        },
    ];

    const paymentFeatures = [
        {
            title: "Payment",
            description: "Securely manage your payments with our convenient options.",
            icon: <CreditCard className="h-6 w-6 text-blue-500" />,
            href: "#payment",
            color: "bg-blue-50",
        },
        {
            title: "Security",
            description: "Protect your transactions with our advanced security features.",
            icon: <Shield className="h-6 w-6 text-green-500" />,
            href: "#security",
            color: "bg-green-50",
        },
        {
            title: "Wallet",
            description: "Effortlessly store and access your funds anytime, anywhere.",
            icon: <Wallet className="h-6 w-6 text-red-500" />,
            href: "#wallet",
            color: "bg-red-50",
        },
        {
            title: "Invoice",
            description: "Simplify your billing process with our user-friendly invoicing tools.",
            icon: <FileText className="h-6 w-6 text-yellow-500" />,
            href: "#invoice",
            color: "bg-yellow-50",
        },
        {
            title: "Contactless",
            description: "Experience fast and easy payments with contactless technology.",
            icon: <Smartphone className="h-6 w-6 text-purple-500" />,
            href: "#contactless",
            color: "bg-purple-50",
        },
        {
            title: "Checkout",
            description: "Streamline your purchase process with our seamless checkout.",
            icon: <ShoppingCart className="h-6 w-6 text-pink-500" />,
            href: "#checkout",
            color: "bg-pink-50",
        },
    ];

    // Helper function to get icon component based on icon name
    const getIconComponent = (iconName: string) => {
        const iconMap: Record<string, JSX.Element> = {
            'ShoppingCart': <ShoppingCart className="h-6 w-6 text-blue-500" />,
            'ShoppingBag': <ShoppingBag className="h-6 w-6 text-blue-500" />,
            'FileDigit': <FileDigit className="h-6 w-6 text-green-500" />,
            'Globe': <Globe className="h-6 w-6 text-purple-500" />,
            'Code': <Code className="h-6 w-6 text-yellow-500" />,
            'ShieldCheck': <ShieldCheck className="h-6 w-6 text-red-500" />,
            'Wallet': <Wallet className="h-6 w-6 text-emerald-500" />,
            'Webhook': <Webhook className="h-6 w-6 text-indigo-500" />,
            'Coins': <Coins className="h-6 w-6 text-amber-500" />,
            'TestTube': <TestTube className="h-6 w-6 text-pink-500" />,
            'Plus': <Plus className="h-6 w-6 text-gray-500" />,
            'Heart': <Heart className="h-6 w-6 text-red-500" />,
            'Users': <Users className="h-6 w-6 text-blue-500" />,
            'Download': <Download className="h-6 w-6 text-purple-500" />,
            'RefreshCw': <RefreshCw className="h-6 w-6 text-green-500" />,
            'File': <File className="h-6 w-6 text-gray-500" />,
            'CreditCard': <CreditCard className="h-6 w-6 text-blue-500" />,
            'Shield': <Shield className="h-6 w-6 text-green-500" />,
            'FileText': <FileText className="h-6 w-6 text-yellow-500" />,
            'Smartphone': <Smartphone className="h-6 w-6 text-purple-500" />
        };

        return iconMap[iconName] || <File className="h-6 w-6 text-gray-500" />;
    };

    // Helper function to get background color based on icon name
    const getColorForIcon = (iconName: string) => {
        const colorMap: Record<string, string> = {
            'ShoppingCart': 'bg-blue-50',
            'ShoppingBag': 'bg-blue-50',
            'FileDigit': 'bg-green-50',
            'Globe': 'bg-purple-50',
            'Code': 'bg-yellow-50',
            'ShieldCheck': 'bg-red-50',
            'Wallet': 'bg-emerald-50',
            'Webhook': 'bg-indigo-50',
            'Coins': 'bg-amber-50',
            'TestTube': 'bg-pink-50',
            'Plus': 'bg-gray-50',
            'Heart': 'bg-red-50',
            'Users': 'bg-blue-50',
            'Download': 'bg-purple-50',
            'RefreshCw': 'bg-green-50',
            'File': 'bg-gray-50',
            'CreditCard': 'bg-blue-50',
            'Shield': 'bg-green-50',
            'FileText': 'bg-yellow-50',
            'Smartphone': 'bg-purple-50'
        };

        return colorMap[iconName] || 'bg-gray-50';
    };

    const getFeatures = (menuName: string) => {
        switch (menuName) {
            case "Solutions":
                // If solutions data is available, use it
                if (solutions.length > 0) {
                    return solutions.map(solution => ({
                        title: solution.title,
                        description: solution.description,
                        icon: getIconComponent(solution.icon),
                        href: solution.link,
                        color: getColorForIcon(solution.icon)
                    }));
                }
                // Fallback to payment features if solutions data is not yet loaded
                return paymentFeatures;
            case "Contact":
                return socialFeatures;
            default:
                return [];
        }
    };

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

    // Cleanup contact timeout on unmount
    useEffect(() => {
        return () => {
            if (contactTimeoutRef.current) {
                clearTimeout(contactTimeoutRef.current);
            }
        };
    }, []);

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
                            <NavItem href="/solutions" label="Solutions" hasDropdown isScrolled={isScrolled} setActiveMenu={setActiveMenu} activeMenu={activeMenu} getFeatures={getFeatures} />
                            <NavItem href="/pricing" label="Pricing" isScrolled={isScrolled} setActiveMenu={setActiveMenu} activeMenu={activeMenu} getFeatures={getFeatures} />
                            <NavItem href="/become-partner" label="Become a Partner" isScrolled={isScrolled} setActiveMenu={setActiveMenu} activeMenu={activeMenu} getFeatures={getFeatures} />
                            <NavItem href="#" label="More" hasDropdown isScrolled={isScrolled} setActiveMenu={setActiveMenu} activeMenu={activeMenu} getFeatures={getFeatures} />
                        </nav>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Contact Icon with Dropdown */}
                        <div 
                            className="relative group"
                            onMouseEnter={() => {
                                if (contactTimeoutRef.current) {
                                    clearTimeout(contactTimeoutRef.current);
                                    contactTimeoutRef.current = null;
                                }
                                setActiveMenu("Contact");
                            }}
                            onMouseLeave={() => {
                                contactTimeoutRef.current = setTimeout(() => {
                                    setActiveMenu(null);
                                }, 500);
                            }}
                        >
                            <button 
                                className={`flex items-center justify-center p-2 rounded-full ${
                                    isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-emerald-800'
                                } transition-colors`}
                                aria-label="Contact"
                            >
                                <MessageCircle className="h-5 w-5" />
                            </button>

                            {activeMenu === "Contact" && (
                                <div 
                                    className="absolute right-0 z-10 mt-3 w-80 transform px-2 sm:px-0"
                                    onMouseEnter={() => {
                                        if (contactTimeoutRef.current) {
                                            clearTimeout(contactTimeoutRef.current);
                                            contactTimeoutRef.current = null;
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        contactTimeoutRef.current = setTimeout(() => {
                                            setActiveMenu(null);
                                        }, 500);
                                    }}
                                >
                                    <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                                        <div className="relative bg-white p-6">
                                            <div className="mb-4">
                                                <h3 className="text-lg font-medium text-gray-900">Get in Touch</h3>
                                                <p className="text-sm text-gray-500">We're here to help with any questions</p>
                                            </div>
                                            <div className="grid gap-4">
                                                {socialFeatures.map((feature) => (
                                                    <Link
                                                        key={feature.title}
                                                        href={feature.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                                                    >
                                                        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md ${feature.color}`}>
                                                            {feature.icon}
                                                        </div>
                                                        <div className="ml-4">
                                                            <p className="text-sm font-medium text-gray-900 flex items-center">
                                                                {feature.title}
                                                                <ExternalLink className="ml-1 h-3 w-3 text-gray-400" />
                                                            </p>
                                                            <p className="mt-1 text-xs text-gray-500">{feature.description}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                                <Link
                                                    href="/contact"
                                                    className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                                                >
                                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-emerald-50">
                                                        <Mail className="h-6 w-6 text-emerald-600" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-medium text-gray-900">Contact Form</p>
                                                        <p className="mt-1 text-xs text-gray-500">Send us a message directly</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

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
                        <MobileNavItem href="/solutions" label="Solutions" getFeatures={getFeatures}/>
                        <MobileNavItem href="/pricing" label="Pricing" getFeatures={getFeatures}/>
                        <MobileNavItem href="/become-partner" label="Become a Partner" getFeatures={getFeatures}/>
                        <MobileNavItem href="#" label="More" isDropdown={true} getFeatures={getFeatures}>
                            <div className="grid grid-cols-1 gap-3 pl-4 mt-2">
                                <Link 
                                    href="/resources"
                                    className="text-white text-base hover:text-emerald-300 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Resources
                                </Link>
                                <Link 
                                    href="/docs"
                                    className="text-white text-base hover:text-emerald-300 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Documentation
                                </Link>
                                <Link 
                                    href="/faq"
                                    className="text-white text-base hover:text-emerald-300 transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    FAQ
                                </Link>
                            </div>
                        </MobileNavItem>
                        <MobileNavItem href="/contact" label="Contact" getFeatures={getFeatures}/>

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
                     setActiveMenu,
                     activeMenu,
                     getFeatures,
                 }: {
    href: string;
    label?: string;
    hasDropdown?: boolean;
    children?: React.ReactNode;
    isScrolled?: boolean;
    setActiveMenu: (menu: string | null) => void;
    activeMenu: string | null;
    getFeatures?: (menuName: string) => any[];
})  {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 500); // 500ms delay before closing the menu
    };

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (hasDropdown) {
            setActiveMenu(label || null);
        }
    };

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                href={href}
                className={`${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-emerald-950'} ${isScrolled ? 'text-gray-950' : 'text-white'} font-semibold font-outfit py-1 px-3 rounded-xl ${isScrolled ? 'hover:text-gray-950' : 'hover:text-white'} dark:text-gray-300 dark:hover:text-white flex items-center transition-colors`}
            >
                {label ? (
                    <>
                        {label}
                        {hasDropdown && (
                            <ChevronDown className="ml-1 h-4 w-4 transition-transform" />
                        )}
                    </>
                ) : (
                    children && React.Children.toArray(children)[0]
                )}
            </Link>
            {hasDropdown && activeMenu === label && (
                <div 
                    className="absolute left-1/2 z-10 mt-3 w-screen max-w-4xl -translate-x-1/2 transform px-2 sm:px-0"
                    onMouseEnter={() => {
                        if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current);
                            timeoutRef.current = null;
                        }
                    }}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white p-6 sm:gap-8 sm:p-8 grid-cols-3">
                            {getFeatures(label || "").map((feature) => (
                                <Link
                                    key={feature.title}
                                    href={feature.href}
                                    className={`-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50 ${feature.color}`}
                                >
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md sm:h-12 sm:w-12">
                                        {feature.icon}
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900">{feature.title}</p>
                                        <p className="mt-1 text-xs text-gray-500">{feature.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="bg-gray-50 p-5 sm:p-8">
                            <div className="flow-root">
                                <div className="-m-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">Ready to get started?</p>
                                            <p className="text-sm text-gray-500">
                                                Take the first step towards hassle-free transactions today.
                                            </p>
                                        </div>
                                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">Get free access</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Mobile Navigation Item Component
function MobileNavItem({
    href, 
    label, 
    icon, 
    isDropdown = false, 
    children,
    getFeatures
}: { 
    href: string; 
    label: string; 
    icon?: React.ReactNode;
    isDropdown?: boolean;
    children?: React.ReactNode;
    getFeatures?: (menuName: string) => any[];
}) {
    // Special case for dropdown items with features
    if (label === "Solutions" || label === "Contact") {
        const features = getFeatures ? getFeatures(label) : [];
        return (
            <div className="space-y-3">
                <div className="text-white text-xl font-medium flex items-center">
                    {icon}
                    {label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                </div>
                <div className="grid grid-cols-1 gap-4 pl-4 mt-2">
                    {features.map((feature) => (
                        <Link 
                            key={feature.title}
                            href={feature.href}
                            target={feature.href.startsWith("http") ? "_blank" : undefined}
                            rel={feature.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex items-center text-white hover:text-emerald-300 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="mr-2 text-emerald-400">
                                {feature.icon}
                            </span>
                            <div>
                                <div className="font-medium">{feature.title}</div>
                                <div className="text-xs text-gray-400">{feature.description}</div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-800 dark:border-gray-700">
                    <div className="text-white text-sm">Ready to get started?</div>
                    <Button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white">
                        Get free access
                    </Button>
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
