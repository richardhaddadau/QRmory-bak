import React, { useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";
import { faunaDriver } from "@/Helpers/FaunaDriver";

const Visit = (props) => {
    useEffect(async () => {
        const fauna = faunaDriver;
        const checkLink = await fauna.GetLinkBySlug(props[0]);

        // Check if slug exists
        console.log(
            checkLink["data"].length > 0 ? checkLink["data"] : "boooooo"
        );
    }, []);

    return (
        <>
            <Head title="Visit" />
            <div className="py-8 flex flex-col justify-start items-center bg-qrmory-purple-500 text-white">
                <div className="px-6 w-full max-w-7xl text-center">
                    <h1 className="font-header text-5xl hero-heading">
                        Thanks for Visiting
                    </h1>
                    <h3 className="mt-2 text-xl tracking-widest uppercase drop-shadow-lg">
                        The Slug for this visit is: {props[0]}
                    </h3>
                </div>
            </div>
        </>
    );
};

export default Visit;
