import React from "react";
import ShortLogo from "@/Components/ShortLogo";
import NavBarAction from "@/Components/NavBarAction";

const DashNavBar = ({ props }) => {
    return (
        <>
            <nav className="relative py-4 px-8 top-0 flex flex-col items-center min-h-16 w-full z-50 bg-qrmory-purple-500">
                <div className="flex flex-row flex-nowrap justify-between items-center w-full max-w-7xl">
                    <section className="flex flex-row items-center col-span-3">
                        <a href="/">
                            <ShortLogo className="w-12" />
                        </a>
                    </section>

                    <section className="flex flex-row items-center justify-end col-span-3">
                        <NavBarAction
                            value="Dashboard"
                            destination={route("dashboard")}
                        />

                        <NavBarAction
                            value="Logout"
                            destination={route("dashboard")}
                        />
                    </section>
                </div>
            </nav>
        </>
    );
};

export default DashNavBar;
