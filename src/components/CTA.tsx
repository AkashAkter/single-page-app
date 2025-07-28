const CTA = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))] -z-10" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your workflow?
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Join thousands of teams who have accelerated their productivity with
            QuantumLeap.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#"
              className="rounded-md bg-cyan-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-cyan-500 transition-colors duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="rounded-md px-6 py-3 text-lg font-semibold text-white ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
