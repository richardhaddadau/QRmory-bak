import React from "react";

const NavBarAction = ({
    value = "button",
    destination = null,
    className = "",
}) => {
    return (
        <a
            className={
                "py-1 px-4 hover:bg-qrmory-purple-500 border rounded" +
                " uppercase text-sm text-qrmory-purple-500 hover:text-white hover:font-medium" +
                " hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 " +
                className
            }
            href={destination}
        >
            {value}
        </a>
    );
};

export default NavBarAction;
