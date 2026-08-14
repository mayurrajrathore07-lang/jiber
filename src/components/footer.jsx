import vector from "../../public/images/Vector.png"
import { FaInstagram, FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white py-8 text-gradient hover:bg-gradient-to-b from-purple-600 to-blue-600 mb-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row md:gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            className="h-8 w-auto sm:h-10 object-contain"
            src={vector.src}
            alt="Jiber Logo"
          />
        </Link>

        <div className="flex items-center gap-5 text-black-700">
          <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-pink-500 transition-colors" size={22} />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
            <FaGoogle className="hover:text-pink-500 transition-colors" size={22} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-pink-500 transition-colors" size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-pink-500 transition-colors" size={22} />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-lg text-black-600 font-semibold">
          <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/t&C" className="hover:text-slate-900 transition-colors">
            Terms of Service
          </Link>
          <Link href="/#faq" className="hover:text-slate-900 transition-colors">
            FAQ
          </Link>
        </div>

        <div className="text-lg text-black-800 font-bold">contact@jiber.app</div>
      </div>
    </footer>
  );
}