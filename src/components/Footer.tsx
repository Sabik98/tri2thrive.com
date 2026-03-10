import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-teal-900 text-white overflow-hidden">
      {/* Diagonal top edge */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white clip-diagonal" />

      <div className="pt-24 pb-12 mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-2xl font-bold"
            >
              tri2thrive
            </Link>
            <p className="mt-3 text-teal-300/70 text-sm leading-relaxed max-w-xs">
              Flowers don&apos;t compete — they just thrive. So can you.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold mb-4">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-teal-300/70">
              <li>
                <a href="#mission" className="hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#founders" className="hover:text-white transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-white transition-colors">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#podcast" className="hover:text-white transition-colors">
                  Podcast
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-bold mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "YouTube"].map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 text-xs font-[family-name:var(--font-mono)] bg-white/10 rounded-full hover:bg-coral-400/20 hover:text-coral-300 transition-colors cursor-pointer"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="font-[family-name:var(--font-heading)] text-6xl md:text-8xl font-bold text-white/5 text-center select-none mb-8">
          Swim. Bike. Run. Thrive.
        </div>

        <div className="border-t border-teal-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-teal-400/60">
          <p>&copy; {new Date().getFullYear()} Tri2Thrive. All rights reserved.</p>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
