import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { QRCodeSVG } from "qrcode.react";

import {
    FaChevronDown,
    FaChevronUp,
    FaEnvelopeOpenText,
    FaFolderOpen,
    FaNewspaper,
    FaPlusCircle,
    FaQuestionCircle,
    FaShoppingBasket,
    FaStar,
} from "react-icons/fa";
import WebsiteQR from "@/Components/Controls/WebsiteQR";
import EmailQR from "@/Components/Controls/EmailQR";
import FacebookQR from "@/Components/Controls/FacebookQR";
import YoutubeQR from "@/Components/Controls/YoutubeQR";
import PhoneQR from "@/Components/Controls/PhoneQR";
import SmsQR from "@/Components/Controls/SmsQR";
import TextQR from "@/Components/Controls/TextQR";
import TwitterQR from "@/Components/Controls/TwitterQR";
import SocialMediaQR from "@/Components/Controls/SocialMediaQR";
import NavLogo from "@/Components/NavLogo";

let selectorTop = 0;
let selectorPage = 1;
let totalSelectorPages = 0;
let pageHeight = 0;

const Welcome = (props) => {
    // States
    const [selectorPosition, setSelectorPosition] = useState(0);
    const [qrValue, setQrValue] = useState("Welcome to QRmory!");
    const [qrTitle, setQrTitle] = useState("new-qrmory-code");
    const [textValue, setTextValue] = useState("");
    const [qrControl, setQrControl] = useState(null);
    const [qrChanged, setQrChanged] = useState(true);

    const qrTypes = {
        website: [
            "Website",
            "Link to a page or site",
            <WebsiteQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        email: [
            "Email",
            "Preset an email",
            <EmailQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        socialMedia: [
            "Social Media",
            "Share your profiles",
            <SocialMediaQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        eBusinessCard: ["E-Biz Card", "The modern business card"],
        poll: ["Poll", "Run a quick poll"],
        reviews: ["Reviews", "Collect customer reviews"],
        event: ["Event", "Promote an event"],
        document: ["Document", "Share a PDF document"],
        audio: ["Audio", "Share an sound file"],
        video: ["Video", "Share a quick video"],
        phone: [
            "Phone",
            "Set up an easy call",
            <PhoneQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        sms: [
            "SMS",
            "Preset an SMS",
            <SmsQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        text: [
            "Text",
            "Display a text message",
            <TextQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        // wifi: ["WiFi", "Share WiFi details"],
        // location: ["Location", "Share a map address"],
        facebook: [
            "Facebook",
            "Facebook page/group",
            <FacebookQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        twitter: [
            "Twitter",
            "Twitter account",
            <TwitterQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        youTube: [
            "YouTube",
            "YouTube video",
            <YoutubeQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        bitcoin: ["Bitcoin", "Quick Bitcoin payments"],
        ethereum: ["Ethereum", "Quick Ethereum payments"],
    };

    const navItems = {
        createQR: ["Create QR Code", <FaPlusCircle />],
        myCodes: ["My Codes", <FaFolderOpen />],
        about: ["About", <FaQuestionCircle />],
        features: ["Features", <FaStar />],
        blog: ["Blog", <FaNewspaper />],
        pricing: ["Pricing", <FaShoppingBasket />],
        contact: ["Contact", <FaEnvelopeOpenText />],
    };

    const handleDownload = () => {
        const svgData = document.querySelector("#final-qr").outerHTML;
        const svgBlob = new Blob([svgData], {
            type: "image/svg+xml;charset=utf-8",
        });
        const svgUrl = URL.createObjectURL(svgBlob);
        const downloadLink = document.createElement("a");
        downloadLink.download = qrTitle.length
            ? qrTitle + ".svg"
            : "awesome-qr.svg";
        document.querySelector("#final-qr").append(downloadLink);
        downloadLink.href = svgUrl;
        downloadLink.click();
        downloadLink.remove();
    };

    const addStyle = (el, styleClass) => {
        if (!el.classList.contains(styleClass)) el.classList.add(styleClass);
    };

    const removeStyle = (el, styleClass) => {
        if (el.classList.contains(styleClass)) el.classList.remove(styleClass);
    };

    useEffect(() => {
        const navItems = document.querySelectorAll(".nav-item");
        const qrSelectors = document.querySelectorAll(".qr-selector");
        const qrWindow = document.querySelector("#selector-window");
        const qrContent = document.querySelector("#selector-content");

        setTimeout(() => {
            navItems[0].classList.add("active");
            qrSelectors[0].classList.add("active");
            setQrControl(qrTypes["website"][2]);

            if (qrSelectors.length > 0) {
                for (const selector of qrSelectors) {
                    selector.addEventListener("click", () => {
                        if (!selector.classList.contains("active")) {
                            setTextValue("");

                            for (const item of qrSelectors) {
                                item.classList.remove("active");
                            }

                            selector.classList.add("active");

                            const selectorIndex =
                                selector.getAttribute("data-selector");
                            setQrControl(qrTypes[selectorIndex][2]);
                        }

                        setQrChanged(true);
                    });
                }
            }
        }, 0);
    }, []);

    return (
        <>
            <Head title="Welcome" />
            {/*<div className="fixed top-0 right-0 px-6 py-4 sm:block">*/}
            {/*    {props.auth.user ? (*/}
            {/*        <Link*/}
            {/*            href={route("dashboard")}*/}
            {/*            className="text-sm text-gray-500 underline"*/}
            {/*        >*/}
            {/*            Dashboard*/}
            {/*        </Link>*/}
            {/*    ) : (*/}
            {/*        <>*/}
            {/*            <Link*/}
            {/*                href={route("login")}*/}
            {/*                className="text-sm text-gray-500 underline"*/}
            {/*            >*/}
            {/*                Log in*/}
            {/*            </Link>*/}

            {/*            <Link*/}
            {/*                href={route("register")}*/}
            {/*                className="ml-4 text-sm text-gray-500 underline"*/}
            {/*            >*/}
            {/*                Register*/}
            {/*            </Link>*/}
            {/*        </>*/}
            {/*    )}*/}
            {/*</div>*/}
            <div className="relative grid grid-cols-12 w-full h-screen">
                <div className="relative flex flex-col col-span-2 h-full z-10">
                    <div className="mt-6 mb-10 mx-auto w-full aspect-square max-h-32">
                        <NavLogo color="#DB2857" />
                    </div>
                    <div className="grow">
                        {Object.keys(navItems).map((key, index) => (
                            <div
                                className="p-3 flex flex-row items-center gap-2 hover:bg-hot-pink-100 transition-all duration-300 cursor-pointer nav-item"
                                key={key - index}
                            >
                                {navItems[key][1] || null} {navItems[key][0]}
                            </div>
                        ))}
                    </div>
                    <div className="p-3 flex flex-row items-center justify-self-end gap-2 hover:bg-hot-pink-100 transition-all duration-300 cursor-pointer nav-item">
                        Login / Register
                    </div>
                </div>

                <div className="grid grid-cols-2 col-span-2 gap-2 h-full p-2">
                    {Object.keys(qrTypes).map((key, index) => {
                        return (
                            <div
                                className="cursor-pointer flex justify-center items-center py-1 text-sm border-2 border-hot-pink-500 hover:bg-hot-pink-100 qr-selector transition-all duration-300"
                                key={`${key}-${index}`}
                                data-selector={key}
                            >
                                {qrTypes[key][0]}
                            </div>
                        );
                    })}
                </div>

                <div className="relative flex items-center justify-center col-span-5 h-full w-full bg-hot-pink-500">
                    <div className="flex flex-col">
                        <div className="w-full mt-4 mb-8 flex justify-center">
                            <label className="text-hot-pink-200">
                                Enter QR Name (optional):
                                <input
                                    type="text"
                                    className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                                    onChange={(el) => {
                                        setQrTitle(el.target.value);
                                    }}
                                />
                            </label>
                        </div>

                        {qrControl}

                        <button
                            onClick={() => {
                                if (textValue.length > 0) {
                                    setQrValue(textValue);
                                    setQrChanged(false);
                                }
                            }}
                            className="mx-auto mt-8 py-2.5 px-8 bg-stone-50 text-hot-pink-500 rounded-3xl uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-300 hover:text-white hover:shadow-lg hover:shadow-hot-pink-800 transition-all duration-300"
                        >
                            Generate QR
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center col-span-3">
                    <div className="mt-6 mx-auto text-gray-600 dark:text-gray-600 text-sm">
                        <QRCodeSVG
                            id="final-qr"
                            value={qrValue}
                            fgColor={qrChanged ? "#a8a29e" : "#1c1917"}
                            size={180}
                        />
                    </div>
                    <button
                        className="mx-auto mt-8 py-2.5 px-8 text-stone-50 bg-hot-pink-500 rounded-3xl uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-400 hover:text-stone-50 hover:shadow-lg hover:shadow-hot-pink-200 transition-all duration-300"
                        id="download-button"
                        onClick={handleDownload}
                        disabled={qrChanged}
                    >
                        Download
                    </button>
                </div>
            </div>
        </>
    );
};
export default Welcome;
