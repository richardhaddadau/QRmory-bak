import React from "react";

import Navigation from "@/Components/Navigation";
import Logo from "@/Components/Logo";
import NavBarAction from "@/Components/NavBarAction";

const NavBar = ({ fixed = false, absolute = false }) => {
    return (
        <>
            <nav
                className={
                    "absolute px-8 top-0 grid grid-cols-12 col-span-12 h-16 w-full max-w-7xl"
                }
            >
                <div className="flex flex-row items-center  col-span-3">
                    <a href="/">
                        <Logo className="w-28" />
                    </a>
                </div>
                <div className="flex flex-row items-center col-span-6">
                    {/*<Navigation />*/}
                </div>
                <div className="flex flex-row items-center justify-end col-span-3">
                    {/*<NavBarAction*/}
                    {/*    value="Login"*/}
                    {/*    action={() => console.log("Login")}*/}
                    {/*/>*/}
                </div>
            </nav>
        </>
    );
};

export default NavBar;
