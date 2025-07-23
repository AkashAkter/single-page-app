import Image from "next/image";
import { JSX, SVGProps } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  // Array of logos with direct URLs
  const VercelIcon = (
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>Vercel</title>
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );

  const SentryIcon = (
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>Sentry</title>
      <path d="M21.6 4.316c-1.122-1.122-2.5-1.92-4.13-2.4C16.148 1.44 14.8 1.18 12.723 1.18h-2.17C7.2 1.18 4.965 2.052 3.02 3.81c-1.944 1.76-2.916 4.13-2.916 7.11 0 2.28.616 4.316 1.85 6.108 1.23 1.792 2.916 3.09 5.056 3.894 1.23.467 2.553.7 3.97.7h2.17c3.37-.01 6.248-1.288 8.636-3.85.89-1.028 1.58-2.203 2.07-3.526.49-1.32.74-2.73.74-4.22 0-2.373-.66-4.55-1.98-6.53zm-3.13 13.06c-1.944 1.943-4.27 2.915-7.01 2.915h-2.17c-1.12 0-2.218-.186-3.29-.56-1.74-.654-3.13-1.72-4.17-3.18-1.04-1.46-1.56-3.18-1.56-5.16 0-2.42.79-4.434 2.37-6.042C4.54 6.46 6.55 5.39 9.004 5.39h1.61c1.373 0 2.5.28 3.37.84.87.56 1.306 1.343 1.306 2.345a2.2 2.2 0 01-1.26 2.058 2.2 2.2 0 011.26 2.058c0 1.002-.437 1.785-1.308 2.35a4.3 4.3 0 01-3.37.84h-2.19v-2.8h2.19c.98 0 1.47-.468 1.47-1.402a1.4 1.4 0 00-1.47-1.402h-1.61c-1.587 0-2.38.793-2.38 2.38v3.31c0 1.587.793 2.38 2.38 2.38h1.61c.98 0 1.47-.467 1.47-1.4v-.468h-2.01v-1.4h4.13c1.373 0 2.5.28 3.37.84.87.56 1.306 1.344 1.306 2.346 0 1.956-1.12 3.44-3.366 4.45z" />
    </svg>
  );

  const GithubIcon = (
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );

  const DockerIcon = (
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>Docker</title>
      <path d="M23.23.334H.769C.344.334 0 .678 0 1.103v21.794c0 .425.344.769.769.769h22.462c.425 0 .769-.344.769-.769V1.103c0-.425-.344-.77-.77-.77zM7.534 11.233H4.156V7.95h3.378v3.283zm4.223 0H8.378V7.95h3.378v3.283zm4.222 0h-3.378V7.95h3.378v3.283zm4.222 0h-3.378V7.95h3.378v3.283zm-8.444-4.103H4.156V4.667h11.556v2.463zM21.24 19.34c-2.31 1.15-4.593 1.34-6.438.54-.575-1.32-1.12-2.63-1.63-3.92-.54-1.29-1.04-2.58-1.5-3.83-.49-1.28-1.22-2.53-2.22-3.66L8.5 7.6c-.23-.25-.56-.4-.9-.4H3.8c-.34 0-.67.15-.9.4l-.95.95c-.23.23-.37.56-.37.9v8.3c0 .35.14.67.37.9l.95.95c.23.23.56.37.9.37h1.43c2.08.68 4.29.56 6.27-.37.53 1.27 1.03 2.5 1.5 3.7.44 1.13.88 2.25 1.3 3.32.18.45.6.76 1.08.76h2.2c.45 0 .85-.26 1.05-.65l1.08-2.18c.2-.4.1-.9-.2-1.22z" />
    </svg>
  );

  const NetlifyIcon = (
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>Netlify</title>
      <path d="M11.055.234l-6.88 3.965a.86.86 0 00-.43.743v7.94a.86.86 0 00.43.743l6.88 3.965a.86.86 0 00.86 0l6.88-3.965a.86.86 0 00.43-.743v-7.94a.86.86 0 00-.43-.743L11.915.234a.86.86 0 00-.86 0zM17.15 12.9l-5.235 3.015L6.68 12.9V6.985l5.235-3.015L17.15 6.985v5.915zM23.57.234l-6.88 3.965a.86.86 0 00-.43.743v1.983L23.14 3.22a.86.86 0 00.43-.743V.977a.86.86 0 00-.43-.743zM3.735 4.942L10.615 8.9v5.915L3.735 19.06V4.942zm16.53 14.118l-6.88-3.965v-1.983l6.88 3.704a.86.86 0 00.43.261v1.244a.86.86 0 00-.43-.261zM.43 20.78a.86.86 0 00.43.743l6.88 3.965a.86.86 0 00.43.26v-1.243a.86.86 0 00-.43-.26L.86 20.78a.86.86 0 00-.43 0zM19.53 9.16v5.915l-6.88 3.965a.86.86 0 00-.43.26V18.06l6.88-3.965a.86.86 0 00.43-.743V9.16z" />
    </svg>
  );

  const StripeIcon = (
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <title>Stripe</title>
      <path d="M21.12 12.42c0-2.31-1.38-3.03-3.06-3.57-1.14-.39-1.38-.72-1.38-1.08 0-.54.6-.9 1.5-.9.96 0 1.92.3 2.52.54l.42-2.58c-.84-.3-2.04-.54-3.3-.54-2.52 0-4.26 1.38-4.26 3.42 0 2.22 1.38 2.94 3.06 3.51 1.26.42 1.44.78 1.44 1.14 0-.6-.66-1.02-1.62-1.02-.9 0-2.1.3-2.82.6l-.42-2.64c.9-.36 2.16-.6 3.48-.6 2.46 0 4.2 1.32 4.2 3.42zM24 4.14h-3.48V2.4H17.4v1.74h-2.88v2.4H17.4V11.1c0 2.04 1.02 3.12 3.18 3.12.6 0 1.14-.06 1.62-.24v-2.28c-.42.12-1.02.24-1.5.24-.9 0-1.26-.42-1.26-1.32V6.54H24V4.14zM10.92 2.4H4.08L2.4 13.02 5.82 2.4h3.72l1.98 12.48L10.92 2.4zM0 2.4v19.2h2.82V2.4H0z" />
    </svg>
  );

  const logos = [
    { name: "Vercel", Icon: VercelIcon },
    { name: "Sentry", Icon: SentryIcon },
    { name: "GitHub", Icon: GithubIcon },
    { name: "Docker", Icon: DockerIcon },
    { name: "Netlify", Icon: NetlifyIcon },
    { name: "Stripe", Icon: StripeIcon },
  ];

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

      {/* Logo Cloud Section */}
      <section className="py-12 sm:py-16 bg-slate-800/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-sm font-semibold leading-7 text-cyan-400 tracking-wider">
            TRUSTED BY INDUSTRY LEADERS
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map(({ name, Icon }) => (
              <div key={name} className="flex justify-center items-center">
                <Icon
                  aria-label={`${name} logo`}
                  className="h-8 w-auto text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
              {
                name: "Automated Documentation",
                description:
                  "Never waste time writing docs again. Our AI generates comprehensive documentation as you work, keeping everyone aligned.",
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
                    className="h-8 w-8 text-cyan-400"
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
                    className="h-8 w-8 text-cyan-400"
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

      {/* Stats Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-900 to-cyan-900/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Quantifiable Results
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              See the measurable impact QuantumLeap has delivered for teams like
              yours
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "87%", label: "Faster project completion" },
              { value: "3.5x", label: "More features shipped" },
              { value: "62%", label: "Reduction in meetings" },
              { value: "91%", label: "Teams reporting higher satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-slate-800/30 rounded-xl backdrop-blur-sm"
              >
                <p className="text-5xl font-bold text-cyan-400">{stat.value}</p>
                <p className="mt-4 text-lg text-slate-300">{stat.label}</p>
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
                avatar: "https://randomuser.me/api/portraits/men/46.jpg",
              },
              {
                quote:
                  "As a startup, resource allocation is critical. QuantumLeap identifies potential roadblocks and helps us pivot before we lose momentum. It's indispensable.",
                name: "Alex Chen",
                title: "Founder, SwiftLaunch",
                avatar: "https://randomuser.me/api/portraits/men/46.jpg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl bg-slate-800/50 p-8 ring-1 ring-white/10 hover:ring-cyan-400/30 transition-all duration-300"
              >
                <div className="flex-1">
                  <p className="text-lg text-slate-300">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
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

      {/* Pricing Section */}
      <section className="py-24 sm:py-32 bg-slate-800/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Start for free, upgrade as you grow. No hidden fees.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "per user/month",
                description: "Perfect for small teams getting started",
                features: [
                  "Up to 5 team members",
                  "Basic task automation",
                  "3 project templates",
                  "Email support",
                ],
                cta: "Get Started",
              },
              {
                name: "Professional",
                price: "$79",
                period: "per user/month",
                description: "For growing teams with advanced needs",
                features: [
                  "Up to 20 team members",
                  "Advanced automation",
                  "Unlimited templates",
                  "Priority support",
                  "API access",
                ],
                cta: "Most Popular",
                featured: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "For organizations with complex workflows",
                features: [
                  "Unlimited team members",
                  "All Professional features",
                  "Dedicated account manager",
                  "Custom integrations",
                  "SLA guarantees",
                  "On-premise options",
                ],
                cta: "Contact Sales",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col rounded-2xl p-8 ring-1 ${
                  plan.featured
                    ? "bg-gradient-to-br from-cyan-600/20 to-teal-600/20 ring-cyan-400/50"
                    : "bg-slate-800/50 ring-white/10"
                }`}
              >
                <h3 className="text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-2 text-lg text-slate-300">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-slate-300">{plan.description}</p>
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 w-full rounded-md px-6 py-3 text-center text-lg font-semibold ${
                    plan.featured
                      ? "bg-cyan-600 text-white hover:bg-cyan-500"
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  } transition-colors duration-300`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))] -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your workflow?
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              Join thousands of teams who have accelerated their productivity
              with QuantumLeap.
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
    </div>
  );
}
