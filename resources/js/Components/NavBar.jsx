import React, { useEffect } from "react";

import Navigation from "@/Components/Navigation";
import Logo from "@/Components/Logo";
import NavBarAction from "@/Components/NavBarAction";

const NavBar = ({
    props,
    className = "",
    absolute = true,
    logoColour = "white",
}) => {
    const navClasses =
        className +
        " " +
        (absolute ? "absolute" : "relative") +
        " py-4 px-8 top-0 flex flex-col items-center min-h-16 w-full z-50";

    // useEffect(() => {
    //
    // }, []);

    return (
        <>
            <nav className={navClasses}>
                <div className="grid grid-cols-12 col-span-12 w-full max-w-7xl">
                    <section className="flex flex-row items-center col-span-3">
                        <a href="/">
                            <Logo className="w-28" logoColour={logoColour} />
                        </a>
                    </section>
                    <section className="flex flex-row items-center col-span-6">
                        <Navigation />
                    </section>
                    <section className="flex flex-row items-center justify-end col-span-3">
                        {props.auth.user ? (
                            <NavBarAction
                                value="Dashboard"
                                destination={route("dashboard")}
                            />
                        ) : (
                            <NavBarAction
                                value="Login"
                                destination={route("login")}
                            />
                        )}
                    </section>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
