/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
const Testimonials = () => {
  return (
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
                <p className="text-lg text-slate-300">"{testimonial.quote}"</p>
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
  );
};

export default Testimonials;
