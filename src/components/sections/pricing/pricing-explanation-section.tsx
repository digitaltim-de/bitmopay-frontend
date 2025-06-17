"use client";

import { Section } from "@/components/shared/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PricingExplanationSection() {
  return (
    <Section className="bg-gray-50 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Pricing Card Box */}
        <div className="flex flex-col">
          <Card className="flex-1 shadow-lg border-emerald-100 dark:border-emerald-800">
            <CardHeader className="pb-4">
              <div className="mb-2">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300">
                  First 30 days free
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
                0.5% Transaction Fee
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 text-lg mt-2">
                Simple pricing with no hidden fees or surprises
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 rounded-full bg-emerald-100 p-1 dark:bg-emerald-800">
                    <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">No setup fees</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 rounded-full bg-emerald-100 p-1 dark:bg-emerald-800">
                    <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">No monthly costs</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 rounded-full bg-emerald-100 p-1 dark:bg-emerald-800">
                    <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Paid out in crypto</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 rounded-full bg-emerald-100 p-1 dark:bg-emerald-800">
                    <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Cancel anytime</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Comparison Box */}
        <div className="flex flex-col">
          <Card className="flex-1 bg-secondary border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                Bitmopay vs others
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                See how we compare to traditional payment gateways
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Feature</th>
                      <th className="py-3 text-left text-sm font-medium text-emerald-600 dark:text-emerald-400">Bitmopay</th>
                      <th className="py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Traditional Gateway</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">Setup fee</td>
                      <td className="py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          None
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">$50-$300</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">Recurring fee</td>
                      <td className="py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          None
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">$25-$100/month</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">Transaction fee</td>
                      <td className="py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">0.5%</td>
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">2.9% + $0.30</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">Crypto payouts</td>
                      <td className="py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          Yes
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">No</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">Chargebacks</td>
                      <td className="py-3 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                        <div className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          None
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-700 dark:text-gray-300">Yes + fees</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}