import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[var(--background)]">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 max-w-4xl mx-auto px-6 text-[var(--text-body)] w-full">
        <h1 className="text-4xl font-bold mb-8 text-[var(--text-primary)]">About EdGrow</h1>
        <div className="space-y-6">
          <p>
            Welcome to EdGrow Academy. We are dedicated to providing high-quality, Tamil-medium IT education to empower the next generation of software engineers and tech professionals.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-[var(--text-primary)]">Our Mission</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
