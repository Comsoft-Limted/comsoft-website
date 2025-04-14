import { MousePointerClick } from "lucide-react";
import { BrMd } from "~/components/utility/line-break";

export default function AboutUs() {
    return (
        <div className="animated fadeIn">
            <div className="lg:pt-16 pb-10 pt-[4rem] bg-gray-700 flex justify-center flex-col">
                <section className="container justify-between gap-2 items-center md:flex mb-1 mt-10">
                    <div className="text-start flex-1 md:text-start">
                        <h1 className="text-4xl text-white text-start font-extrabold lg:text-6xl md:text-start mt-3 tracking-tight z-10">
                            We build cost effective solutions that deliver maximum value to our clients.
                        </h1>

                        <section className="flex flex-col text-white font-light mb-10 mt-5">
                            <span className="text-sm md:text-lg">
                                Comsoft Limited has a track record of successes and growth spanning more than 20 years.
                                Comsoft Limited has and continues to provide successful Information Technology (IT) solutions to government and private sector clients across Africa.
                            </span>
                        </section>
                    </div>
                    <div className="flex-1 hidden md:block">
                        <img
                            src="/images/about-us/office-img.jpg"
                            alt="..."
                            className="h-[440px] aspect-video pointer-events-none w-auto mx-auto"
                        />
                    </div>
                </section>

                <section className="container justify-between gap-1 items-stretch md:flex">
                    <div className="flex flex-col gap-1 flex-1 items-stretch md:flex-row z-10">
                        <div className="py-5 px-10 bg-secondary-theme flex-1 flex flex-col justify-center gap-2">
                            <span className="text-sm font-bold uppercase text-primary-theme">since</span>
                            <div className='font-extrabold text-7xl text-primary-theme'>1996</div>
                            <div className='font-semibold'>in development</div>
                        </div>
                        <div className="py-5 px-10 bg-secondary-theme flex-1 flex flex-col justify-center gap-2">
                            <div className='font-extrabold text-7xl text-primary-theme'>50+</div>
                            <div className='font-semibold'>Global clients</div>
                        </div>
                    </div>
                    <div className="bg-primary-theme py-20 px-10">
                        <h2 className="text-3xl font-bold mb-14 text-white">
                            We are open to partnerships <BrMd /> and collaborations.
                            Reach Out Today!
                        </h2>
                        <a href="3" className="px-10 py-4 font-semibold rounded-full text-xl bg-white text-primary-theme">
                            Contact us
                        </a>
                    </div>
                </section>
            </div>

            <section className="container md:flex gap-20 mt-20 relative">
                <h2 className="text-4xl md:text-6xl font-bold flex-1/3 mb-10">
                    What defines Comsoft<span className="font-black text-primary-theme md:text-7xl">.</span>
                </h2>

                <div className="flex-2/3 flex flex-col">
                    <div className="md:flex flex-3/5 gap-1 pb-10 border-b-2 border-dashed">
                        <div className="flex-1/5 text-2xl font-extrabold hover:text-primary-theme transition">
                            ICT Consulting
                        </div>
                        <div className="flex-3/5">
                            We offer full Information and Communication Technology services ranging from Computer Systems supply, Internet Connectivity,
                            Website Design and Hosting, Software Development, System Automations, Maintenance, and Corporate ICT Training.
                        </div>
                    </div>
                    <div className="md:flex flex-3/5 gap-1 py-10 border-b-2 border-dashed">
                        <div className="flex-1/5 text-2xl font-extrabold hover:text-primary-theme transition">
                            Project Based Services
                        </div>
                        <div className="flex-3/5">
                            Services such as consulting on major system purchases, system/network installation and testing, also major disaster recovery. Proposed and billed on a project and milestone basis,
                            project consulting offers our clients a way to harness our specific qualities and use our expertise to solve specific problems, develop and/or implement plans, and develop specific information systems.
                        </div>
                    </div>
                    <div className="md:flex flex-3/5 gap-1 py-10 border-b-2 border-dashed">
                        <div className="flex-1/5 text-2xl font-extrabold hover:text-primary-theme transition">
                            Technical Aid
                        </div>
                        <div className="flex-3/5">
                            Short-term assignments helping an organization solve software or hardware related problem. This includes both emergency and
                            non-emergency technical assistance. Give professional consultancy on Information Technology and project management.
                        </div>
                    </div>
                    <div className="md:flex flex-3/5 gap-1 py-10 border-b-2 border-dashed">
                        <div className="flex-1/5 text-2xl font-extrabold hover:text-primary-theme transition">
                            Biometric Authentication Services
                        </div>
                        <div className="flex-3/5">
                            We offer biometric integrated software development for staff audit, payroll, time and attendance register, e-governance, biometric authentication,
                            fingerprint identification for high security environment and Automatic Biometric Identification System (ABIS) for fingerprint identification.\
                        </div>
                    </div>
                    <div className="md:flex flex-3/5 gap-1 py-10 border-b-2 border-dashed">
                        <div className="flex-1/5 text-2xl font-extrabold hover:text-primary-theme transition">
                            IT Training
                        </div>
                        <div className="flex-3/5">
                            Our experience has shown that most computer systems and network installations have been grossly under-utilised due to lack of sufficient knowledge of the capabilities of the installed systems. Our training services are aimed at sensitizing and training our clients / users in the use of their IT installations towards enhancing
                            their productivity and technological advancement. Our training packages cover the following among others.
                        </div>
                    </div>
                </div>
                <MousePointerClick strokeWidth={1} className="absolute text-primary-theme text-9xl h-50 w-50 md right-10 md:left-0 bottom-50 -z-10 opacity-20 md:opacity-100" />
            </section>
        </div>
    )
}
