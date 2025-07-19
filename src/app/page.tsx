import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      {/* Hero Section */}
      <main className="relative isolate min-h-screen">
        {/* Background blobs */}
        <div
          className="absolute inset-x-0 top-28 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-400 to-teal-600 opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Automate Your Workflow with{" "}
              <span className="text-cyan-400">QuantumLeap AI</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
              Unleash your team's creative potential. Our AI-driven platform
              automates repetitive tasks, streamlines project management, and
              delivers intelligent insights to keep you ahead.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#"
                className="rounded-md bg-cyan-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-colors duration-300"
              >
                Start Your 14-Day Free Trial
              </a>
              <a
                href="#features"
                className="rounded-md px-6 py-3 text-lg font-semibold text-white ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300"
              >
                Explore the Platform
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-sky-500 to-teal-500 opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </main>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 sm:py-32 bg-slate-900/70 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A Smarter Way to Work
            </h2>
            <p className="mt-4 text-lg text-slate-300">
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
                    className="h-8 w-8 text-cyan-400"
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
                    className="h-8 w-8 text-cyan-400"
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
                    className="h-8 w-8 text-cyan-400"
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
            ].map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-2xl bg-slate-800/50 p-8 ring-1 ring-white/10 hover:ring-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-700 ring-1 ring-white/10">
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
                  className="mt-6 inline-flex items-center font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Learn more
                  <svg
                    className="ml-2 h-4 w-4"
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
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by High-Velocity Teams
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              See how innovative companies are leveraging QuantumLeap to build
              faster and smarter.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "QuantumLeap's AI task delegation cut our project kickoff time in half. It's like having a world-class project manager built into our workflow.",
                name: "David Lee",
                title: "CTO, Innovatech",
                avatar: "https://randomuser.me/api/portraits/men/46.jpg",
              },
              {
                quote:
                  "The predictive asset generation is unbelievable. It suggests React components and CSS that are about 90% of what we need. The productivity gain is immense.",
                name: "Maria Garcia",
                title: "Lead Designer, PixelPerfect",
                avatar: "https://randomuser.me/api/portraits/women/32.jpg",
              },
              {
                quote:
                  "As a startup, resource allocation is critical. QuantumLeap identifies potential roadblocks and helps us pivot before we lose momentum. It's indispensable.",
                name: "Alex Chen",
                title: "Founder, SwiftLaunch",
                avatar: "https://randomuser.me/api/portraits/men/68.jpg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl bg-slate-800/50 p-8 ring-1 ring-white/10"
              >
                <div className="flex-1">
                  <p className="text-lg text-slate-300">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      width={50}
                      height={50}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-slate-400">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
