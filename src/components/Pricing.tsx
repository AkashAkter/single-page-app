const Pricing = () => {
  return (
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
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
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
  );
};

export default Pricing;
