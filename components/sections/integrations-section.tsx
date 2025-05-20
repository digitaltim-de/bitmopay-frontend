import Image from "next/image";
import { Button } from "@/components/ui/button";

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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Integrations for Developers & Shops</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bitmopay offers a flexible REST API and ready-made integrations for popular platforms.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {integrations.map((integration) => (
                <div key={integration.name} className="text-center w-40">
                  <div className="mb-3">
                    <Image
                        src={integration.icon}
                        alt={integration.name}
                        width={40}
                        height={40}
                        className="mx-auto"
                    />
                  </div>
                  <div className="font-medium text-sm mb-2">{integration.name}</div>
                  {integration.ready ? (
                      <Button
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          asChild
                      >
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
        </div>
      </section>
  );
}
