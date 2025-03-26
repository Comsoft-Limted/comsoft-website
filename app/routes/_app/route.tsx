import { Link, Outlet, useNavigation } from "react-router";
import type { Route } from "./+types/route";
import { useEffect, useState } from "react";
import { ChevronRight, Menu } from "lucide-react";
import { Navigation } from "./navigation-menu";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Comsoft Limited" },
        { name: "description", content: "Leveraging technology to empower your business." },
    ];
}

export default function DefaultLayout() {
    const { state } = useNavigation();
    let busy: boolean = state === "submitting" || state === "loading";

    const [menu, setMenu] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="container -translate-x-1/2 fixed left-1/2 px-4 top-4 transform z-50">
                {/* Navbar */}
                <nav
                    className={`transition-all duration-300 ease-in-out ${scrolled ? "bg-white/80 backdrop-blur shadow-[0_5px_35px_rgba(0,0,0,0.1)] py-3 px-3" : "bg-transparent py-0"
                        } border-gray-200 flex justify-between items-center gap-2`}
                >
                    <section className="flex items-center gap-4">
                        <div className="flex gap-2 items-center">
                            {/* <img src="/images/logos/logo.png" alt="logo" width={38} /> */}
                            <Link to="/" className="text-primary font-bold md:text-lg">
                                <span>Comsoft</span> <span className="font-light text-xs">LTD</span>
                            </Link>
                        </div>

                    </section>
                    <div className="hidden md:block">
                        <Navigation />
                    </div>
                    <button aria-label="Menu" className="block md:hidden" type="button" onClick={() => setMenu(!menu)}>
                        <Menu />
                    </button>
                </nav>
                {menu && (
                    <div className="bg-white rounded-lg shadow-2xl block md:hidden mt-1 mx-auto px-4 py-4 z-50">
                        <div>
                            <div className="mb-3">
                                <div className="border-b py-4">
                                    <Link to={"/courses"} className="text-primary-foreground font-bold">
                                        Courses
                                    </Link>
                                </div>
                                <div className="border-b py-4">
                                    <Link to={"/classes"} className="text-primary-foreground font-bold">
                                        Classes
                                    </Link>
                                </div>
                                <div className="py-4">
                                    <a href="tel:+2348026658956" className="flex text-foreground text-sm font-light gap-2 items-center">
                                        <span>Contact support</span> <ChevronRight size={12} />
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <Link to="/login" className="bg-white border border-secondary-foreground rounded-[6px] text-center text-secondary-foreground text-sm w-full block font-extrabold hover:shadow-lg py-2 uppercase">
                                    Log in
                                </Link>
                                <Link to="/register" className="bg-[#083156] border border-[#083156] rounded-[6px] text-[#FBE56D] text-center text-sm w-full block font-bold hover:bg-gray-800 py-2 uppercase">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Outlet />
            <footer>
                <div className="bg-gray-50 py-5">
                    <div className="container">
                        <div className="max-w-2xl mb-20">
                            <h6 className="text-xl font-medium pb-4">
                                Comsoft Limited
                            </h6>
                            <p className="text-gray-600 text-sm">
                                Comsoft Limited has a track record of successes and growth spanning more than 20 years.
                                Comsoft Limited has and continues to provide successful Information Technology (IT) solutions to government and private sector clients across Africa.
                            </p>
                        </div>
                        <div className="text-muted-foreground text-sm">
                            <span>&copy; 2021 Comsoft limited</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
