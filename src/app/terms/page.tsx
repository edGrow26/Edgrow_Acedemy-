import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--background)]">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 max-w-4xl mx-auto px-6 text-[var(--text-body)] w-full">
        <h1 className="text-4xl font-bold mb-8 text-[var(--text-primary)]">Terms and Conditions</h1>
        <div className="space-y-6">
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p>
            Please read these terms and conditions carefully before using Our Service.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--text-primary)]">1. Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--text-primary)]">2. User Accounts</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--text-primary)]">3. Intellectual Property</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
