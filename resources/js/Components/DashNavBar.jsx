import React from "react";
import ShortLogo from "@/Components/ShortLogo";
import NavBarAction from "@/Components/NavBarAction";
import { FaPowerOff } from "react-icons/all";
import { Link } from "@inertiajs/inertia-react";

const DashNavBar = ({ props }) => {
    return (
        <>
            <nav className="relative py-4 px-8 top-0 flex flex-row items-center justify-between min-h-16 w-full z-50 bg-qrmory-purple-500">
                <section className="flex flex-row items-center col-span-3">
                    <a href="/">
                        <ShortLogo className="w-12" />
                    </a>
                </section>

                <section className="flex flex-row items-center justify-end col-span-3">
                    {/* TODO: Action Logout */}
                    <Link href={route("logout")} method={"post"} as={"button"}>
                        <FaPowerOff
                            color={"white"}
                            size={24}
                            className="cursor-pointer hidden xs:flex"
                            title={"Sign out"}
                        />
                        <article
                            className={
                                "py-1 px-4 flex xs:hidden border-1 border-white hover:bg-white" +
                                " rounded tracking-widest uppercase text-sm text-white hover:text-qrmory-purple-500" +
                                " font-medium hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 "
                            }
                        >
                            Sign Out
                        </article>
                    </Link>
                </section>
            </nav>
        </>
    );
};

export default DashNavBar;
