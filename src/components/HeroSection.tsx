const HeroSection = () => {
  return (
    <main className="relative isolate min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background Aurora */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Text Content Column */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Where Your Best Work
                <span className="text-violet-400"> Happens, Effortlessly</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Welcome to QuantumLeap AI. Our intelligent platform automates
                the mundane, predicts project needs, and provides the clarity
                your team needs to innovate and excel. Ditch the busywork,
                unlock your full potential.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-violet-600 px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-all duration-300"
                >
                  Get Started For Free
                </a>
                <a
                  href="#features"
                  className="group text-base font-semibold leading-6 text-white"
                >
                  Book a Demo{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Content Column */}
          <div className="flex items-start justify-end lg:order-first">
            <div className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-slate-400/10 sm:w-[57rem]">
              {/* Abstract UI Mockup */}
              <div className="rounded-xl bg-slate-800/60 p-2 ring-1 ring-inset ring-slate-100/10 backdrop-blur-sm lg:p-4">
                <div className="rounded-lg bg-slate-900 p-6">
                  {/* Header */}
                  <div className="flex items-center gap-x-3">
                    <div className="flex-none text-sm font-medium text-violet-400">
                      QuantumLeap AI
                    </div>
                    <div className="h-px flex-auto bg-slate-600"></div>
                  </div>
                  {/* Chart Placeholder */}
                  <div className="mt-4 flex flex-col gap-y-4">
                    <div className="flex animate-pulse gap-x-2">
                      <div className="h-5 w-5 flex-none rounded-full bg-slate-700"></div>
                      <div className="h-5 w-full rounded-md bg-slate-700"></div>
                    </div>
                    <div className="flex animate-pulse gap-x-2">
                      <div className="h-5 w-5 flex-none rounded-full bg-slate-700"></div>
                      <div className="h-5 w-2/3 rounded-md bg-slate-700"></div>
                    </div>
                    <div className="flex animate-pulse gap-x-2">
                      <div className="h-5 w-5 flex-none rounded-full bg-slate-700"></div>
                      <div className="h-5 w-5/6 rounded-md bg-slate-700"></div>
                    </div>
                  </div>
                  {/* Footer with fake buttons */}
                  <div className="mt-6 flex items-center justify-end gap-x-2">
                    <div className="h-7 w-20 flex-none rounded-full bg-slate-700 animate-pulse"></div>
                    <div className="h-7 w-20 flex-none rounded-full bg-violet-500/50 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Background Aurora */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </main>
  );
};

export default HeroSection;
