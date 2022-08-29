import React from "react";
import Standard from "@/Layouts/Standard";
import NavBar from "@/Components/NavBar";

const Welcome = (props) => {
    return (
        <>
            <header className="main-hero flex flex-col justify-center items-center h-hero bg-hero text-white">
                <NavBar />
                <h1 className="font-header text-5xl">
                    Generate an <span>arsenal</span> of QR Codes
                </h1>
                <h2 className="text-xl">
                    Be equipped for anything with QRmory
                </h2>
            </header>
        </>
    );
};

export default Welcome;
