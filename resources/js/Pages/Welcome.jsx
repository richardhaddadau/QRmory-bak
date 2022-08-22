import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { QRCodeSVG } from "qrcode.react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import WebsiteQR from "@/Components/Controls/WebsiteQR";
import EmailQR from "@/Components/Controls/EmailQR";
import FacebookQR from "@/Components/Controls/FacebookQR";
import YoutubeQR from "@/Components/Controls/YoutubeQR";
import PhoneQR from "@/Components/Controls/PhoneQR";
import SmsQR from "@/Components/Controls/SmsQR";
import TextQR from "@/Components/Controls/TextQR";
import TwitterQR from "@/Components/Controls/TwitterQR";

let selectorTop = 0;
let selectorPage = 1;
let totalSelectorPages = 0;
let pageHeight = 0;

const Welcome = (props) => {
    // States
    const [selectorPosition, setSelectorPosition] = useState(0);
    const [qrValue, setQrValue] = useState("Hi =)");
    const [qrTitle, setQrTitle] = useState("Awesome QR");
    const [textValue, setTextValue] = useState("test");
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
        socialMedia: ["Social Media", "Share your profiles"],
        eBusinessCard: ["E-Business Card", "The modern business card"],
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

    const checkPage = () => {
        const scrollUp = document.querySelector("#selector-block-head");
        const scrollDown = document.querySelector("#selector-block-foot");

        if (selectorPage === 1) {
            addStyle(scrollUp, "disabled");
            removeStyle(scrollDown, "disabled");
        } else if (selectorPage === totalSelectorPages) {
            addStyle(scrollDown, "disabled");
            removeStyle(scrollUp, "disabled");
        } else {
            removeStyle(scrollDown, "disabled");
            removeStyle(scrollUp, "disabled");
        }
    };

    useEffect(() => {
        const qrSelectors = document.querySelectorAll(".qr-selector");
        const qrWindow = document.querySelector("#selector-window");
        const qrContent = document.querySelector("#selector-content");
        const scrollUp = document.querySelector("#selector-block-head");
        const scrollDown = document.querySelector("#selector-block-foot");

        pageHeight = qrWindow.offsetHeight;
        totalSelectorPages = Math.ceil(qrContent.offsetHeight / pageHeight);

        qrSelectors[0].classList.add("active");
        setQrControl(qrTypes["website"][2]);
        checkPage();

        window.addEventListener("resize", () => {
            selectorTop = 0;
            selectorPage = 1;

            pageHeight = qrWindow.offsetHeight;
            totalSelectorPages = Math.ceil(qrContent.offsetHeight / pageHeight);
            checkPage();
        });

        scrollDown.addEventListener("click", () => {
            if (selectorPage < totalSelectorPages) {
                selectorPage++;

                const newTop = selectorTop - pageHeight;
                selectorTop = newTop;
                qrContent.style.top = newTop + "px";
            }

            checkPage();
        });

        scrollUp.addEventListener("click", () => {
            if (selectorPage > 1) {
                selectorPage--;

                const newTop = selectorTop + pageHeight;
                selectorTop = newTop;
                qrContent.style.top = newTop + "px";
            }

            checkPage();
        });

        setTimeout(() => {
            for (const selector of qrSelectors) {
                selector.addEventListener("click", () => {
                    for (const item of qrSelectors) {
                        item.classList.remove("active");
                    }

                    selector.classList.add("active");

                    const selectorIndex =
                        selector.getAttribute("data-selector");
                    setQrControl(qrTypes[selectorIndex][2]);
                });
            }
        }, 0);
    }, []);

    return (
        <>
            <Head title="Welcome" />

            <div className="relative flex items-top justify-center min-h-screen bg-stone-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-500 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-500 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="mx-auto w-full max-w-7xl">
                    <div className="mt-8 bg-stone-50 overflow-hidden shadow sm:rounded-3xl md:h-main-card">
                        <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                            <div
                                className="relative col-span-2 flex flex-col h-full"
                                id="selector-block"
                            >
                                <div
                                    className="hidden md:flex flex-row justify-center items-center h-9 text-hot-pink-500 cursor-pointer"
                                    id="selector-block-head"
                                >
                                    <FaChevronUp />
                                </div>
                                <div
                                    className="relative block grow overflow-hidden max-h-selector-window"
                                    id="selector-window"
                                >
                                    <div
                                        className="md:absolute w-full flex flex-row flex-wrap md:flex-col md:flex-nowrap"
                                        id="selector-content"
                                    >
                                        {Object.keys(qrTypes).map(
                                            (key, index) => {
                                                return (
                                                    <div
                                                        className="relative flex flex-col justify-center transition-all duration-300 hover:text-hot-pink-500 px-2.5 h-16 mx-1 md:mx-0 qr-selector hover:cursor-pointer"
                                                        key={`${key}-${index}`}
                                                        data-selector={key}
                                                    >
                                                        <div
                                                            className="text-base leading-4 text-stone-900 font-bold"
                                                            id="selector-title"
                                                        >
                                                            {qrTypes[key][0]}
                                                        </div>
                                                        <div
                                                            className="hidden md:block text-sm text-stone-400"
                                                            id="selector-descriptor"
                                                        >
                                                            {qrTypes[key][1]}
                                                        </div>
                                                        <div className="absolute hidden md:block h-1.5 w-1.5 rounded-xl bg-hot-pink-500 top-4.5 left-0"></div>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="hidden md:flex flex-row justify-center items-center h-9 text-hot-pink-500 cursor-pointer"
                                    id="selector-block-foot"
                                >
                                    <FaChevronDown />
                                </div>
                            </div>

                            <div className="p-6 bg-hot-pink-500 col-span-7 shadow-lg shadow-stone-800">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    {/* QR Title */}
                                    <div className="flex flex-col justify-center">
                                        <div className="w-full max-w-md mt-4 mb-8 mx-auto flex justify-center">
                                            <div className="relative w-full">
                                                <label className="text-hot-pink-200">
                                                    Enter Title:
                                                    <input
                                                        type="text"
                                                        className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                                                        onChange={(el) => {
                                                            setQrTitle(
                                                                el.target.value
                                                            );
                                                        }}
                                                    />
                                                </label>
                                            </div>
                                        </div>

                                        {qrControl}

                                        <button
                                            onClick={() => {
                                                setQrValue(textValue);
                                                setQrChanged(false);
                                            }}
                                            className="mx-auto mt-8 py-2.5 px-8 bg-stone-50 text-hot-pink-500 rounded-3xl uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-300 hover:text-white hover:shadow-lg hover:shadow-hot-pink-800 transition-all duration-300"
                                        >
                                            Generate QR
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-6 col-span-3">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <QRCodeSVG value={qrValue} id="final-qr" />
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
                    </div>
                </div>
            </div>
        </>
    );
};
export default Welcome;
