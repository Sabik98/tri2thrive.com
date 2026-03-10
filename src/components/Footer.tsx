import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-xl font-bold"
            >
              tri<span className="text-brand-500">2</span>thrive
            </Link>
            <p className="mt-3 text-dark-500 text-sm leading-relaxed max-w-xs">
              Flowers don&apos;t compete — they just thrive. So can you.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-dark-500 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {["Mission", "Team", "Workshops", "Podcast"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-dark-500 hover:text-brand-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-dark-500 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "YouTube"].map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 text-[10px] font-[family-name:var(--font-mono)] font-bold uppercase tracking-wider bg-white/5 text-dark-500 rounded-full hover:bg-brand-500/20 hover:text-brand-400 transition-all cursor-pointer"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Finish line watermark */}
        <div className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-bold text-white/[0.03] text-center select-none mb-8 leading-tight">
          SWIM. BIKE. RUN. THRIVE.
        </div>

        <div className="border-t border-dark-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-[family-name:var(--font-mono)] text-dark-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Tri2Thrive</p>
          <a href="#" className="hover:text-brand-500 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
