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
        about: ["About", "/about"],
        features: ["Features", "/features"],
        pricing: ["Pricing", "/pricing"],
        blog: ["Blog", "/blog"],
    };

    const importantLinks = {
        support: ["Contact Support", "/contact"],
        privacy: ["Privacy Policy", "/privacy-policy"],
        terms: ["Terms + Conditions", "/terms-and-conditions"],
    };

    return (
        <>
            <footer className="py-16 text-qrmory-purple-500">
                <div className="mx-auto flex md:flex-row flex-col justify-evenly items-stretch gap-4 w-full max-w-main-card">
                    <article className="w-1/4">
                        <a href="/">
                            <Logo className="mb-2 w-32 fill-qrmory-purple-500" />
                        </a>
                        <p className="mb-8 text-base">
                            Build an arsenal of great QR Codes simply and
                            quickly with QRmory.
                        </p>
                        <h4 className="mb-2 text-xl font-bold">Follow Us</h4>
                        <div className="flex flex-row gap-2">
                            <a
                                className="hover:scale-110 hover:text-qrmory-purple-700 transition-all duration-300"
                                href="https://facebook.com/qrmory"
                                target="_blank"
                            >
                                <FaFacebookSquare size={30} />
                            </a>
                            <a
                                className="hover:scale-110 hover:text-qrmory-purple-700 transition-all duration-300"
                                href="https://twitter.com/qrmory"
                                target="_blank"
                            >
                                <FaTwitterSquare size={30} />
                            </a>
                            <a
                                className="hover:scale-110 hover:text-qrmory-purple-700 transition-all duration-300"
                                href="https://instagram.com/qrmory"
                                target="_blank"
                            >
                                <FaInstagramSquare size={30} />
                            </a>
                        </div>
                    </article>

                    <article className="">
                        <h4 className="mb-4 font-bold text-xl">Quick Links</h4>
                        <ul>
                            {Object.keys(quickLinks).map((key, index) => (
                                <li className="my-2" key={key}>
                                    <a
                                        className="text-base hover:font-bold transition-all duration-300"
                                        href={quickLinks[key][1]}
                                    >
                                        {quickLinks[key][0]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="">
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
