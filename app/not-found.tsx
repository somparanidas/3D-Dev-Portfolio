import Link from "next/link";
import { NextSeo } from "next-seo";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-tertiary text-white p-8">
      <NextSeo
        title="404: Page Not Found"
        description="Sorry, the page you are looking for does not exist."
        noindex={true}
      />
      <div className="text-center">
        <h1 className="text-[120px] font-black tracking-tight mb-2 text-[#915EFF] drop-shadow-lg">404</h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg md:text-xl text-secondary mb-8 max-w-xl mx-auto">
          Sorry, the page you are looking for does not exist or has been moved.<br />
          Please check the URL or return to the homepage.
        </p>
        <Link href="/">
          <span className="inline-block bg-[#915EFF] hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform hover:-translate-y-1 hover:scale-105 duration-200">
            Go Home
          </span>
        </Link>
      </div>
      <div className="mt-12 opacity-80">
        <img src="/logo.png" alt="Sompa Rani Das Logo" className="mx-auto w-32 h-32 object-contain animate-pulse" />
      </div>
    </div>
  );
}
