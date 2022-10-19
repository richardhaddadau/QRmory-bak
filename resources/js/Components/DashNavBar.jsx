import React from "react";
import ShortLogo from "@/Components/ShortLogo";
import NavBarAction from "@/Components/NavBarAction";
import { FaPowerOff } from "react-icons/all";

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
                    <FaPowerOff
                        color={"white"}
                        size={24}
                        className="cursor-pointer hidden xs:flex"
                    />
                    <NavBarAction
                        value="Logout"
                        destination={route("dashboard")}
                        className="flex xs:hidden"
                    />
                </section>
            </nav>
        </>
    );
};

export default DashNavBar;
