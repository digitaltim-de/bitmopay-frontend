import { ScrollToTopButton } from "@/components/shared/scroll-to-top";

export default function ImprintPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Imprint / Legal Notice</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Company Information</h2>
        <p className="mb-4">
          <strong>Company Name:</strong> SOCOFT DİJİTAL MEDYA HİZMETLERİ LİMİTED ŞİRKETİ
        </p>
        <p className="mb-4">
          <strong>Legal Form:</strong> Limited Liability Company (Limited Şirketi)
        </p>
        <p className="mb-4">
          <strong>Registered Address:</strong><br />
          Ataköy Towers, B Blok<br />
          Ataköy 7-8-9-10. Kısım Mah.<br />
          Çobançeşme E-5 Yanyol Cad. Kat 11 D:128<br />
          34158 Bakırköy / İstanbul, Turkey
        </p>
        <p className="mb-4">
          <strong>Registration Number:</strong> [Company Registration Number]
        </p>
        <p className="mb-4">
          <strong>Tax ID:</strong> [Tax Identification Number]
        </p>
        <p className="mb-4">
          <strong>Authorized Representatives:</strong> [Names of Managing Directors/Board Members]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Contact Information</h2>
        <p className="mb-4">
          <strong>Email:</strong> <a href="mailto:info@bitmopay.com" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">info@bitmopay.com</a>
        </p>
        <p className="mb-4">
          <strong>Phone:</strong> [Phone Number]
        </p>
        <p className="mb-4">
          <strong>Website:</strong> <a href="https://bitmopay.com" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">https://bitmopay.com</a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Regulatory Information</h2>
        <p className="mb-4">
          Bitmopay operates in compliance with all applicable Turkish laws and regulations governing digital payment services and cryptocurrency operations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Responsible for Content</h2>
        <p className="mb-4">
          The content of this website has been carefully prepared and is regularly updated. The person responsible for the content of this website according to Turkish law is:
        </p>
        <p className="mb-4">
          [Name of Content Responsible Person]<br />
          SOCOFT DİJİTAL MEDYA HİZMETLERİ LİMİTED ŞİRKETİ<br />
          [Contact Email]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Liability for Content</h2>
        <p className="mb-4">
          The contents of our website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">External Links</h2>
        <p className="mb-4">
          Our website contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.
        </p>
        <p className="mb-4">
          However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of law. If we become aware of any legal violations, we will remove such links immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Copyright</h2>
        <p className="mb-4">
          The content and works created by the site operators on these pages are subject to Turkish copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
        </p>
        <p className="mb-4">
          Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">Dispute Resolution</h2>
        <p className="mb-4">
          The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">https://ec.europa.eu/consumers/odr/</a>
        </p>
        <p className="mb-4">
          We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
        </p>
      </div>
      
      <ScrollToTopButton />
    </div>
  );
}