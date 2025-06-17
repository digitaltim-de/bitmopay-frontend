import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function HeroLayout({ className, children }: Props) {
  return <section className={cn("py-16", className)}>{children}</section>;
}
