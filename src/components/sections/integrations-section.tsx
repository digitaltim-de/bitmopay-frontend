import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "../shared/section";

export function IntegrationsSection() {
  const integrations = [
    {
      name: "REST API",
      icon: "/api-logo.png",
      ready: true,
      link: "/docs/api",
      label: "View Docs",
    },
    {
      name: "Node.js SDK",
      icon: "/nodejs-logo.png",
      ready: true,
      link: "/npm/bitmopay-sdk",
      label: "View Package",
    },
    {
      name: "Shopify",
      icon: "/shopify-logo.png",
      ready: false,
    },
    {
      name: "WooCommerce",
      icon: "/woocommerce-logo.png",
      ready: false,
    },
    {
      name: "WHMCS",
      icon: "/whmcs-logo.png",
      ready: false,
    },
    {
      name: "PrestaShop",
      icon: "/prestashop-logo.png",
      ready: false,
    },
    {
      name: "Zapier",
      icon: "/zapier-logo.png",
      ready: false,
    },
  ];

  return (
    <Section className="bg-white">
      <div className="mb-12 text-center">
        <h2 className="title">Integrations for Developers & Shops</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Bitmopay offers a flexible REST API and ready-made integrations for popular platforms.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {integrations.map((integration) => (
          <div key={integration.name} className="w-40 text-center">
            <div className="mb-3">
              <Image
                src={integration.icon}
                alt={integration.name}
                width={40}
                height={40}
                className="mx-auto"
              />
            </div>
            <div className="mb-2 text-sm font-medium">{integration.name}</div>
            {integration.ready ? (
              <Button variant="outline" size="sm" className="text-xs" asChild>
                <a href={integration.link} target="_blank" rel="noopener noreferrer">
                  {integration.label}
                </a>
              </Button>
            ) : (
              <span className="text-xs text-gray-400">Coming soon</span>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
