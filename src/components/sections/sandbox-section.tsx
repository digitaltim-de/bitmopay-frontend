"use client";

import { useState } from "react";
import { Check, Code2, Terminal, Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Section } from "../shared/section";

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
];

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
};

export function SandboxSection() {
  const [activeTab, setActiveTab] = useState("node");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab as keyof typeof CODE_SNIPPETS]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section className="bg-gray">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-2">
              <div className="rounded-lg bg-emerald-50 p-2 dark:bg-emerald-900/20">
                <Terminal className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Developer API
              </span>
            </div>

            <h2 className="title !text-4xl">Try Bitmopay in seconds</h2>

            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Experience our API without registration. Just paste your key and simulate a crypto
              payment flow instantly.
            </p>

            <div className="mb-8 space-y-6">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{feature.text}</p>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="group bg-emerald-600 hover:bg-emerald-700">
              Open Implementation Documentation
              <Code2 className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </motion.div>

          {/* Right column - Code */}
          <div className="rounded-xl bg-gray-900 p-6 text-white">
            <div className="mb-4 flex items-center gap-2 text-xs text-gray-400">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
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
                  <pre className="overflow-x-auto whitespace-pre-wrap rounded-md border border-gray-700 bg-gray-800 p-4 text-xs">
                    <code>{code}</code>
                  </pre>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </Section>
  );
}
