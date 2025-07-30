/* eslint-disable react/no-unescaped-entities */
const Stats = () => {
  const stats = [
    { value: "92%", label: "Faster Project Completion" },
    { value: "3.5x", label: "Increase in Features Shipped" },
    { value: "65%", label: "Reduction in Repetitive Tasks" },
    { value: "98%", label: "Team Satisfaction Score" },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-900 to-violet-950/25 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Driven by Data, Loved by Teams
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            QuantumLeap AI doesn't just streamline your work—it delivers
            measurable improvements to performance, speed, and satisfaction.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse gap-y-2 rounded-2xl bg-slate-800/50 p-8 text-center ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:ring-violet-400/20"
            >
              <dt className="text-base leading-7 text-slate-400">
                {stat.label}
              </dt>
              <dd className="text-5xl font-extrabold tracking-tight text-violet-400">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stats;
