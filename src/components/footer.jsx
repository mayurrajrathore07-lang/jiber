import vector from "../../public/images/Vector.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-gradient-to-b from-[#f8f3ff] to-[#eee2ff] text-slate-700 pt-10 pb-0 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">

          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <img
                className="h-8 w-auto sm:h-9 object-contain"
                src={vector.src}
                alt="Jiber Logo"
              />
            </Link>
            <span className="text-slate-300 font-light text-lg">|</span>
            <span className="text-slate-600 font-medium text-sm sm:text-base">
              Messaging meets Money.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-slate-400/80 flex items-center justify-center text-slate-700 hover:border-purple-600 hover:text-purple-600 hover:bg-white/50 transition-all"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-slate-400/80 flex items-center justify-center text-slate-700 hover:border-purple-600 hover:text-purple-600 hover:bg-white/50 transition-all"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-slate-400/80 flex items-center justify-center text-slate-700 hover:border-purple-600 hover:text-purple-600 hover:bg-white/50 transition-all"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-10 h-10 rounded-full border border-slate-400/80 flex items-center justify-center text-slate-700 hover:border-purple-600 hover:text-purple-600 hover:bg-white/50 transition-all"
            >
              <FaXTwitter size={16} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white flex items-center justify-center shadow-sm">
              <FaEnvelope size={16} />
            </div>
            <div className="text-sm">
              <span className="text-slate-600 font-medium">Contact us: </span>
              <a href="mailto:hello@jiber.app" className="font-bold text-slate-900 hover:text-purple-600 transition-colors">
                hello@jiber.app
              </a>
            </div>
          </div>

        </div>

        <div className="w-full border-t border-purple-200/80" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm text-slate-600 font-medium">
          <div>
            © 2025 Jiber Labs Ltd. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/t&C" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/#faq" className="hover:text-slate-900 transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#0F1A2A] text-center text-white w-full py-4 px-6 flex items-center justify-center text-xs sm:text-sm font-normal">
        Jiber is a non-custodial software platform. We do not provide financial, custodial, or money transfer services.
      </div>
    </footer>
  );
}      