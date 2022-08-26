import React, { useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";
import Standard from "@/Layouts/Standard";

const MyCodes = (props) => {
    useEffect(() => {
        const navItems = document.querySelectorAll(".nav-item");

        setTimeout(() => {
            navItems[1].classList.add("active");
        }, 0);
    }, []);

    return (
        <>
            <Head title="My Codes" />
            <Standard>
                <div className="relative pt-8 pb-12 flex items-center justify-center col-span-10 h-full w-full bg-stone-100 rounded-3xl"></div>
            </Standard>
        </>
    );
};

export default MyCodes;
