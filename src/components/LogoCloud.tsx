import { JSX, SVGProps } from "react";

const LogoCloud = () => {
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
  );
};

export default LogoCloud;
