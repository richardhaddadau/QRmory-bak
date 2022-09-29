import React from "react";

const NavBarAction = ({ value = "button", destination = null }) => {
    return (
        <a
            className="py-2 px-5 border-white border-2 rounded-full shadow-qrmory-purple-700 shadow-md text-sm tracking-widest uppercase hover:bg-white text-white hover:text-qrmory-purple-500 hover:font-bold transition-all duration-300"
            href={destination}
        >
            {value}
        </a>
    );
};

export default NavBarAction;
