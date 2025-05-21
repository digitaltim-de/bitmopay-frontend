"use client"

import { useState } from "react"
import { Check, Code2, Terminal, Copy, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const FEATURES = [
  {
    text: "Superfast API + Sandbox mode",
    description: "Test transactions without real funds",
  },
  {
    text: "Only 0.5% transaction fee",
    description: "Industry-leading low rates",
  },
  {
    text: "No chargebacks ever",
    description: "Blockchain-secured transactions",
  },
  {
    text: "Self-hosted wallet support",
    description: "Maintain full control of your funds",
  },
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
echo json_decode($response)->redirectUrl;`,
}

export function SandboxSection() {
  const [activeTab, setActiveTab] = useState("node")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab as keyof typeof CODE_SNIPPETS])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left column - Content */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Developer API</span>
                </div>

                <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Try Bitmopay in seconds</h2>

                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Experience our API without registration. Just paste your key and simulate a crypto payment flow
                  instantly.
                </p>

                <div className="space-y-6 mb-8">
                  {FEATURES.map((feature, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{feature.text}</p>
                          <p className="text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                  ))}
                </div>

                <Button size="lg" className="group bg-emerald-600 hover:bg-emerald-700">
                  Open Implementation Documentation
                  <Code2 className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </motion.div>

              {/* Right column - Code */}
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
          </div>
        </div>
      </section>
  )
}
