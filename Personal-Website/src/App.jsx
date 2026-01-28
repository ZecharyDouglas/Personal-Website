import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Headshot from "./assets/Headshot.png";
import CertificationBadge from "./assets/AWSCert.png";
import TTP from "./assets/TTP.png";
import CSILogo from "./assets/CSILogo.png";
import Diploma from "./assets/Diploma.png";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiFlask,
} from "react-icons/si";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617]">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f1e3a] to-[#0b3c5d]" />

      {/* Lava blobs */}
      <div className="absolute inset-0">
        <div className="blob blob-1" />
        <div className="blob blob-1" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-dvh flex-col">
        {/* Nav */}
        <header className="sticky top-0 z-20">
          <div className="backdrop-blur-md bg-indigo-950/35">
            <div className="mx-auto flex max-w-6xl items-center justify-end gap-4 px-6 py-5">
              <a
                href="https://github.com/ZecharyDouglas?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-white/15 p-3 text-white/70 hover:text-white hover:border-white/40 transition"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/zecharydouglas/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-lg border border-white/15 p-3 text-white/70 hover:text-white hover:border-white/40 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:zecharydouglas@gmail.com"
                className="group rounded-lg border border-white/15 p-3 text-white/70 hover:text-white hover:border-white/40 transition"
                aria-label="Email"
              >
                <MdEmail className="h-5 w-5" />
              </a>
            </div>

            <div className="h-px w-full bg-white/10" />
          </div>
        </header>

        {/* HERO (no big card, just a focused layout) */}
        <section className="pt-20 pb-24">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-12">
            {/* Text */}
            <div className="md:col-span-7">
              <p className="font-raleway text-white/70 text-lg">
                Full-Stack Developer • Brooklyn, NYC
              </p>

              <h1 className="mt-4 font-raleway text-white text-5xl md:text-6xl font-semibold tracking-tight">
                Hi, I&apos;m Zechary.
              </h1>

              <p className="mt-6 font-raleway text-white/70 text-xl leading-relaxed max-w-2xl">
                I build web apps end-to-end, from React UIs to Flask + GraphQL
                backends. Let&apos;s build something clean, fast, and real.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <button className="rounded-lg bg-white/90 px-5 py-3 font-raleway font-bold text-indigo-950 hover:bg-white transition">
                  <a href="https://github.com/ZecharyDouglas?tab=repositories">
                    View Projects
                  </a>
                </button>
                <button className="rounded-lg border border-white/20 px-5 py-3 font-raleway font-bold text-white/80 hover:text-white hover:border-white/35 transition">
                  <a href="https://www.linkedin.com/in/zecharydouglas/">
                    Contact
                  </a>
                </button>
              </div>
            </div>

            {/* Headshot (ONLY here) */}
            <div className="md:col-span-5 md:justify-self-end">
              <div className="relative">
                {/* subtle halo */}
                <div className="absolute -inset-4 rounded-full bg-white/10 blur-2xl" />
                <img
                  src={Headshot}
                  width={320}
                  height={320}
                  className="relative h-56 w-56 md:h-72 md:w-72 rounded-full object-cover ring-2 ring-white/15"
                  alt="Headshot"
                />
              </div>
            </div>
          </div>

          {/* soft divider */}
          <div className="mx-auto mt-16 max-w-6xl px-6">
            <div className="h-px w-full bg-white/10" />
          </div>
        </section>

        {/* ABOUT (no card; just spacing + a subtle surface wash) */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-12">
              <h2 className="font-raleway text-white text-4xl md:text-5xl font-semibold tracking-tight">
                My Background
              </h2>

              <div className="mt-6 space-y-4 font-raleway text-white/75 text-lg leading-relaxed">
                <p>
                  I graduated from CUNY College of Staten Island in 2025 with a
                  B.S. in Computer Science.
                </p>
                <p>
                  I completed a Full Stack Bootcamp where I learned web
                  development leveraging the PERN stack and produced a capstone
                  project with three other teammates. Shortly afterwards I
                  completed an internship at{" "}
                  <span className=" text-white hover:text-indigo-300">
                    {" "}
                    <a href="https://www.myluahealth.com">MyLua Health</a>
                  </span>{" "}
                  , where I worked as a Back-End Engineer Intern developing and
                  testing APIs for core functionality and integration of 3rd
                  party services. In my time at the internship I learned a lot
                  about software development using the agile-scrum methodology
                  and working in a cross-functional team.
                </p>
                <p>
                  Some of my recent work includes developing{" "}
                  <span className="text-white">Whisper</span>, a social
                  messaging app using GraphQL subscriptions for real-time,
                  two-way communication. As well as recently aquiring my AWS
                  Cloud Practitioner Certificate, as I am very excited about
                  understanding and implementing various cloud solutions due to
                  their cost effectiveness and increasing ease of deployment and
                  maintainance. Very soon I will also be aquiring my AWS
                  Solutions Architect - Associate Certificate so stay tuned!
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
                  href="https://www.linkedin.com/company/nyc-tech-talent-pipeline/about/"
                >
                  <img
                    src={TTP}
                    height={90}
                    width={140}
                    className="h-16 w-auto opacity-90 group-hover:opacity-100 transition"
                    alt="NYC Tech Talent Pipeline"
                  />
                </a>

                <a
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
                  href="https://www.parchment.com/u/award/469d5f329fde907ae2c22a9616bcc0a6"
                >
                  <img
                    src={Diploma}
                    height={90}
                    width={140}
                    className="h-16 w-auto opacity-90 group-hover:opacity-100 transition"
                    alt="Diploma"
                  />
                </a>

                <a
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
                  href="https://www.csi.cuny.edu/academics-and-research/departments-programs/computer-science"
                >
                  <img
                    src={CSILogo}
                    height={90}
                    width={140}
                    className="h-16 w-auto opacity-90 group-hover:opacity-100 transition"
                    alt="CUNY College of Staten Island"
                  />
                </a>
              </div>
            </div>

            <div className="mt-16 h-px w-full bg-white/10" />
          </div>
        </section>

        {/* CERTIFICATIONS & PROJECTS (no headshot, no nested card) */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <h2 className="font-raleway text-white text-4xl md:text-5xl font-semibold tracking-tight">
                  Certifications & Projects
                </h2>

                <p className="mt-6 font-raleway text-white/75 text-lg leading-relaxed">
                  I like building products that feel snappy and intentional. My
                  recent projects include real-time apps using GraphQL
                  subscriptions and WebSockets. I also like to keep my Data
                  Structures & Algorithms skills sharp by regularly practicing
                  with coding challenges within various domains, and posting the
                  solutions on my Github.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <button className="rounded-lg bg-white/90 px-5 py-3 font-raleway font-bold text-indigo-950 hover:bg-white transition">
                    <a href="https://github.com/ZecharyDouglas/Whisper/tree/main/vite-project">
                      Whisper
                    </a>
                  </button>
                  <button className="rounded-lg border border-white/20 px-5 py-3 font-raleway font-bold text-white/80 hover:text-white hover:border-white/35 transition">
                    <a href="https://github.com/ZecharyDouglas/LeetCode-Solutions">
                      DSA Solutions
                    </a>
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 md:justify-self-end">
                <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 flex items-center justify-center">
                  <a href="https://www.credly.com/badges/75222fbb-7d35-4c1d-b88f-bddb2562b09d/linked_in?t=t7citu">
                    <img
                      src={CertificationBadge}
                      className="h-56 w-auto"
                      alt="AWS Certified Cloud Practitioner"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10">
              {/* Heading */}
              <h2 className="font-raleway tracking-tight font-semibold text-white text-4xl md:text-5xl">
                Tech Stack
              </h2>

              {/* Two columns like the reference */}
              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Front-End */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
                  <h3 className="font-raleway text-white text-3xl font-semibold tracking-tight text-center">
                    Front-End
                  </h3>

                  <ul className="mt-10 space-y-6">
                    <li className="flex items-center gap-4 text-white/85">
                      <SiJavascript className="h-8 w-8 text-white/85" />
                      <span className="font-raleway text-xl font-semibold">
                        JavaScript
                      </span>
                    </li>
                    <li className="flex items-center gap-4 text-white/85">
                      <SiReact className="h-8 w-8 text-white/85" />
                      <span className="font-raleway text-xl font-semibold">
                        React.js
                      </span>
                    </li>
                    <li className="flex items-center gap-4 text-white/85">
                      <SiTailwindcss className="h-8 w-8 text-white/85" />
                      <span className="font-raleway text-xl font-semibold">
                        Tailwind CSS
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Back-End */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
                  <h3 className="font-raleway text-white text-3xl font-semibold tracking-tight text-center">
                    Back-End
                  </h3>

                  <ul className="mt-10 space-y-6">
                    <li className="flex items-center gap-4 text-white/85">
                      <SiGraphql className="h-8 w-8 text-white/85" />
                      <span className="font-raleway text-xl font-semibold">
                        GraphQL
                      </span>
                    </li>
                    <li className="flex items-center gap-4 text-white/85">
                      <SiNodedotjs className="h-8 w-8 text-white/85" />
                      <span className="font-raleway text-xl font-semibold">
                        Node.js
                      </span>
                    </li>
                    <li className="flex items-center gap-4 text-white/85">
                      <SiExpress className="h-8 w-8 text-white/85" />
                      <span className="font-raleway text-xl font-semibold">
                        Express.js
                      </span>
                    </li>
                    <li className="flex items-center gap-4 text-white/85">
                      <SiPostgresql className="h-8 w-8 text-white/85" />
                      <span className="font-raleway text-xl font-semibold">
                        PostgreSQL
                      </span>
                    </li>
                    <li className="flex items-center gap-4 text-white/85">
                      <SiFlask className="h-8 w-8 text-white/85" />
                      <span className="font-raleway text-xl font-semibold">
                        Flask
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer section */}
        <section className="flex justify-center">
          {/* <div className="h-px w-full bg-white/10" /> */}

          <div className="text-white/75 font-semibold flex flex-col justify-center">
            <p className="text-center">
              Built and designed by Zechary Douglas.
            </p>
            <p className="text-center">All rights reserved. ©</p>
          </div>
          <div className="pb-24" />
        </section>
      </div>
    </div>
  );
}

export default App;
