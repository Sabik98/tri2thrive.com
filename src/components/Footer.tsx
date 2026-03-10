import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
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
            <h4 className="text-sm font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { label: "Our Mission", href: "#mission" },
                { label: "Who are we?", href: "#founders" },
                { label: "Workshops", href: "#workshops" },
                { label: "Podcast", href: "#podcast" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-dark-500 hover:text-brand-500 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "YouTube"].map((platform) => (
                <span
                  key={platform}
                  className="w-9 h-9 rounded-full bg-dark-800 flex items-center justify-center text-dark-500 hover:bg-brand-500 hover:text-white transition-colors cursor-pointer"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    {platform === "Facebook" ? (
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    ) : platform === "Instagram" ? (
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                    ) : (
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                    )}
                  </svg>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="font-[family-name:var(--font-heading)] text-lg font-bold text-dark-700">
            Swim. Bike. Run. <span className="text-brand-500">Thrive.</span>
          </p>
        </div>

        <div className="border-t border-dark-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-600">
          <p>&copy; {new Date().getFullYear()} Tri2Thrive. All rights reserved.</p>
          <a href="#" className="hover:text-brand-500 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
