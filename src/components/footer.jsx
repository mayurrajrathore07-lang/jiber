import { FaInstagram, FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-br from-violet-500 to-pink-500 text-sm font-bold text-white">
            j
          </div>
          <span className="text-xl font-bold">Jiber</span>
        </div>

        <div className='flex gap-4 text-lg text-black-300 text-black'>
          <a href="https://www.instagram.com/?hl=en"><FaInstagram className='hover:text-pink-500 transition-all' size={25} /></a>
          <a href="https://www.instagram.com/?hl=en"><FaGoogle className='hover:text-pink-500 transition-all' size={25} /></a>
          <a href="https://www.instagram.com/?hl=en"><FaGithub className='hover:text-pink-500 transition-all' size={25} /></a>
          <a href="https://www.instagram.com/?hl=en"><FaLinkedin className='hover:text-pink-500 transition-all' size={25} /></a>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
          <Link href="/t&C" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
          <a href="#FAQ" className="hover:text-slate-800 transition-colors">FAQ</a>
        </div>

        <div className="text-sm text-slate-500">contact@jiber.app</div>
      </div>
    </footer>
  );
}