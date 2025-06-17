// We'll use icon names as strings and render them in the component
export interface ResourceCategory {
  title: string;
  description: string;
  iconName: string; // Name of the Lucide icon
  href: string;
  color: string;
  badge?: string;
}

export const resourceCategories: ResourceCategory[] = [
  {
    title: "Guides & Tutorials",
    description: "Step-by-step guides on integrating Bitmopay into your business",
    iconName: "BookOpen",
    href: "/resources/guides",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    badge: "Popular",
  },
  {
    title: "API Documentation",
    description: "Complete API reference for developers",
    iconName: "Code",
    href: "/documentation/api",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
  },
  {
    title: "Integration Samples",
    description: "Code samples for popular platforms and frameworks",
    iconName: "FileText",
    href: "/resources/integration-samples",
    color: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300",
  },
  {
    title: "Video Tutorials",
    description: "Video walkthroughs for Bitmopay features and integrations",
    iconName: "Video",
    href: "/resources/videos",
    color: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
  },
  {
    title: "FAQs",
    description: "Frequently asked questions about Bitmopay services",
    iconName: "FileQuestion",
    href: "/resources/faqs",
    color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
  },
  {
    title: "Case Studies",
    description: "Real-world examples of successful Bitmopay implementations",
    iconName: "PieChart",
    href: "/resources/case-studies",
    color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300",
    badge: "New",
  },
  {
    title: "Blog Articles",
    description: "Latest insights and news about cryptocurrency payments",
    iconName: "Newspaper",
    href: "/blogs",
    color: "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300",
  },
  {
    title: "Learning Center",
    description: "Educational resources about crypto payments for businesses",
    iconName: "GraduationCap",
    href: "/resources/learning-center",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
  },
];
