"use client";

import { Section } from "@/components/shared/section";
import HeadTitle from "@/components/shared/head-title";

export const EarningPotentialSection = () => {
  const earningExamples = [
    {
      merchants: "1 Merchant",
      volume: "€25,000",
      commission: "€125.00",
    },
    {
      merchants: "10 Merchants",
      volume: "€250,000",
      commission: "€1,250.00",
    },
    {
      merchants: "50 Merchants",
      volume: "€1,250,000",
      commission: "€6,250.00",
    },
  ];

  return (
    <Section className="bg-gray-50 dark:bg-gray-800">
      <HeadTitle
        title="Earning Potential"
        subtitle="See how much you can earn with the Bitmopay Partner Program"
        htype="h2"
      />
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
          <h3 className="mb-4 text-xl font-semibold">Monthly Transaction Volume Example</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left">Number of Merchants</th>
                  <th className="pb-3 text-left">Monthly Volume</th>
                  <th className="pb-3 text-left">Your Monthly Commission</th>
                </tr>
              </thead>
              <tbody>
                {earningExamples.map((example, index) => (
                  <tr key={index} className={index < earningExamples.length - 1 ? "border-b" : ""}>
                    <td className="py-3">{example.merchants}</td>
                    <td className="py-3">{example.volume}</td>
                    <td className="py-3 font-medium text-emerald-600">{example.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            *Based on an average monthly transaction volume of €25,000 per merchant and 0.5%
            commission rate during the first year.
          </p>
        </div>
      </div>
    </Section>
  );
};
