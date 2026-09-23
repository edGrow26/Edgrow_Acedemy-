import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--background)]">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 max-w-4xl mx-auto px-6 text-[var(--text-body)] w-full">
        <h1 className="text-4xl font-bold mb-8 text-[var(--text-primary)]">Privacy Policy</h1>
        <div className="space-y-6">
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--text-primary)]">Information Collection and Use</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--text-primary)]">Types of Data Collected</h2>
          <h3 className="text-xl font-medium mt-6 mb-2 text-[var(--text-primary)]">Personal Data</h3>
          <p>
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--text-primary)]">Security of Your Personal Data</h2>
          <p>
            The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
