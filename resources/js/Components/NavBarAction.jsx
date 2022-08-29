import React from "react";

const NavBarAction = ({ value = "button", action = null }) => {
    return (
        <button
            className="py-2 px-6 border-white border-2 rounded-full text-sm uppercase hover:bg-white hover:text-qrmory-purple-500 hover:font-bold transition-all duration-300"
            onClick={action}
        >
            {value}
        </button>
    );
};

export default NavBarAction;
