import React from "react";
import { Link } from "@inertiajs/inertia-react";
import NavLogo from "@/Components/NavLogo";
import {
    FaEnvelopeOpenText,
    FaFolderOpen,
    FaNewspaper,
    FaPlusCircle,
    FaQuestionCircle,
    FaShoppingBasket,
    FaStar,
} from "react-icons/fa";

const Standard = ({ children }) => {
    const navItems = {
        createQR: ["Create QR Code", <FaPlusCircle />, "/"],
        myCodes: ["My Codes", <FaFolderOpen />, "/my-codes"],
        about: ["About", <FaQuestionCircle />, "/about"],
        features: ["Features", <FaStar />, "/features"],
        blog: ["Blog", <FaNewspaper />, "/blog"],
        pricing: ["Pricing", <FaShoppingBasket />, "/pricing"],
        contact: ["Contact", <FaEnvelopeOpenText />, "/contact"],
    };

    return (
        <main className="relative grid grid-cols-12 w-full h-screen">
            <div className="relative pl-4 flex flex-col col-span-2 h-full bg-hot-pink-500 z-10">
                <div className="mt-6 mb-12 mx-auto w-full aspect-square max-h-32">
                    <NavLogo color="white" />
                </div>
                <div className="grow">
                    {Object.keys(navItems).map((key, index) => (
                        <Link
                            href={navItems[key][2]}
                            className="p-3 flex flex-row items-center gap-2 rounded-l-full text-hot-pink-100 hover:bg-hot-pink-200 transition-all duration-300 cursor-pointer nav-item"
                            key={key - index}
                        >
                            {navItems[key][1] || null} {navItems[key][0]}
                        </Link>
                    ))}
                </div>
                <div className="p-3 mb-6 flex flex-row items-center justify-self-end gap-2 transition-all duration-300 nav-item">
                    <Link
                        href={route("login")}
                        className="text-hot-pink-100 underline-offset-8 hover:text-white hover:underline transition-all duration-300"
                    >
                        Login
                    </Link>{" "}
                    /{" "}
                    <Link
                        href={route("register")}
                        className="text-hot-pink-100 underline-offset-8 hover:text-white hover:underline transition-all duration-300"
                    >
                        Register
                    </Link>{" "}
                </div>
            </div>

            {children}
        </main>
    );
};

export default Standard;
