import React from "react";
import { Link } from "@inertiajs/inertia-react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from "react-icons/all";
import Logo from "@/Components/Logo";

const MyFooter = () => {
    // Constants
    const quickLinks = {
        // about: ["About", "/about"],
        // features: ["Features", "/features"],
        // pricing: ["Pricing", "/pricing"],
        // blog: ["Blog", "/blog"],
    };

    const importantLinks = {
        support: ["Contact Support", route("contact")],
        privacy: ["Privacy Policy", route("privacy")],
        terms: ["Terms + Conditions", route("terms")],
        cookie: ["Cookie Policy", route("cookie")],
    };

    return (
        <>
            <footer className="mx-auto my-8 py-8 px-8 w-full max-w-7xl border-t-1 border-qrmory-purple-100 text-qrmory-purple-500">
                <div className="mx-auto flex md:flex-row flex-col md:justify-between justify-center items-stretch md:gap-4 gap-16 w-full md:text-left text-center">
                    <article className="flex flex-col md:w-1/4 w-full md:items-start items-center">
                        <a href="/">
                            <Logo className="mb-2 w-32 fill-qrmory-purple-500" />
                        </a>
                        <p className="mb-8 text-base">
                            Build an arsenal of great QR Codes simply and
                            quickly with QRmory.
                        </p>
                        {/*<h4 className="mb-2 text-xl font-bold">Follow Us</h4>*/}
                        {/*<div className="flex flex-row gap-2 md:justify-start justify-center">*/}
                        {/*    <a*/}
                        {/*        className="hover:scale-110 hover:text-qrmory-purple-700 transition-all duration-300"*/}
                        {/*        href="https://facebook.com/qrmory"*/}
                        {/*        target="_blank"*/}
                        {/*    >*/}
                        {/*        <FaFacebookSquare size={30} />*/}
                        {/*    </a>*/}
                        {/*    <a*/}
                        {/*        className="hover:scale-110 hover:text-qrmory-purple-700 transition-all duration-300"*/}
                        {/*        href="https://twitter.com/qrmory"*/}
                        {/*        target="_blank"*/}
                        {/*    >*/}
                        {/*        <FaTwitterSquare size={30} />*/}
                        {/*    </a>*/}
                        {/*    <a*/}
                        {/*        className="hover:scale-110 hover:text-qrmory-purple-700 transition-all duration-300"*/}
                        {/*        href="https://instagram.com/qrmory"*/}
                        {/*        target="_blank"*/}
                        {/*    >*/}
                        {/*        <FaInstagramSquare size={30} />*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </article>

                    {/*<article className="md:w-1/5 w-full">*/}
                    {/*    <h4 className="mb-4 font-bold text-xl">Quick Links</h4>*/}
                    {/*    <ul>*/}
                    {/*        {Object.keys(quickLinks).map((key, index) => (*/}
                    {/*            <li className="my-2" key={key}>*/}
                    {/*                <a*/}
                    {/*                    className="text-base hover:font-bold transition-all duration-300"*/}
                    {/*                    href={quickLinks[key][1]}*/}
                    {/*                >*/}
                    {/*                    {quickLinks[key][0]}*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</article>*/}

                    <article className="md:w-1/5 w-full">
                        <h4 className="mb-4 font-bold text-xl">
                            Important Information
                        </h4>
                        <ul>
                            {Object.keys(importantLinks).map((key, index) => (
                                <li className="my-2" key={key}>
                                    <a
                                        className="text-base hover:font-bold transition-all duration-300"
                                        href={importantLinks[key][1]}
                                    >
                                        {importantLinks[key][0]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </footer>
        </>
    );
};

export default MyFooter;
