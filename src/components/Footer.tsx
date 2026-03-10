import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-xl font-bold"
            >
              tri<span className="text-coral-400">2</span>thrive
            </Link>
            <p className="mt-3 text-teal-400/50 text-sm leading-relaxed max-w-xs">
              Flowers don&apos;t compete — they just thrive. So can you.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-teal-500 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {["Mission", "Team", "Workshops", "Podcast"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-teal-400/50 hover:text-coral-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[family-name:var(--font-mono)] text-[10px] font-bold uppercase tracking-widest text-teal-500 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "YouTube"].map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 text-[10px] font-[family-name:var(--font-mono)] font-bold uppercase tracking-wider bg-white/5 text-teal-400/60 rounded-full hover:bg-coral-400/20 hover:text-coral-300 transition-all cursor-pointer"
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

        <div className="border-t border-teal-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-[family-name:var(--font-mono)] text-teal-600/50 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Tri2Thrive</p>
          <a href="#" className="hover:text-coral-400 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
