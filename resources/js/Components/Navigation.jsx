import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Navigation = (props) => {
    // Constants
    const navItems = {
        about: ["About", "/about"],
        features: ["Features", "/features"],
        pricing: ["Pricing", "/pricing"],
        blog: ["Blog", "/blog"],
    };

    return (
        <>
            <ul className="mx-auto flex flex-row items-center justify-between w-full">
                {Object.keys(navItems).map((key) => {
                    return (
                        <li
                            className="uppercase hover:font-bold transition-all duration-300"
                            key={key}
                        >
                            <Link href={navItems[key][1]}>
                                {navItems[key][0]}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Navigation;
