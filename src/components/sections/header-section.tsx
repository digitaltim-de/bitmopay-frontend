"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
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
  BookOpen,
  HelpCircle,
  Plus,
  Heart,
  Users,
  Download,
  RefreshCw,
  File,
} from "lucide-react";
import { Solution } from "@/lib/types";
import { cn } from "@/lib/utils";

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
        const response = await fetch("/api/solutions");
        if (!response.ok) {
          throw new Error("Failed to fetch solutions");
        }
        const data = await response.json();
        setSolutions(data);
      } catch (error) {
        console.error("Error fetching solutions:", error);
      }
    }

    fetchSolutions();
  }, []);

  const socialFeatures = [
    {
      title: "Twitter",
      description: "Latest updates and announcements",
      icon: <Twitter className="h-6 w-6 text-blue-500" />,
      href: "https://twitter.com/bitmopay",
      color: "bg-blue-50",
    },
    {
      title: "Facebook",
      description: "Connect with our community",
      icon: <Facebook className="h-6 w-6 text-blue-600" />,
      href: "https://facebook.com/bitmopay",
      color: "bg-blue-50",
    },
    {
      title: "Discord",
      description: "Join for direct support",
      icon: <Discord className="h-6 w-6 text-indigo-500" />,
      href: "https://discord.gg/bitmopay",
      color: "bg-indigo-50",
    },
    {
      title: "Instagram",
      description: "Visual updates and stories",
      icon: <Instagram className="h-6 w-6 text-pink-500" />,
      href: "https://instagram.com/bitmopay",
      color: "bg-pink-50",
    },
    {
      title: "LinkedIn",
      description: "Professional networking",
      icon: <Linkedin className="h-6 w-6 text-blue-700" />,
      href: "https://linkedin.com/company/bitmopay",
      color: "bg-blue-50",
    },
    {
      title: "GitHub",
      description: "Open-source projects",
      icon: <Github className="h-6 w-6 text-gray-800" />,
      href: "https://github.com/bitmopay",
      color: "bg-gray-50",
    },
  ];

  const paymentFeatures = [
    {
      title: "Payment",
      description: "Secure payment options",
      icon: <CreditCard className="h-6 w-6 text-blue-500" />,
      href: "#payment",
      color: "bg-blue-50",
    },
    {
      title: "Security",
      description: "Advanced security features",
      icon: <Shield className="h-6 w-6 text-green-500" />,
      href: "#security",
      color: "bg-green-50",
    },
    {
      title: "Wallet",
      description: "Access funds anywhere",
      icon: <Wallet className="h-6 w-6 text-red-500" />,
      href: "#wallet",
      color: "bg-red-50",
    },
    {
      title: "Invoice",
      description: "User-friendly invoicing",
      icon: <FileText className="h-6 w-6 text-yellow-500" />,
      href: "#invoice",
      color: "bg-yellow-50",
    },
    {
      title: "Contactless",
      description: "Fast contactless payments",
      icon: <Smartphone className="h-6 w-6 text-purple-500" />,
      href: "#contactless",
      color: "bg-purple-50",
    },
    {
      title: "Checkout",
      description: "Seamless checkout process",
      icon: <ShoppingCart className="h-6 w-6 text-pink-500" />,
      href: "#checkout",
      color: "bg-pink-50",
    },
  ];
  // Helper function to get icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      ShoppingCart: <ShoppingCart className="h-6 w-6 text-blue-500" />,
      ShoppingBag: <ShoppingBag className="h-6 w-6 text-blue-500" />,
      FileDigit: <FileDigit className="h-6 w-6 text-green-500" />,
      Globe: <Globe className="h-6 w-6 text-purple-500" />,
      Code: <Code className="h-6 w-6 text-yellow-500" />,
      ShieldCheck: <ShieldCheck className="h-6 w-6 text-red-500" />,
      Wallet: <Wallet className="h-6 w-6 text-emerald-500" />,
      Webhook: <Webhook className="h-6 w-6 text-indigo-500" />,
      Coins: <Coins className="h-6 w-6 text-amber-500" />,
      TestTube: <TestTube className="h-6 w-6 text-pink-500" />,
      Plus: <Plus className="h-6 w-6 text-gray-500" />,
      Heart: <Heart className="h-6 w-6 text-red-500" />,
      Users: <Users className="h-6 w-6 text-blue-500" />,
      Download: <Download className="h-6 w-6 text-purple-500" />,
      RefreshCw: <RefreshCw className="h-6 w-6 text-green-500" />,
      File: <File className="h-6 w-6 text-gray-500" />,
      CreditCard: <CreditCard className="h-6 w-6 text-blue-500" />,
      Shield: <Shield className="h-6 w-6 text-green-500" />,
      FileText: <FileText className="h-6 w-6 text-yellow-500" />,
      Smartphone: <Smartphone className="h-6 w-6 text-purple-500" />,
    };

    return iconMap[iconName] || <File className="h-6 w-6 text-gray-500" />;
  };

  // Helper function to get background color based on icon name
  const getColorForIcon = (iconName: string) => {
    const colorMap: Record<string, string> = {
      ShoppingCart: "bg-blue-50",
      ShoppingBag: "bg-blue-50",
      FileDigit: "bg-green-50",
      Globe: "bg-purple-50",
      Code: "bg-yellow-50",
      ShieldCheck: "bg-red-50",
      Wallet: "bg-emerald-50",
      Webhook: "bg-indigo-50",
      Coins: "bg-amber-50",
      TestTube: "bg-pink-50",
      Plus: "bg-gray-50",
      Heart: "bg-red-50",
      Users: "bg-blue-50",
      Download: "bg-purple-50",
      RefreshCw: "bg-green-50",
      File: "bg-gray-50",
      CreditCard: "bg-blue-50",
      Shield: "bg-green-50",
      FileText: "bg-yellow-50",
      Smartphone: "bg-purple-50",
    };

    return colorMap[iconName] || "bg-gray-50";
  };
  const moreFeatures = [
    {
      title: "Crypto Checkout",
      description: "Accept crypto instantly",
      icon: <CreditCard className="h-6 w-6 text-emerald-500" />,
      href: "/solutions/checkout",
      color: "bg-emerald-50",
    },
    {
      title: "Crypto Subscriptions",
      description: "Recurring crypto payments",
      icon: <RefreshCw className="h-6 w-6 text-blue-500" />,
      href: "/solutions/subscriptions",
      color: "bg-blue-50",
    },
    {
      title: "Buyer Protection",
      description: "Escrow for transparency",
      icon: <ShieldCheck className="h-6 w-6 text-amber-500" />,
      href: "/solutions/buyer-protection",
      color: "bg-amber-50",
    },
    {
      title: "Become a Partner",
      description: "Join our partner program",
      icon: <Users className="h-6 w-6 text-emerald-500" />,
      href: "/become-partner",
      color: "bg-emerald-50",
    },    {
      title: "Resources",
      description: "Helpful materials",
      icon: <FileText className="h-6 w-6 text-yellow-500" />,
      href: "/resources",
      color: "bg-yellow-50",
    },
    {
      title: "FAQ",
      description: "Frequently asked questions",
      icon: <HelpCircle className="h-6 w-6 text-pink-500" />,
      href: "/faq",
      color: "bg-pink-50",
    },
  ];

  const getFeatures = (menuName: string) => {
    switch (menuName) {
      case "Solutions":
        // If solutions data is available, use it
        if (solutions.length > 0) {
          return solutions.map((solution) => ({
            title: solution.title,
            description: solution.description,
            icon: getIconComponent(solution.icon),
            href: solution.link,
            color: getColorForIcon(solution.icon),
          }));
        }
        // Fallback to payment features if solutions data is not yet loaded
        return paymentFeatures;
      case "More":
        return moreFeatures;
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

      // Don't close if clicking inside mobile menu or on menu button
      if (
        isMenuOpen &&
        !target.closest("[data-menu-container]") &&
        !target.closest(".mobile-menu-container")
      ) {
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
      className={cn(
        "sticky top-0 z-50 border-b border-black/5 py-4 backdrop-blur-lg transition-all",
        isScrolled
          ? "!bg-white shadow-md backdrop-blur-sm dark:bg-gray-900/90"
          : "bg-emerald-900 dark:bg-gray-900",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                "group flex items-center text-2xl font-bold",
                isScrolled ? "text-gray-950" : "text-white",
              )}
            >
              <svg
                className="mr-2 h-8 w-8 transition-transform group-hover:scale-110"
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
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-emerald-400 transition-all group-hover:w-full"></span>
              </span>
            </Link>{" "}
            {/* Desktop Navigation */}
            <nav className="ml-10 hidden space-x-6 lg:flex">
              <NavItem
                href="/solutions"
                label="Solutions"
                hasDropdown
                isScrolled={isScrolled}
                setActiveMenu={setActiveMenu}
                activeMenu={activeMenu}
                getFeatures={getFeatures}
              />
              <NavItem
                href="/pricing"
                label="Pricing"
                isScrolled={isScrolled}
                setActiveMenu={setActiveMenu}
                activeMenu={activeMenu}
                getFeatures={getFeatures}
              />
              <NavItem
                href="/documentation"
                label="Documentation"
                isScrolled={isScrolled}
                setActiveMenu={setActiveMenu}
                activeMenu={activeMenu}
                getFeatures={getFeatures}
              />
              <NavItem
                href="#"
                label="More"
                hasDropdown
                isScrolled={isScrolled}
                setActiveMenu={setActiveMenu}
                activeMenu={activeMenu}
                getFeatures={getFeatures}
              />
            </nav>
          </div>{" "}
          {/* Desktop CTA Buttons */}
          <div className="hidden items-center space-x-4 lg:flex">
            {/* Contact Icon with Dropdown */}
            <div
              className="group relative"
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
                className={`flex items-center justify-center rounded-full p-2 ${
                  isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-emerald-800" }
                  transition-colors`}
                aria-label="Contact"
              >
                <MessageCircle className="h-5 w-5" />
              </button>{" "}
              {activeMenu === "Contact" && (
                <div
                  className="absolute right-0 z-10 mt-2 w-[500px] transform px-1 sm:px-0"
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
                  {" "}
                  <div className="overflow-hidden rounded-md border border-gray-100 bg-white shadow-md">
                    <div className="relative border-b border-gray-100 px-4 py-3">
                      <h3 className="text-sm font-bold text-gray-800">Get in Touch</h3>
                      <p className="text-xs text-gray-500">We're here to help with any questions</p>
                    </div>
                    <div className="p-3">
                      <div className="grid grid-cols-2 gap-3">
                        {socialFeatures.map((feature) => (
                          <Link
                            key={feature.title}
                            href={feature.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 transition-all hover:bg-gray-50"
                          >
                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-blue-500">
                              {feature.icon}
                            </div>
                            <div className="ml-3 flex-1">
                              <p className="flex items-center text-sm font-bold text-gray-700">
                                {feature.title}
                                <ExternalLink className="ml-1 h-3 w-3 text-gray-400" />
                              </p>
                              <p className="text-xs text-gray-500">{feature.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>{" "}
                      <div className="mt-2 border-t border-gray-100 pt-3">
                        <Link
                          href="/contact"
                          className="flex items-center rounded-md px-3 py-2 transition-all hover:bg-gray-50"
                        >
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-emerald-500">
                            <Mail className="h-6 w-6" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-bold text-gray-800">Contact Form</p>
                            <p className="text-xs text-gray-500">Send us a message directly</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>{" "}
            <Button variant="light">Login</Button>
            <Button className="text-gray-950">Register</Button>
          </div>{" "}
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden" data-menu-container>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className={`h-6 w-6 transition-transform ${isMenuOpen ? "rotate-90" : ""}`}
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
      </div>{" "}
      {/* Mobile Menu */}{" "}
      <div
        className={`mobile-menu-container fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden
          ${isMenuOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
        style={{ top: "64px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="container mx-auto max-h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden bg-white px-6 py-6
            shadow-xl transition-all dark:bg-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          {" "}
          <nav className="flex flex-col space-y-5">
            <MobileNavItem href="/solutions" label="Solutions" getFeatures={getFeatures} />
            <div className="py-1">
              <Link
                href="/pricing"
                className="flex w-full items-center justify-center rounded-md p-2 text-lg font-medium text-gray-800
                  transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <CreditCard className="mr-2 h-5 w-5 text-emerald-500" />
                Pricing
              </Link>
            </div>
            <div className="py-1">
              <Link
                href="/documentation"
                className="flex w-full items-center justify-center rounded-md p-2 text-lg font-medium text-gray-800
                  transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <BookOpen className="mr-2 h-5 w-5 text-emerald-500" />
                Documentation
              </Link>
            </div>
            <MobileNavItem href="#" label="More" isDropdown={true} getFeatures={getFeatures}>
              {" "}
              <div className="mt-2 grid grid-cols-1 gap-3">
                <Link
                  href="/become-partner"
                  className="flex items-center rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100
                    dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Users className="mr-2 h-4 w-4 text-emerald-500" />
                  Become a Partner
                </Link>
                <Link
                  href="/resources"
                  className="flex items-center rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100
                    dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FileText className="mr-2 h-4 w-4 text-emerald-500" />
                  Resources
                </Link>
                <Link
                  href="/faq"
                  className="flex items-center rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100
                    dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <HelpCircle className="mr-2 h-4 w-4 text-emerald-500" />
                  FAQ
                </Link>
              </div>
            </MobileNavItem>
            <MobileNavItem href="/contact" label="Contact" getFeatures={getFeatures} />{" "}
            <div
              className="space-y-4 border-t border-gray-100 pt-6 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400
                    dark:text-emerald-400 dark:hover:bg-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  Login
                </Button>{" "}
                <Button
                  className="flex-1 bg-emerald-500 py-3 text-gray-950 hover:bg-emerald-600 dark:bg-emerald-600
                    dark:hover:bg-emerald-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  Register
                </Button>
              </div>
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
}) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navItemRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    left: "50%",
    transform: "translateX(-50%)",
  });

  // Calculate dropdown position to prevent off-screen issues
  const calculatePosition = () => {
    if (!navItemRef.current) return;

    const navItemRect = navItemRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const dropdownWidth = Math.min(1024, viewportWidth - 32); // max-w-4xl approximation with padding

    // Calculate how much the dropdown would overflow on the left
    const leftOverflow = Math.max(0, dropdownWidth / 2 - navItemRect.left);

    if (leftOverflow > 0) {
      // Adjust position to prevent left overflow
      setDropdownPosition({
        left: `calc(50% + ${leftOverflow}px)`,
        transform: "translateX(-50%)",
      });
    } else {
      // Default centered position
      setDropdownPosition({
        left: "50%",
        transform: "translateX(-50%)",
      });
    }
  };

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
      calculatePosition();
    }
  };
  // Recalculate position on window resize
  useEffect(() => {
    const handleResize = () => {
      if (activeMenu === label) {
        calculatePosition();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeMenu, label]);
  return (
    <div
      className="relative"
      ref={navItemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className={`${isScrolled ? "hover:bg-gray-100" : "hover:bg-emerald-950"}
          ${isScrolled ? "text-gray-950" : "text-white"} rounded-xl px-3 py-1 font-outfit font-semibold
          ${isScrolled ? "hover:text-gray-950" : "hover:text-white"} flex items-center transition-colors
          dark:text-gray-300 dark:hover:text-white`}
      >
        {label ? (
          <>
            {label}
            {hasDropdown && <ChevronDown className="ml-1 h-4 w-4 transition-transform" />}
          </>
        ) : (
          children && React.Children.toArray(children)[0]
        )}{" "}
      </Link>{" "}
      {hasDropdown && activeMenu === label && (
        <div
          className={`absolute z-10 mt-2 px-1 sm:px-0 ${
          label === "Contact"
              ? "right-0 w-[500px]"
              : label === "More"
                ? "right-0 w-[300px]"
                : "w-screen max-w-[400px]"
          }`}
          style={
            label !== "Contact" && label !== "More"
              ? {
                  left: dropdownPosition.left,
                  transform: dropdownPosition.transform,
                }
              : undefined
          }
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-md border border-gray-100 bg-white shadow-md">
            {label === "Contact" ? (
              <>
                <div className="relative border-b border-gray-100 px-4 py-3">
                  <h3 className="text-sm font-bold text-gray-800">Get in Touch</h3>
                  <p className="text-xs text-gray-500">We're here to help with any questions</p>
                </div>
                <div className="p-2">
                  <div className="grid grid-cols-2 gap-2">
                    {getFeatures &&
                      getFeatures(label).map((feature) => (
                        <Link
                          key={feature.title}
                          href={feature.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center rounded-md px-3 py-2 transition-all hover:bg-gray-50"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center">
                            {feature.icon}
                          </div>
                          <div className="ml-3 flex-1">
                            <p className="flex items-center text-sm font-bold text-gray-800">
                              {feature.title}
                              <ExternalLink className="ml-1 h-3 w-3 text-gray-400" />
                            </p>
                            <p className="text-xs text-gray-500">{feature.description}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                  <div className="mt-1 border-t border-gray-100 pt-2">
                    <Link
                      href="/contact"
                      className="flex items-center rounded-md px-3 py-2 transition-all hover:bg-gray-50"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-emerald-500">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-bold text-gray-800">Contact Form</p>
                        <p className="text-xs text-gray-500">Send us a message directly</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative py-2">
                  {getFeatures &&
                    getFeatures(label || "").map((feature) => (
                      <Link
                        key={feature.title}
                        href={feature.href}
                        className={`flex items-start rounded-md transition-all hover:bg-gray-50
                          ${label === "More" ? "mx-1 px-2 py-2" : "mx-2 px-4 py-3"}`}
                      >
                        <div
                          className={`flex flex-shrink-0 items-center justify-center pt-0.5
                            ${label === "More" ? "h-5 w-5 text-inherit" : "h-8 w-8"}`}
                        >
                          {feature.icon}
                        </div>
                        <div className={`ml-3 flex-1 ${label === "More" ? "min-w-0" : ""}`}>
                          <p className="text-sm font-bold text-gray-800">{feature.title}</p>
                          <p
                            className={`text-gray-500 ${label === "More" ? "text-[10px]" : "text-xs"}`}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>{" "}
                {label === "More" && (
                  <div className="border-t border-gray-100 bg-gray-50 px-2 py-1.5">
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-bold text-gray-800">Ready to get started?</p>
                      <Button
                        size="sm"
                        className="w-full bg-[#E3FE53] py-0.5 text-xs text-gray-900 hover:bg-[#d5ef4a]"
                      >
                        Get free access
                      </Button>
                    </div>
                  </div>
                )}
                {label !== "More" && (
                  <div className="border-t border-gray-100 bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-gray-800">Ready to get started?</p>
                      <Button
                        size="sm"
                        className="bg-emerald-500 px-3 text-xs text-white hover:bg-emerald-600"
                      >
                        Get free access
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
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
  getFeatures,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isDropdown?: boolean;
  children?: React.ReactNode;
  getFeatures?: (menuName: string) => any[];
}) {
  const handleBlockClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Special case for dropdown items with features
  if (label === "Solutions" || label === "Contact") {
    const features = getFeatures ? getFeatures(label) : [];
    return (
      <div className="space-y-3 rounded-lg" onClick={handleBlockClick}>
        <div className="flex items-center justify-center">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>{" "}
            <div className="mx-3 flex items-center text-lg font-medium text-gray-800 dark:text-white">
              {icon}
              {label}
            </div>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>{" "}
        <div className="mt-3 grid grid-cols-1 gap-3 overflow-x-hidden sm:grid-cols-2">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              target={feature.href.startsWith("http") ? "_blank" : undefined}
              rel={feature.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center rounded-md p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-emerald-600
                  dark:text-emerald-400"
              >
                {feature.icon}
              </span>{" "}
              <div className="min-w-0 flex-1">
                <div className="overflow-hidden text-ellipsis whitespace-nowrap font-bold text-gray-800 dark:text-white">
                  {feature.title}
                </div>
                <div className="overflow-hidden text-ellipsis text-xs text-gray-500 dark:text-gray-300">
                  {feature.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div
          className="mt-4 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700
            dark:bg-gray-700/50"
        >
          <div className="text-sm font-medium text-gray-800 dark:text-white">
            Ready to get started?
          </div>
          <div className="mt-2 flex justify-center">
            {" "}
            <Button
              className="w-full bg-emerald-500 px-3 py-2 text-sm text-gray-950 hover:bg-emerald-600 dark:bg-emerald-600
                dark:hover:bg-emerald-700"
            >
              Get free access
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Case for dropdown items
  if (isDropdown) {
    return (
      <div className="space-y-3 overflow-x-hidden" onClick={handleBlockClick}>
        <div className="flex items-center justify-center">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>{" "}
            <div className="mx-3 flex items-center text-lg font-medium text-gray-800 dark:text-white">
              {icon}
              <span className="truncate">{label}</span>
            </div>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>{" "}
        <div className="overflow-x-hidden" onClick={handleBlockClick}>
          {children}
        </div>
      </div>
    );
  }
  // Default case for other menu items
  return (
    <div className="py-1">
      <Link
        href={href}
        className="flex w-full items-center justify-center rounded-md p-2 text-lg font-medium text-gray-800
          transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {icon && <span className="mr-2 text-emerald-500">{icon}</span>}
        {label}
      </Link>
    </div>
  );
}
