import {
  Home,
  CreditCard,
  Repeat,
  Users,
  BarChart,
  Wallet,
  CircleDollarSign,
  Settings,
  FileText,
  HelpCircle,
} from "lucide-react";

export interface SidebarLink {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  isActive?: boolean;
}

export interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

export const sidebarLinks: SidebarSection[] = [
  {
    title: "Main",
    links: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: Home,
        isActive: true,
      },
      {
        title: "Payments",
        href: "/dashboard/payments",
        icon: CreditCard,
      },
      {
        title: "Subscriptions",
        href: "/dashboard/subscriptions",
        icon: Repeat,
      },
      {
        title: "Customers",
        href: "/dashboard/customers",
        icon: Users,
      },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart,
      },
      {
        title: "Wallets",
        href: "/dashboard/wallets",
        icon: Wallet,
      },
      {
        title: "Payouts",
        href: "/dashboard/payouts",
        icon: CircleDollarSign,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Documentation",
        href: "/dashboard/documentation",
        icon: FileText,
      },
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
      {
        title: "Help & Support",
        href: "/dashboard/support",
        icon: HelpCircle,
      },
    ],
  },
];