import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden font-sans">
      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header / Navbar */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
            N
          </div>
          <span className="font-semibold text-lg tracking-tight">NextJS + Tailwind (JS)</span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Docs
          </a>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Tailwind CSS
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center z-10 py-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-purple-400 mb-8 shadow-inner">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          JavaScript Ready • App Router • Tailwind CSS
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent mb-6">
          Build sleek web applications with Next.js & Tailwind CSS
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
          Your project is fully configured with JavaScript, App Router directory layout (<code className="text-purple-300 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 font-mono text-sm">src/app/</code>), and Tailwind CSS v4 styles.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl w-full text-left mb-10">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all">
            <div className="text-purple-400 font-semibold mb-1">⚡ App Router</div>
            <p className="text-xs text-slate-400">Powered by React Server Components & file-based routing.</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all">
            <div className="text-indigo-400 font-semibold mb-1">🎨 Tailwind CSS v4</div>
            <p className="text-xs text-slate-400">Utility-first CSS setup imported cleanly in globals.css.</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all">
            <div className="text-emerald-400 font-semibold mb-1">💛 Pure JavaScript</div>
            <p className="text-xs text-slate-400">Pure JS setup without TypeScript overhead or config hassle.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 font-medium text-white shadow-lg shadow-purple-500/25 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 text-sm"
          >
            Explore Next.js Docs &rarr;
          </a>
          <div className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm text-slate-300 flex items-center justify-center gap-2 shadow-inner">
            <span className="text-slate-500">$</span> edit src/app/page.js
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 border-t border-slate-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
        <div>Next.js + Tailwind CSS (JavaScript boilerplate)</div>
        <div className="flex items-center gap-4">
          <span>Path alias: <code className="text-slate-400 font-mono">@/*</code></span>
        </div>
      </footer>
    </div>
  );
}

