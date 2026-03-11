import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-20 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <Link href="/">
          <Image
            src="/logo/logo-cream.png"
            alt="Tri2Thrive"
            width={200}
            height={80}
            className="mx-auto h-16 w-auto mb-6"
          />
        </Link>

        <p className="text-xl text-white/60 mb-10">
          Swim. Bike. Run. <span className="text-secondary-400 font-bold">Thrive.</span>
        </p>

        <div className="flex justify-center gap-4 mb-12">
          {[
            <path key="fb" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
            <path key="ig" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />,
            <path key="yt" d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />,
            <path key="st" d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />,
          ].map((icon, i) => (
            <span
              key={i}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/40 hover:bg-secondary-600 hover:text-white transition-colors cursor-pointer"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
            </span>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <p>&copy; {new Date().getFullYear()} Tri2Thrive. All rights reserved.</p>
          <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
