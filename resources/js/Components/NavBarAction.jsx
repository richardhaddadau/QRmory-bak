import React from "react";

const NavBarAction = ({ value = "button", destination = null }) => {
    return (
        <a
            className="py-1 px-4 border-qrmory-purple-500 bg-white hover:bg-qrmory-purple-500 border rounded tracking-widest uppercase text-sm text-qrmory-purple-500 hover:text-white font-medium hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
            href={destination}
        >
            {value}
        </a>
    );
};

export default NavBarAction;
