const Stats = () => {
  return (
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
  );
};

export default Stats;
