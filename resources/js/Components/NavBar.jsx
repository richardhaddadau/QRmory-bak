import React from "react";

import Navigation from "@/Components/Navigation";
import Logo from "@/Components/Logo";
import NavBarAction from "@/Components/NavBarAction";

const NavBar = ({ className = "", absolute = true }) => {
    const navClasses =
        className +
        " " +
        (absolute ? "absolute" : "relative") +
        " py-4 px-8 top-0 flex flex-col items-center min-h-16 w-full";

    return (
        <>
            <nav className={navClasses}>
                <div className="grid grid-cols-12 col-span-12 w-full max-w-7xl">
                    <section className="flex flex-row items-center col-span-3">
                        <a href="/">
                            <Logo className="w-28" />
                        </a>
                    </section>
                    <section className="flex flex-row items-center col-span-6">
                        {/*<Navigation />*/}
                    </section>
                    <section className="flex flex-row items-center justify-end col-span-3">
                        {/*<NavBarAction*/}
                        {/*    value="Login"*/}
                        {/*    action={() => console.log("Login")}*/}
                        {/*/>*/}
                    </section>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
