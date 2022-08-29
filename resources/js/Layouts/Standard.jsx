import React from "react";
import Navigation from "@/Components/Navigation";
import NavBar from "@/Components/NavBar";

const Standard = ({ children }) => {
    // States

    return (
        <div className="relative mx-auto grid grid-cols-12 w-full max-w-7xl">
            <NavBar />
            <main className="col-span-12">{children}</main>
        </div>
    );
};

export default Standard;
