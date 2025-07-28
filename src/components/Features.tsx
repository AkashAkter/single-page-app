const Features = () => {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32"
    >
      {/* Background Aurora */}
      <div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
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
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7 text-violet-400">
            Work smarter, not harder
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A Smarter Way to Work
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            QuantumLeap provides the tools to build, manage, and scale your
            projects effortlessly.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Intelligent Task Delegation",
              description:
                "Our AI analyzes project requirements and team strengths to assign tasks automatically, optimizing for speed and quality.",
              icon: (
                <svg
                  className="h-8 w-8 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
            },
            {
              name: "Predictive Asset Generation",
              description:
                "From code snippets to design mockups, our generative AI suggests assets and components, drastically cutting down development time.",
              icon: (
                <svg
                  className="h-8 w-8 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 3.104l7.5 12-7.5 12-7.5-12 7.5-12zM9.75 3.104V15.104M9.75 3.104L2.25 15.104M17.25 21.104l-7.5-12 7.5-12 7.5 12-7.5 12zM17.25 21.104V9.104M17.25 21.104l7.5-12"
                  />
                </svg>
              ),
            },
            {
              name: "Dynamic Resource Allocation",
              description:
                "Monitor project progress and reallocate resources in real-time. Our system anticipates bottlenecks before they happen.",
              icon: (
                <svg
                  className="h-8 w-8 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.5 6a7.5 7.5 0 100 12 7.5 7.5 0 000-12zM10.5 18V15m0 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm0 0V6m0 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z"
                  />
                </svg>
              ),
            },
            {
              name: "Automated Documentation",
              description:
                "Never waste time writing docs again. Our AI generates comprehensive documentation as you work, keeping everyone aligned.",
              icon: (
                <svg
                  className="h-8 w-8 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              ),
            },
            {
              name: "Smart Meeting Summaries",
              description:
                "Automatically capture action items, decisions, and key points from every meeting with 98% accuracy.",
              icon: (
                <svg
                  className="h-8 w-8 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              ),
            },
            {
              name: "Security & Compliance",
              description:
                "Enterprise-grade security with automated compliance tracking for SOC2, GDPR, and HIPAA requirements.",
              icon: (
                <svg
                  className="h-8 w-8 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
            },
          ].map((feature) => (
            <div
              key={feature.name}
              className="group relative flex flex-col rounded-2xl bg-slate-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/80 hover:shadow-lg hover:ring-1 hover:ring-violet-400/30"
            >
              <div className="flex items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700/50 ring-1 ring-white/10 group-hover:bg-slate-700/80 group-hover:ring-violet-400/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">
                  {feature.name}
                </h3>
              </div>
              <p className="mt-4 flex-1 text-slate-300">
                {feature.description}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center font-semibold text-violet-400 hover:text-violet-300 transition-colors duration-300"
              >
                Learn more
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))}
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
    </section>
  );
};

export default Features;
