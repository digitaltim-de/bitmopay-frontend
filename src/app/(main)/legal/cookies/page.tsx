import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Cookie Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
        <p className="mb-4">
          This Cookie Policy explains how Bitmopay uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
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

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
        </p>
        <p className="mb-4">
          Cookies set by the website owner (in this case, Bitmopay) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">4. Types of Cookies We Use</h2>
        <p className="mb-4">
          We use the following types of cookies:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
          </li>
          <li>
            <strong>Preference Cookies:</strong> These cookies enable the website to remember information that changes the way the website behaves or looks, like your preferred language or the region you are in.
          </li>
          <li>
            <strong>Statistics Cookies:</strong> These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. They help us improve the website's functionality.
          </li>
          <li>
            <strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">5. Specific Cookies We Use</h2>
        <p className="mb-4">
          Below is a list of the cookies we use:
        </p>
        <table className="min-w-full border border-gray-300 dark:border-gray-700 mb-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Purpose</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Duration</th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">session_id</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Maintains user session</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Session</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Essential</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">_ga</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Google Analytics - Distinguishes users</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">2 years</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Statistics</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">_gid</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Google Analytics - Distinguishes users</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">24 hours</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Statistics</td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">theme_preference</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stores user's theme preference (light/dark)</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">1 year</td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Preference</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">6. How to Control Cookies</h2>
        <p className="mb-4">
          You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
        </p>
        <p className="mb-4">
          Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">www.allaboutcookies.org</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">7. Changes to This Cookie Policy</h2>
        <p className="mb-4">
          We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Cookie Policy, please contact us at:
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