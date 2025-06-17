import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
        <p className="mb-4">
          At Bitmopay, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
        </p>
        <p className="mb-4">
          By using Bitmopay, you consent to the data practices described in this policy.
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

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. Information We Collect</h2>
        <p className="mb-4">
          We collect several types of information from and about users of our website, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal identifiers such as name, email address, and phone number</li>
          <li>Business information such as company name and address</li>
          <li>Financial information necessary for payment processing</li>
          <li>Technical data such as IP address, browser type, and device information</li>
          <li>Usage data about how you interact with our website and services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">4. How We Collect Your Information</h2>
        <p className="mb-4">
          We collect information directly from you when you:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Register for an account</li>
          <li>Use our payment processing services</li>
          <li>Contact our customer support</li>
          <li>Subscribe to our newsletter</li>
          <li>Respond to surveys or fill out forms</li>
        </ul>
        <p className="mb-4">
          We also collect information automatically through cookies and similar technologies. Please see our Cookie Policy for more information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">5. How We Use Your Information</h2>
        <p className="mb-4">
          We use your information for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide and maintain our services</li>
          <li>To process transactions and send related information</li>
          <li>To verify your identity and prevent fraud</li>
          <li>To respond to your requests and inquiries</li>
          <li>To improve our website and services</li>
          <li>To send promotional communications, if you have opted in</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">6. Data Sharing and Disclosure</h2>
        <p className="mb-4">
          We may share your information with:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Service providers who perform services on our behalf</li>
          <li>Financial institutions necessary for payment processing</li>
          <li>Legal authorities when required by law</li>
          <li>Business partners with your consent</li>
        </ul>
        <p className="mb-4">
          We do not sell your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">7. Data Security</h2>
        <p className="mb-4">
          We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">8. Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Right to access your personal data</li>
          <li>Right to rectify inaccurate data</li>
          <li>Right to erasure (right to be forgotten)</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us using the information provided at the end of this policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">9. International Data Transfers</h2>
        <p className="mb-4">
          Your information may be transferred to and processed in countries other than the one in which you reside. We ensure appropriate safeguards are in place to protect your information when transferred internationally.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">10. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">11. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mb-4">
          <a href="mailto:privacy@bitmopay.com" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
            privacy@bitmopay.com
          </a>
        </p>
      </div>
      
      <ScrollToTopButton />
    </div>
  );
}