"use client"

import { Check, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const FEATURES = [
  "Superfast API + Sandbox mode",
  "Only 0.5% transaction fee",
  "No chargebacks ever",
  "Self-hosted wallet support"
]

const CODE_SNIPPETS = {
  curl: `curl -X POST https://bitmopay.com/api/prepare \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 100,
    "currency": "EUR",
    "customerId": "user_1234"
  }'`,

  node: `const res = await fetch('https://bitmopay.com/api/prepare', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 100,
    currency: 'EUR',
    customerId: 'user_1234'
  })
})
const data = await res.json()
console.log(data.redirectUrl)`,

  python: `import requests

res = requests.post('https://bitmopay.com/api/prepare',
  headers={
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  json={
    'amount': 100,
    'currency': 'EUR',
    'customerId': 'user_1234'
  })

print(res.json()['redirectUrl'])`,

  php: `<?php
$ch = curl_init('https://bitmopay.com/api/prepare');
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
  ],
  CURLOPT_POSTFIELDS => json_encode([
    'amount' => 100,
    'currency' => 'EUR',
    'customerId' => 'user_1234'
  ])
]);
$response = curl_exec($ch);
curl_close($ch);
echo json_decode($response)->redirectUrl;`
}

export function SandboxSection() {
  return (
      <section className="py-20 bg-white border-t">
        <div className="container bg-secondary rounded-xl p-6 grid md:grid-cols-2 gap-12 items-center">
          <div className=" text-gray-900">
            <h2 className="text-4xl font-bold mb-4">Try Bitmopay in seconds</h2>
            <p className="text-muted-foreground mb-6 max-w-lg">
              Experience our API without registration. Just paste your key and simulate a crypto payment flow instantly.
            </p>
            <ul className="space-y-3 mb-6">
              {FEATURES.map((text, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{text}</span>
                  </li>
              ))}
            </ul>
            <Button size="lg">Open Test Console</Button>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 text-white">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              <span className="ml-2">API Request Example</span>
            </div>
            <Tabs defaultValue="node" className="text-sm">
              <TabsList className="mb-4 bg-gray-800">
                <TabsTrigger value="curl">cURL</TabsTrigger>
                <TabsTrigger value="node">Node.js</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="php">PHP</TabsTrigger>
              </TabsList>
              {Object.entries(CODE_SNIPPETS).map(([key, code]) => (
                  <TabsContent key={key} value={key}>
                <pre className="overflow-x-auto whitespace-pre-wrap text-xs bg-gray-800 p-4 rounded-md border border-gray-700">
                  <code>{code}</code>
                </pre>
                  </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
  )
}