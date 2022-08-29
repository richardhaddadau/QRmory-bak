import React from "react";

const NavBarAction = ({ value = "button", action = null }) => {
    return (
        <button className="py-2 px-6 border-white border-2" onClick={action}>
            {value}
        </button>
    );
};

export default NavBarAction;
