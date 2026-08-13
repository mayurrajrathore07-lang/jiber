import React from "react";

export default function Hero() {
  return (
    <section id="messaging" className="bg-white px-4 py-16 text-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">


        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            More than a{" "}
            <span className="inline-block rounded-2xl bg-[#EEECFF] px-4 py-2 text-[#635BFF]">
              Messaging app.
            </span>
          </h2>

          <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            More than a Payment platform.
          </h2>
        </div>


        <div className="rounded-3xl bg-[#F2EFFE] p-6 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">

            <div className="relative flex h-[330px] items-center justify-center">


              <div className="absolute left-0 top-6 z-10 w-44 rounded-2xl bg-white p-3 shadow-lg sm:left-4 sm:w-48">


                <div className="flex items-center gap-2 rounded-xl bg-[#F4F1FE] p-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-100 text-xs text-purple-600">
                    ❖
                  </div>

                  <div>
                    <p className="text-xs font-bold">Alpha Squad</p>
                    <p className="text-[10px] text-gray-500">Private</p>
                  </div>
                </div>


                <div className="mt-2 flex items-center gap-2 p-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-500">
                    ❖
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-700">
                      Cuz Crew
                    </p>
                    <p className="text-[10px] text-gray-400">Public</p>
                  </div>
                </div>


                <div className="flex items-center gap-2 p-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gray-100 text-xs text-gray-500">
                    ❖
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-700">
                      Meme team
                    </p>
                    <p className="text-[10px] text-gray-400">Public</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-0 z-10 w-64 rounded-3xl bg-[#E8E3FE] p-5 shadow-lg sm:right-4 sm:w-72">

                <div className="flex items-center justify-between border-b border-purple-200 pb-3">

                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-600 text-xs text-white">
                      ❖
                    </div>

                    <span className="text-xs font-bold">
                      Alpha Squad
                    </span>
                  </div>

                  <span className="rounded-md bg-white px-2 py-1 text-[10px] text-gray-600">
                    Private
                  </span>
                </div>

                <div className="mt-4 space-y-2">

                  <div className="w-fit rounded-2xl rounded-tl-sm bg-white px-4 py-2 text-xs">
                    Hello Guys
                  </div>

                  <div className="w-fit rounded-2xl rounded-tl-sm bg-white px-4 py-2 text-xs">
                    Welcome to the channel
                  </div>

                  <div className="flex justify-end">
                    <div className="w-fit rounded-2xl rounded-tr-sm bg-purple-600 px-4 py-2 text-xs text-white">
                      Hello everyone
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
                Private Channels
                <br className="hidden sm:block" />
                Exclusive Access
              </h3>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-600 sm:text-lg">
                Monetize your community with private channels and premium
                content. Engage directly with your fans and build a dedicated
                following.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <div className="flex flex-col justify-between rounded-3xl bg-[#FAF0F7] p-6 sm:p-10">

            <div>

              <div className="flex items-center justify-center gap-2 sm:gap-3">

                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                    alt="User 1"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover sm:h-12 sm:w-12"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xs">
                    🇬🇧
                  </span>
                </div>

                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80"
                    alt="User 2"
                    className="h-12 w-12 rounded-full border-2 border-white object-cover sm:h-14 sm:w-14"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xs">
                    🇦🇺
                  </span>
                </div>

                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80"
                    alt="Henry Williams"
                    className="h-16 w-16 rounded-full border-4 border-white object-cover sm:h-20 sm:w-20"
                  />

                  <span className="absolute -bottom-1 right-1 rounded-full bg-white px-1 text-xs">
                    🇺🇸
                  </span>
                </div>

                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                    alt="User 3"
                    className="h-12 w-12 rounded-full border-2 border-white object-cover sm:h-14 sm:w-14"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xs">
                    🇮🇳
                  </span>
                </div>

                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
                    alt="User 4"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover sm:h-12 sm:w-12"
                  />
                  <span className="absolute -bottom-1 -right-1 text-xs">
                    🇦🇺
                  </span>
                </div>

              </div>

              <p className="mt-4 text-center text-lg font-bold sm:text-xl">
                Henry Williams
              </p>

              <div className="mx-auto mt-4 flex max-w-xs items-center justify-between rounded-full bg-white p-2 pl-6 shadow-md">

                <span className="text-xl font-bold">
                  $120
                </span>

                <button className="rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-700">
                  Pay
                </button>

              </div>

              <p className="mt-3 text-center text-xs text-gray-400">
                Flat $1 platform fee
              </p>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Borderless, Instant, & Just $1
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
                Send money globally in an instant for a flat $1 fee. No more
                hidden charges or confusing exchange rates.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-[#ECFDF5] p-6 sm:p-10">

            <div>

              <div className="mx-auto max-w-xs rounded-2xl bg-white p-4 shadow-md">

                <div className="flex items-center justify-between text-xs">

                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                      alt="Liam"
                      className="h-7 w-7 rounded-full object-cover"
                    />

                    <span className="font-semibold">
                      Liam Carter
                    </span>
                  </div>

                  <span className="text-gray-400">
                    Received $19
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs">

                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                      alt="Sophie"
                      className="h-7 w-7 rounded-full object-cover"
                    />

                    <span className="font-semibold">
                      Sophie Reynolds
                    </span>
                  </div>

                  <span className="text-gray-400">
                    Received $25
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs">

                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                      alt="Ella"
                      className="h-7 w-7 rounded-full object-cover"
                    />

                    <span className="font-semibold">
                      Ella Martinez
                    </span>
                  </div>

                  <span className="text-gray-400">
                    Received $14
                  </span>
                </div>

              </div>

              <div className="my-2 text-center text-2xl text-green-400">
                ↓
              </div>

              <div className="mx-auto max-w-xs rounded-2xl bg-white p-4 text-center shadow-md">

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
                  alt="Liam Carter"
                  className="mx-auto h-12 w-12 rounded-full border-2 border-green-500 object-cover"
                />

                <p className="mt-1 text-xs font-semibold text-green-600">
                  Liam Carter
                </p>

                <div className="my-2 inline-block rounded-xl bg-[#D1FAE5] px-7 py-2 text-2xl font-bold text-green-600">
                  $19
                </div>

                <p className="text-[11px] text-gray-400">
                  Tip received from a fan.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold sm:text-3xl">
                You Keep 100% of Your Earnings
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
                Creators, reclaim your earnings. Jiber never takes a cut, so
                you keep more from your community.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}