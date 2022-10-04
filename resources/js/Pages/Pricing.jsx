import React, { useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";
import Standard from "@/Layouts/Standard";

const Pricing = (props) => {
    useEffect(() => {
        const navItems = document.querySelectorAll(".nav-item");

        setTimeout(() => {
            navItems[5].classList.add("active");
        }, 0);
    }, []);

    return (
        <>
            <Head title="Pricing" />
            <Standard>
                <div className="relative pt-8 pb-12 flex items-center justify-center col-span-10 h-full w-full bg-stone-100 rounded-3xl">
                    <a href="https://buy.stripe.com/test_cN25kV0sb1pi58I9AA">
                        Test
                    </a>
                </div>
                <p>{import.meta.env.VITE_FAUNA_KEY}</p>
            </Standard>
        </>
    );
};

export default Pricing;
