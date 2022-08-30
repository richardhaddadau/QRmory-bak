import React from "react";

const NavBarAction = ({ value = "button", action = null }) => {
    return (
        <button
            className="py-2 px-5 border-white border-2 rounded-full shadow-qrmory-purple-900 shadow-lg text-sm tracking-widest uppercase hover:bg-white hover:text-qrmory-purple-500 hover:font-bold transition-all duration-300"
            onClick={action}
        >
            {value}
        </button>
    );
};

export default NavBarAction;
