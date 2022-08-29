import React from "react";

const Navigation = (props) => {
    // Constants
    const navItems = {
        about: ["About", "/"],
        features: ["Features", "/features"],
        pricing: ["Pricing", "/pricing"],
        blog: ["Blog", "/blog"],
    };

    return (
        <>
            <ul className="mx-auto flex flex-row items-center justify-between w-full">
                {Object.keys(navItems).map((key) => {
                    return (
                        <li className="uppercase" key={key}>
                            {navItems[key][0]}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Navigation;
