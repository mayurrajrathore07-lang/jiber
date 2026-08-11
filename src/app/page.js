"use client";

import { useState } from "react";

const faqs = [
  { question: "Does Jiber hold my funds?", answer: "No, Jiber is fully non-custodial." },
  { question: "Is there a free trial available?", answer: "Yes, Jiber offers a free trial for new users." },
  { question: "Can I change my plan later?", answer: "Yes, you can change your plan at any time." },
  { question: "What is your cancellation policy?", answer: "You can cancel your plan whenever you want." },
  { question: "Can other info be added to an invoice?", answer: "Yes, additional information can be added to invoices." },
  { question: "How does billing work?", answer: "Billing is handled automatically according to your selected plan." },
  { question: "How do I change my account email?", answer: "You can change your email from your account settings." },
];

const actions = [
  { name: "Set Up", icon: "👥" },
  { name: "Support Your Favorite Creators", icon: "💜" },
  { name: "Unlock New Revenue Streams", icon: "📲" },
  { name: "Spend Your Earnings", icon: "💸" },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="bg-[#f5f3f8] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center justify-between rounded-full bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-pink-500 text-sm font-bold text-white">
              j
            </div>
            <span className="text-xl font-bold">Jiber</span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#">Messaging</a>
            <a href="#">Payments</a>
            <a href="#">Monetization</a>
            <a href="#">FAQ</a>
          </div>

          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
            Join
          </button>
        </nav>

        <section className="mb-10 grid items-center gap-8 rounded-[32px] bg-[#f2ecff] p-6 md:grid-cols-2 md:p-10">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-700/80">
              Chat + Send Money
            </p>
            <h1 className="max-w-md text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Worldwide for $1. Keep 100% of what you earn.
            </h1>

            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>• Send money to friends, creators, and communities with no hidden fees.</li>
              <li>• Built for seamless, instant messaging and payouts.</li>
              <li>• Get started in minutes with a wallet that works globally.</li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
                Join the waitlist
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700">
                Learn more
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[28px] bg-gradient-to-br from-violet-200 via-white to-violet-100 p-5 shadow-[0_30px_70px_rgba(119,72,185,0.15)]">
              <div className="rounded-[24px] bg-white/60 p-4 backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-400 to-violet-500" />
                    <div>
                      <p className="text-xs text-slate-500">Creator</p>
                      <p className="text-sm font-semibold text-slate-800">Mia</p>
                    </div>
                  </div>
                  <button className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                    Live
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="ml-auto max-w-[70%] rounded-2xl bg-violet-500 px-3 py-2 text-sm text-white">
                    Hey team, I just launched a new drop.
                  </div>
                  <div className="max-w-[70%] rounded-2xl bg-slate-100 px-3 py-2 text-sm text-slate-700">
                    Let’s support her first subscribers.
                  </div>
                  <div className="rounded-2xl bg-gradient-to-r from-violet-100 to-pink-100 p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">Payout</p>
                        <p className="text-lg font-bold text-slate-900">$120</p>
                      </div>
                      <button className="rounded-full bg-slate-900 px-3 py-2 text-xs font-medium text-white">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-[28px] bg-[#f2eff7] p-6 md:p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
              More than a Messaging app.
            </h2>
            <p className="mt-2 text-xl font-semibold text-slate-800">
              More than a Payment platform.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[24px] bg-white p-4 shadow-sm">
              <div className="mb-4 flex gap-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-300 to-violet-500" />
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-300 to-cyan-500" />
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-300 to-pink-500" />
              </div>
              <div className="space-y-3 rounded-[20px] bg-slate-50 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Henry Williams</span>
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">$120</span>
                </div>
                <div className="h-2 w-28 rounded-full bg-violet-200" />
                <div className="h-2 w-20 rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="rounded-[24px] bg-[#d8f3ea] p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-700">Private Channels</p>
              <p className="mt-2 text-sm text-slate-600">Exclusive Access</p>
              <p className="mt-5 text-sm leading-6 text-slate-700">
                Join your community with private channels and premium content. Engage directly with your audience in a secure, trusted space.
              </p>
            </div>

            <div className="rounded-[24px] bg-[#d9f1f6] p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-400 to-pink-400" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400" />
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400" />
              </div>
              <p className="text-sm text-slate-700">You keep 100% of your earnings. Create, receive, and grow your community with zero friction.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 text-center">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
            Jiber Action
          </h2>
          <p className="mt-2 text-2xl font-semibold text-slate-700">Simple. Fast. Powerful.</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {actions.map((action) => (
              <div key={action.name} className="rounded-[22px] bg-white p-5 shadow-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f2ebff] text-3xl shadow-inner">
                  {action.icon}
                </div>
                <p className="text-sm font-medium text-slate-800">{action.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 grid items-center gap-8 rounded-[28px] bg-[#f1edf9] p-6 md:grid-cols-2 md:p-10">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative flex h-64 items-center justify-center">
              <div className="absolute h-32 w-32 rounded-full border border-violet-200" />
              <div className="absolute h-56 w-56 rounded-full border border-violet-200" />
              <div className="absolute h-40 w-40 rounded-full bg-gradient-to-br from-violet-200 to-pink-200" />
              <div className="absolute h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 shadow-lg" />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">For creators</p>
            <h3 className="text-3xl font-black text-slate-900 md:text-4xl">Monetize your influence. On terms.</h3>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Run subscriptions and gated content from one dashboard.</li>
              <li>• Accept tips and payments instantly.</li>
              <li>• Keep control of your brand and community.</li>
              <li>• Build recurring income without the admin headache.</li>
            </ul>
            <button className="mt-6 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
              Join as creator
            </button>
          </div>
        </section>

        <section className="mb-16 grid items-center gap-8 rounded-[28px] bg-[#f5ecff] p-6 md:grid-cols-2 md:p-10">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">For fans</p>
            <h3 className="text-3xl font-black text-slate-900 md:text-4xl">Support what you love. Instantly.</h3>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Tip creators in seconds.</li>
              <li>• Unlock exclusive community access.</li>
              <li>• Stay connected to the people you support.</li>
              <li>• Spend your earnings anywhere with a simple wallet.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-violet-200 to-pink-200">
              <div className="absolute -top-4 left-8 h-14 w-14 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
              <div className="absolute left-0 top-16 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
              <div className="absolute right-0 top-14 h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
              <div className="absolute -bottom-4 right-10 h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
              <div className="h-24 w-24 rounded-full bg-white/80 backdrop-blur-sm shadow-inner" />
            </div>
          </div>
        </section>

        <section className="mb-16 grid items-center gap-8 rounded-[28px] bg-[#f1f5ff] p-6 md:grid-cols-2 md:p-10">
          <div className="order-2 md:order-1">
            <div className="mx-auto max-w-md rounded-[28px] border border-slate-200 bg-white p-4 shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-violet-200" />
                  <div className="text-sm font-medium text-slate-700">Creator</div>
                </div>
                <div className="text-xs text-slate-500">July 2026</div>
              </div>
              <div className="rounded-[20px] bg-slate-50 p-4">
                <div className="mb-3 h-2 w-20 rounded-full bg-violet-200" />
                <div className="mb-2 h-2 w-full rounded-full bg-slate-200" />
                <div className="mb-2 h-2 w-5/6 rounded-full bg-slate-200" />
                <div className="h-2 w-2/3 rounded-full bg-slate-200" />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">A smarter way</p>
            <h3 className="text-3xl font-black text-slate-900 md:text-4xl">To chat + money.</h3>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• One app for social connection and payments.</li>
              <li>• Built for fans, creators, and communities.</li>
              <li>• Instant transfer with transparent rates.</li>
              <li>• Better relationships, better monetization.</li>
            </ul>
            <button className="mt-6 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
              Get early access
            </button>
          </div>
        </section>

        <section className="mb-16 grid items-center gap-8 rounded-[28px] bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div className="mx-auto w-full max-w-sm rounded-[32px] border border-slate-200 bg-[#f7f7f8] p-4 shadow-lg">
            <div className="rounded-[28px] bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between text-[10px] text-slate-500">
                <span>9:41</span>
                <span>📶 5G</span>
              </div>
              <div className="rounded-[20px] bg-gradient-to-br from-violet-100 to-pink-100 p-4">
                <div className="mb-3 h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                <div className="mb-2 h-2 w-20 rounded-full bg-slate-200" />
                <div className="mb-2 h-2 w-16 rounded-full bg-slate-200" />
                <div className="rounded-xl bg-white/80 p-3">
                  <div className="mb-1 text-[10px] text-slate-500">Balance</div>
                  <div className="text-xl font-bold text-slate-800">$840.50</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Beta creator</p>
            <h3 className="text-3xl font-black text-slate-900 md:text-4xl">Get early access & influence</h3>
            <p className="mt-4 text-slate-600">
              Join the platform early and help shape the future of community-powered digital transactions.
            </p>
            <button className="mt-6 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
              Join early access
            </button>
          </div>
        </section>

        <section className="mb-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-[24px] bg-white p-2 shadow-sm">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="border-b border-slate-200 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
                >
                  <span className="text-base font-medium text-slate-800">{faq.question}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-lg text-slate-600">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && <p className="px-4 pb-5 text-sm text-slate-600">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-[28px] bg-[#0b0718] px-4 py-12 text-center text-white shadow-lg md:px-8">
          <div className="mx-auto max-w-xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-2xl">
              ✨
            </div>
            <h3 className="text-3xl font-black md:text-4xl">Ready to join the exclusive digital economy?</h3>
            <p className="mt-3 text-sm text-slate-300">Join the platform early and unlock new ways to connect, earn, and grow.</p>
            <button className="mt-6 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg">
              Apply now
            </button>
          </div>
        </section>

        <footer className="border-t border-slate-200 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-pink-500 text-sm font-bold text-white">
                j
              </div>
              <span className="text-xl font-bold text-slate-900">Jiber</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <a href="#">Messaging</a>
              <a href="#">Payments</a>
              <a href="#">Monetization</a>
              <a href="#">FAQ</a>
            </div>

            <div className="text-sm text-slate-500">contact@jiber.app</div>
          </div>
        </footer>
      </div>
    </main>
  );
}
