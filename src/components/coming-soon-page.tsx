import Link from "next/link";

interface ComingSoonPageProps {
  title: string;
  description?: string;
}

const ComingSoonPage = ({
  title,
  description = "This page is currently being built. Please check back soon.",
}: ComingSoonPageProps) => {
  return (
    <main className="min-h-screen bg-[#0a1329] flex flex-col">
      {/* Simple nav */}
      <header className="w-full border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-bold text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a1329]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>SoftwarePac<span className="text-[#0a1329]"> Technologies</span></span>
          </Link>
          <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-full bg-[#0a1329]/20 flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#0a1329" strokeWidth="2" />
              <polyline points="12 6 12 12 16 14" stroke="#0a1329" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{title}</h1>
          <p className="text-base text-white/60 leading-relaxed mb-8">{description}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3a4096] px-6 py-3 text-sm font-bold text-white hover:bg-[#2c3071] transition-all duration-200"
          >
            ← Return Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ComingSoonPage;
