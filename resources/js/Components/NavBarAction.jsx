import React from "react";

const NavBarAction = ({
    value = "button",
    destination = null,
    className = "",
}) => {
    return (
        <a
            className={
                "py-1.5 px-4 hover:bg-qrmory-purple-400 rounded" +
                " uppercase text-sm text-white hover:font-medium" +
                " transition-all duration-300 " +
                className
            }
            href={destination}
        >
            {value}
        </a>
    );
};

export default NavBarAction;
