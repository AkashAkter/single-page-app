/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 py-24 sm:py-32">
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
            Customer Stories
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by High-Velocity Teams
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            See how innovative companies are leveraging QuantumLeap to build
            faster and smarter.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                "QuantumLeap's AI task delegation cut our project kickoff time in half. It's like having a world-class project manager built into our workflow.",
              name: "David",
              title: "CTO, Innovatech",
              avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            },
            {
              quote:
                "The predictive asset generation is unbelievable. It suggests React components and CSS that are about 90% of what we need. The productivity gain is immense.",
              name: "Maria Garcia",
              title: "Lead Designer, PixelPerfect",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              quote:
                "As a startup, resource allocation is critical. QuantumLeap identifies potential roadblocks and helps us pivot before we lose momentum. It's indispensable.",
              name: "Alex Chen",
              title: "Founder, SwiftLaunch",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl bg-slate-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/80 hover:shadow-lg hover:ring-1 hover:ring-violet-400/30"
            >
              <div className="flex-1">
                <svg
                  className="h-8 w-8 text-violet-400 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="mt-4 text-lg text-slate-300">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-violet-400/50 transition-all duration-300">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
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

export default Testimonials;
