import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Integration } from "@/lib/types"

interface IntegrationsSectionProps {
  integrations: Integration[]
}

export function IntegrationsSection({ integrations }: IntegrationsSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Integrations for Shop Systems</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Seamless integration with the most popular e-commerce platforms and shop systems.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {integrations.map((integration) => (
            <div key={integration.name} className="text-center">
              <Image
                src={integration.icon || "/placeholder.svg"}
                alt={integration.name}
                width={40}
                height={40}
                className="mx-auto mb-3"
              />
              <div className="text-sm font-medium mb-2">{integration.name}</div>
              <Button variant="outline" size="sm" className="text-xs">
                Download Plugin
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
