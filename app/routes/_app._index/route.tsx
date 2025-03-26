import { Blocks, ClockArrowUp, Earth, Handshake, Settings, Users } from "lucide-react";
import { Link } from "react-router";
import { BrMd } from "~/components/utility/line-break";
import { PROJECTS } from "./projects";
import ProjectCard from "./project-card";

export default function Home() {
  return (
    <>
      <header className="lg:pt-16 pb-10 pt-[4rem] h-[70vh] bg-slate-100 flex justify-center flex-col">
        <section className="container justify-between gap-20 items-center md:flex">
          <div className="text-start md:text-start">
            <h1 className="text-4xl text-gray-800 text-start font-extrabold lg:text-6xl md:text-start mt-3 tracking-tight z-10">
              Leveraging technology to empower your business<span className="font-black text-primary-theme">.</span>
            </h1>

            <section className="flex flex-col text-muted-foreground gap-5 mb-10 mt-5">
              <span className="text-sm md:text-lg">
                Using cutting edge methodologies and a user centered <BrMd />
                approach to maximize value to our clients.
              </span>
            </section>

            <div className="flex flex-col gap-5 items-center md:flex-row z-10">
              <Link to="/register" className="bg-[#F19E4B] shadow-md text-white text-center text-sm w-full block font-medium uppercase hover:bg-gray-800 md:inline-block md:w-max px-10 py-2.5 transition">
                Book a meeting
              </Link>
              <a
                rel="noopener"
                href="https://youtu.be/hBDECFvIk8w?si=G_1qfFhyCYJWwVv8"
                target="_blank"
                className="text-[#F19E4B] border border-[#F19E4B] text-center text-sm w-full block font-bold hover:shadow-lg md:inline-block md:w-max px-10 py-2.5 transition"
              >
                See portfolio
              </a>
            </div>

          </div>
          <div className="flex-1 hidden md:block me-14">
            <img
              src="/images/personalised.png"
              alt="Join OwenaHub"
              className="h-[440px]pointer-events-none w-[440px] block mx-auto"
            />
          </div>
        </section>
      </header>

      <main>
        <section className="my-20 container">
          <div className="flex md:flex-row flex-col items-center justify-between gap-10 mb-20">
            <div>
              <h2 className="text-4xl font-semibold pb-5 text-gray-800">
                Our Mission<span className="text-primary-theme font-black">.</span>
              </h2>
              <p className="text-base text-gray-700">
                To provide innovative and strategic IT services aimed at availing our clients with total IT solutions to enable them achieve their business
                objectives and gain a competitive edge in today’s business environment.
              </p>
            </div>

            <div className="flex md:flex-row flex-col items-stretch gap-3">
              <div className="rounded-lg py-12 px-5 border border-gray-200 relative overflow-hidden">
                <div className="absolute -top-10 right-0 opacity-30 bg-gray-100">
                  <Blocks className="h-36 w-36 text-primary-theme" strokeWidth={1} />
                </div>
                <h3 className="font-bold pb-3 text-gray-800">What we build</h3>
                <p className="text-gray-700">
                  A suite of applications designed with usability goals in mind that focus on business process automation.
                </p>
              </div>
              <div className="rounded-lg py-12 px-5 border border-gray-200 relative overflow-hidden">
                <div className="absolute -top-10 right-0 opacity-30">
                  <Handshake className="h-36 w-36 text-primary-theme" strokeWidth={1} />
                </div>
                <h3 className="font-bold pb-3 text-gray-800">What we do</h3>
                <p className="text-gray-700">
                  Our service offerings range from consultancy to software development / customization and biometric verification.
                </p>
              </div>
            </div>
          </div>

          <div className="pb-20 pt-10">
            <div>
              <h2 className="font-bold pb-7 text-5xl md:text-center text-gray-800">
                We create products that <BrMd />
                <span className="text-primary-theme">shape our future</span>.
              </h2>
            </div>

            <div className="flex md:flex-row flex-col gap-5 items-stretch my-7">
              <div className="flex basis-1/3 rounded-xl p-5 flex-col gap-9 bg-secondary-theme">
                <div className="bg-primary-theme rounded-xl p-3 text-white inline-block w-max">
                  <Users className="w-8 h-8 fill-white" />
                </div>
                <h4 className="text-2xl font-medium">
                  200k+ users enjoy and use our <BrMd /> top products
                </h4>
                <div className="flex-grow-1"></div>
                <Link to={"/"} className="underline underline-offset-2">
                  Join us
                </Link>
              </div>

              <div className="flex basis-2/3 rounded-xl p-5 flex-col gap-9 bg-primary-theme">
                <div className="bg-secondary-theme rounded-xl p-3 text-primary-theme inline-block w-max">
                  <Earth className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-medium">
                  Helping connecting businesses <BrMd /> in all 36 states of Nigeria.
                </h4>
                <p className="font-light">
                  Keeping teams productive and connected, <BrMd />
                  no matter where collaboration happens
                </p>
                <div className="flex-grow-1"></div>
                <Link to={"/"} className="underline underline-offset-2">
                  Join us
                </Link>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-5 items-stretch my-7">
              <div className="flex basis-2/3 rounded-xl p-5 flex-col gap-9 bg-secondary-theme">
                <div className="bg-primary-theme rounded-xl p-3 text-white inline-block w-max">
                  <Settings className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-medium">
                  Helping connecting businesses <BrMd /> in all 36 states of Nigeria.
                </h4>
                <p className="font-light">
                  Keeping teams productive and connected, <BrMd />
                  no matter where collaboration happens
                </p>
                <div className="flex-grow-1"></div>
              </div>

              <div className="flex basis-1/3 rounded-xl p-5 flex-col gap-9 bg-primary-theme">
                <div className="bg-secondary-theme rounded-xl p-3 text-primary-theme inline-block w-max">
                  <ClockArrowUp className="w-8 h-8 fill-white" />
                </div>
                <h4 className="text-2xl font-medium">
                  Delivery timelines met all <BrMd />
                  clients needs consistently.
                </h4>
                <div className="flex-grow-1"></div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2 className="font-bold pb-7 text-5xl md:text-center">
                We create products that <BrMd />
                <span className="text-primary-theme">shape our future</span>.
              </h2>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 items-stretch">
              {PROJECTS.map((project) => (
                <ProjectCard
                  name={project.name}
                  tags={project.tags}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

    </>
  )
}
