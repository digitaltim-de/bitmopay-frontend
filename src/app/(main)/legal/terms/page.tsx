import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Bitmopay. These Terms of Service govern your use of our website, products, and services.
        </p>
        <p className="mb-4">
          By accessing or using Bitmopay, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
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

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. Services</h2>
        <p className="mb-4">
          Bitmopay provides cryptocurrency payment processing services that allow merchants to accept cryptocurrency payments from their customers.
        </p>
        <p className="mb-4">
          We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">4. User Accounts</h2>
        <p className="mb-4">
          When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding your account credentials and for any activities that occur under your account.
        </p>
        <p className="mb-4">
          You must notify us immediately of any unauthorized use of your account or any other breach of security.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">5. Payment Processing</h2>
        <p className="mb-4">
          By using our payment processing services, you agree to comply with all applicable laws and regulations, including anti-money laundering and counter-terrorist financing regulations.
        </p>
        <p className="mb-4">
          We may refuse to process transactions that we believe may violate these Terms or applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">6. Fees</h2>
        <p className="mb-4">
          We charge fees for our services as described on our website. We reserve the right to change our fees at any time with notice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">7. Intellectual Property</h2>
        <p className="mb-4">
          The Bitmopay website, logo, and all content, features, and functionality are owned by SOCOFT DİJİTAL MEDYA HİZMETLERİ LİMİTED ŞİRKETİ and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">8. Limitation of Liability</h2>
        <p className="mb-4">
          To the maximum extent permitted by law, Bitmopay shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">9. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws of Turkey, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">10. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the date at the top of these Terms and by maintaining a current version of the Terms on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">11. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="mb-4">
          <a href="mailto:legal@bitmopay.com" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
            legal@bitmopay.com
          </a>
        </p>
      </div>
      
      <ScrollToTopButton />
    </div>
  );
}