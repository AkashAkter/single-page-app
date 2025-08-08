/* eslint-disable react/no-unescaped-entities */
const CTA = () => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Unlock Your True Potential
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            See for yourself how QuantumLeap AI can eliminate bottlenecks,
            automate workflows, and give your team the freedom to focus on what
            truly matters.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-violet-600 px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-all duration-300"
            >
              Get Started For Free
            </a>
            <a
              href="#"
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

      <div
        className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};

export default CTA;
