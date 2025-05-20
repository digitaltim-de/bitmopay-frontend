import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SandboxSection() {
  const features = [
    "Schnelle API + Sandbox",
    "Niedrige Gebühren (nur 0.5%)",
    "Kein Chargeback-Risiko",
    "Self-Hosted Wallet Option",
  ]

  const codeExample = `// Create a payment request
const response = await fetch('https://api.bitmopay.com/v1/payment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    amount: 100.00,
    currency: 'EUR',
    description: 'Order #1234',
    redirect_url: 'https://yourstore.com/success',
    webhook_url: 'https://yourstore.com/webhook'
  })
});

const data = await response.json();
console.log(data.payment_url);`

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Demo & Sandbox</h2>
            <p className="text-gray-500 mb-6">
              Testen Sie unsere API direkt im Browser und erleben Sie, wie einfach die Integration ist.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700">API testen</Button>
          </div>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>API Request</span>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
