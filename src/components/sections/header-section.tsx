"use client";

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
      description:
        "Vernetzen Sie sich beruflich und bleiben Sie über Karrieremöglichkeiten informiert.",
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
            </Link>

            {/* Desktop Navigation */}
            <nav className="ml-10 hidden space-x-6 md:flex">
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
                href="/become-partner"
                label="Become a Partner"
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
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center space-x-4 md:flex">
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
              </button>

              {activeMenu === "Contact" && (
                <div
                  className="absolute right-0 z-10 mt-3 w-[680px] transform px-2 sm:px-0"
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
                        <p className="text-sm text-gray-500">
                          We're here to help with any questions
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {socialFeatures.map((feature) => (
                          <Link
                            key={feature.title}
                            href={feature.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
                          >
                            <div
                              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md ${feature.color}`}
                            >
                              {feature.icon}
                            </div>
                            <div className="ml-4">
                              <p className="flex items-center text-sm font-medium text-gray-900">
                                {feature.title}
                                <ExternalLink className="ml-1 h-3 w-3 text-gray-400" />
                              </p>
                              <p className="mt-1 text-xs text-gray-500">{feature.description}</p>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/contact"
                          className="col-span-2 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50"
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

            <Button variant="light">Login</Button>
            <Button>Register</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden" data-menu-container>
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
        className={`mobile-menu-container fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden
          ${isMenuOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
        style={{ top: "64px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="container mx-auto max-h-[calc(100vh-64px)] overflow-y-auto overflow-x-hidden bg-white px-6 py-6
            shadow-xl transition-all dark:bg-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col space-y-5">
            <MobileNavItem href="/solutions" label="Solutions" getFeatures={getFeatures} />
            <MobileNavItem href="/pricing" label="Pricing" getFeatures={getFeatures} />
            <MobileNavItem
              href="/become-partner"
              label="Become a Partner"
              getFeatures={getFeatures}
            />
            <MobileNavItem href="/documentation" label="Documentation" getFeatures={getFeatures} />
            <MobileNavItem href="#" label="More" isDropdown={true} getFeatures={getFeatures}>
              {" "}
              <div className="mt-2 grid grid-cols-1 gap-3">
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
                  href="/docs"
                  className="flex items-center rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100
                    dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <BookOpen className="mr-2 h-4 w-4 text-emerald-500" />
                  Documentation
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
                </Button>
                <Button
                  className="flex-1 bg-emerald-500 py-3 text-white hover:bg-emerald-600 dark:bg-emerald-600
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
        )}
      </Link>
      {hasDropdown && activeMenu === label && (
        <div
          className="absolute z-10 mt-3 w-screen max-w-4xl px-2 sm:px-0"
          style={{
            left: dropdownPosition.left,
            transform: dropdownPosition.transform,
          }}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="relative grid grid-cols-3 gap-6 bg-white p-6 sm:gap-8 sm:p-8">
              {getFeatures(label || "").map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className={`-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50
                  ${feature.color}`}
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
                    <Button className="bg-blue-500 hover:bg-blue-600">Get free access</Button>
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
  }; // Special case for dropdown items with features
  if (label === "Solutions" || label === "Contact") {
    const features = getFeatures ? getFeatures(label) : [];
    return (
      <div className="space-y-3 rounded-lg" onClick={handleBlockClick}>
        <div className="flex items-center text-lg font-medium text-gray-800 dark:text-white">
          {icon}
          {label}
          <ChevronDown className="ml-1 h-4 w-4 text-emerald-500" />
        </div>
        <div className="mt-3 grid grid-cols-1 gap-4 overflow-x-hidden pl-4 sm:grid-cols-2">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              target={feature.href.startsWith("http") ? "_blank" : undefined}
              rel={feature.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center rounded-md p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-emerald-100
                  text-emerald-600 dark:bg-gray-700 dark:text-emerald-400"
              >
                {feature.icon}
              </span>
              <div className="min-w-0 flex-1">
                <div className="overflow-hidden text-ellipsis whitespace-nowrap font-medium text-gray-800 dark:text-white">
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
            <Button
              className="w-full bg-emerald-500 px-3 py-2 text-sm text-white hover:bg-emerald-600 dark:bg-emerald-600
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
        <div className="flex items-center text-lg font-medium text-gray-800 dark:text-white">
          {icon}
          <span className="truncate">{label}</span>
          <ChevronDown className="ml-1 h-4 w-4 flex-shrink-0 text-emerald-500" />
        </div>
        <div className="overflow-x-hidden pl-4" onClick={handleBlockClick}>
          {children}
        </div>
      </div>
    );
  }

  // Default case for other menu items
  return (
    <Link
      href={href}
      className="flex items-center rounded-md p-2 text-lg font-medium text-gray-800 transition-colors
        hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      onClick={(e) => e.stopPropagation()}
    >
      {icon && <span className="mr-3 text-emerald-500">{icon}</span>}
      {label}
    </Link>
  );
}
