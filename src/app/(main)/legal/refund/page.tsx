import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Refund Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
        <p className="mb-4">
          This Refund Policy outlines the terms and conditions for refunds related to services provided by Bitmopay. We strive to ensure complete satisfaction with our services, but we understand that there may be instances where a refund is necessary.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">2. Company Information</h2>
        <p className="mb-4">
          Bitmopay is operated by SOCOFT DİJİTAL MEDYA HİZMETLERİ LİMİTED ŞİRKETİ, a company registered in Turkey.
        </p>
        <p className="mb-4">
          <strong>Registered Address:</strong><br />
          SOCOFT DİJİTAL MEDYA HİZMETLERİ LİMİTED ŞİRKETİ<br />
          Ataköy Towers, B Blok<br />
          Ataköy 7-8-9-10. Kısım Mah.<br />
          Çobançeşme E-5 Yanyol Cad. Kat 11 D:128<br />
          34158 Bakırköy / İstanbul, Turkey
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. Refund Eligibility</h2>
        <p className="mb-4">
          Refunds may be issued in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Service unavailability: If our service is unavailable for an extended period (more than 24 hours) due to technical issues on our end.</li>
          <li>Duplicate charges: If you were charged multiple times for the same transaction.</li>
          <li>Unauthorized charges: If you discover charges that you did not authorize.</li>
          <li>Service not as described: If the service provided significantly differs from what was advertised.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">4. Non-Refundable Items</h2>
        <p className="mb-4">
          The following are generally not eligible for refunds:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Transaction fees for completed cryptocurrency transactions.</li>
          <li>Service fees for services that have been fully delivered.</li>
          <li>Subscription fees after the refund request period (see below).</li>
          <li>Any services where the Terms of Service specifically state they are non-refundable.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">5. Refund Request Period</h2>
        <p className="mb-4">
          Refund requests must be submitted within the following timeframes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>For subscription services: Within 14 days of the initial subscription or renewal date.</li>
          <li>For one-time services: Within 30 days of the purchase date.</li>
          <li>For unauthorized charges: As soon as discovered, but no later than 60 days from the date of the charge.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">6. Refund Process</h2>
        <p className="mb-4">
          To request a refund, please follow these steps:
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li>Contact our customer support team at <a href="mailto:support@bitmopay.com" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">support@bitmopay.com</a>.</li>
          <li>Provide your account information, transaction details, and the reason for the refund request.</li>
          <li>Our team will review your request and respond within 5 business days.</li>
          <li>If approved, the refund will be processed within 10 business days.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">7. Refund Methods</h2>
        <p className="mb-4">
          Refunds will be issued using the original payment method when possible:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Credit/debit card payments will be refunded to the same card.</li>
          <li>Cryptocurrency payments will be refunded in the same cryptocurrency at the current market rate, or in an equivalent stablecoin at our discretion.</li>
          <li>Bank transfers will be refunded to the originating bank account.</li>
        </ul>
        <p className="mb-4">
          Please note that processing times for refunds vary depending on the payment method and may take up to 10 business days to appear in your account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">8. Partial Refunds</h2>
        <p className="mb-4">
          In some cases, we may issue partial refunds:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>For subscription services, we may prorate the refund based on the unused portion of the service.</li>
          <li>For services that were partially delivered or used.</li>
          <li>When only part of an order is eligible for a refund.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">9. Changes to This Refund Policy</h2>
        <p className="mb-4">
          We may update this Refund Policy from time to time. We will notify you of any changes by posting the new Refund Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">10. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Refund Policy, please contact us at:
        </p>
        <p className="mb-4">
          <a href="mailto:support@bitmopay.com" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
            support@bitmopay.com
          </a>
        </p>
      </div>
      
      <ScrollToTopButton />
    </div>
  );
}