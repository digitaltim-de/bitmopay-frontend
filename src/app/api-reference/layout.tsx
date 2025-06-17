import { AuthProvider } from "@/components/auth-provider";

interface Props {
  children: React.ReactNode;
}

export default function ApiReferenceLayout({ children }: Props) {
  return (
    <AuthProvider>
      <div className="flex min-h-svh flex-col">
        <main className="grow">{children}</main>
      </div>
    </AuthProvider>
  );
}
