import { FooterSection } from "@/components/sections/footer-section";
import { HeaderSection } from "@/components/sections/header-section";
import { ScrollToTopButton } from "@/components/shared/scroll-to-top";
import { AuthProvider } from "@/components/auth-provider";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <AuthProvider>
      <div className="flex min-h-svh flex-col">
        <HeaderSection />
        <main className="grow">{children}</main>
        <FooterSection />
        <ScrollToTopButton />
      </div>
    </AuthProvider>
  );
}
