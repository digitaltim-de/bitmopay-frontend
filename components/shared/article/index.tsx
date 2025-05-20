import { cn } from "@/lib/utils";

type Props = { children: React.ReactNode; className?: string };

export function Article({ children, className }: Props) {
  return (
    <article
      className={cn(
        "prose prose-xl dark:prose-invert container py-10",
        className,
      )}
    >
      {children}
    </article>
  );
}
