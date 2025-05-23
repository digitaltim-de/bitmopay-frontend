import { FooterSection } from "@/components/sections/footer-section";
import { HeaderSection } from "@/components/sections/header-section";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-svh">
      <HeaderSection />
      <main className="grow">{children}</main>
      <FooterSection />
    </div>
  );
}
