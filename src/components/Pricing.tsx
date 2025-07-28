import { JSX, SVGProps } from "react";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    price: { monthly: "$49", annually: "$40" },
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Up to 5 team members",
      "Core task automation",
      "Standard integrations",
      "Community support",
    ],
    featured: false,
    cta: "Start your trial",
  },
  {
    name: "Professional",
    id: "tier-professional",
    href: "#",
    price: { monthly: "$99", annually: "$80" },
    description: "For growing teams that need more power and customization.",
    features: [
      "Up to 25 team members",
      "Advanced automation & AI insights",
      "Premium integrations",
      "Priority email & chat support",
      "API Access",
    ],
    featured: true,
    cta: "Start your trial",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "Custom", annually: "Custom" },
    description:
      "For large organizations with complex security and support needs.",
    features: [
      "Unlimited team members",
      "Custom AI models",
      "Dedicated account manager",
      "Enterprise-grade security & SSO",
      "24/7 dedicated support & SLAs",
    ],
    featured: false,
    cta: "Contact sales",
  },
];

const Pricing = () => {
  // CheckIcon is now defined directly inside the component
  const CheckIcon = (
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );

  return (
    <section
      id="pricing"
      className="relative isolate bg-slate-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The Right Plan for Your Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Simple, transparent pricing. No hidden fees. Choose the plan that
            fits your needs and start building faster today.
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 transition-all duration-300 ${
                tier.featured
                  ? "bg-violet-900/30 ring-2 ring-violet-400 lg:scale-105"
                  : "bg-slate-800/50 ring-white/10"
              }`}
            >
              <div>
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-7 text-white"
                >
                  {tier.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-400">
                  {tier.description}
                </p>
                <div className="mt-6 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    {tier.price.monthly}
                  </span>
                  <span className="text-base font-normal text-slate-400">
                    /user/month
                  </span>
                </div>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-slate-300"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-violet-400"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold transition-colors duration-300 ${
                  tier.featured
                    ? "bg-violet-600 text-white shadow-sm hover:bg-violet-500 focus-visible:outline-violet-600"
                    : tier.name === "Enterprise"
                    ? "text-white ring-1 ring-inset ring-white/10 hover:ring-white/30"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Background Aurora */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+20rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%+40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};

export default Pricing;
