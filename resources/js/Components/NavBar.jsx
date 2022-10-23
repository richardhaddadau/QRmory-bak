import React, { useEffect } from "react";

import Navigation from "@/Components/Navigation";
import Logo from "@/Components/Logo";
import NavBarAction from "@/Components/NavBarAction";
import ShortLogo from "@/Components/ShortLogo";

const NavBar = ({
    props,
    className = "",
    absolute = true,
    logoColour = "white",
    fullLogo = true,
}) => {
    const navClasses =
        className +
        " " +
        (absolute ? "absolute" : "relative") +
        " py-4 px-8 top-0 flex flex-col items-center min-h-16 w-full z-50";

    return (
        <>
            <nav className={navClasses}>
                <div className="grid grid-cols-12 col-span-12 w-full max-w-7xl">
                    <section className="flex flex-row items-center col-span-3">
                        <a href="/">
                            {fullLogo ? (
                                <Logo
                                    className="w-28"
                                    logoColour={logoColour}
                                />
                            ) : (
                                <ShortLogo
                                    className="w-12"
                                    logoColour={logoColour}
                                />
                            )}
                        </a>
                    </section>
                    <section className="flex flex-row items-center col-span-6">
                        <Navigation />
                    </section>
                    <section className="flex flex-row items-center justify-end col-span-3">
                        {props.auth.user ? (
                            <section className="flex flex-row items-center justify-end gap-2">
                                {props.auth.user ? "" : ""}
                                <NavBarAction
                                    value="Dashboard"
                                    destination={route("dashboard")}
                                />

                                <NavBarAction
                                    value="Sign Out"
                                    destination={route("dashboard")}
                                />
                            </section>
                        ) : (
                            <section className="flex flex-row items-center justify-end gap-2">
                                <NavBarAction
                                    value="Create a Free Account"
                                    destination={route("register")}
                                    className="bg-qrmory-purple-300 hover:bg-qrmory-purple-400 text-qrmory-purple-900 hover:text-white font-medium border-qrmory-purple-300 shadow-lg shadow-qrmory-purple-900 hover:translate-x-1 hover:-translate-y-1"
                                />

                                <NavBarAction
                                    value="Sign In"
                                    destination={route("login")}
                                />
                            </section>
                        )}
                    </section>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
