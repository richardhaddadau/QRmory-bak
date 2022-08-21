import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import { QRCodeSVG } from "qrcode.react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

let selectorTop = 0;
let selectorBottom = 0;
let selectorPage = 1;
let totalSelectorPages = 0;
let pageHeight = 0;

const Welcome = (props) => {
    const qrTypes = {
        website: ["Website", "Link to a page or site"],
        email: ["Email", "Preset an email"],
        socialMedia: ["Social Media", "Share your profiles"],
        eBusinessCard: ["E-Business Card", "The modern business card"],
        poll: ["Poll", "Run a quick poll"],
        reviews: ["Reviews", "Collect customer reviews"],
        event: ["Event", "Promote an event"],
        document: ["Document", "Share a PDF document"],
        audio: ["Audio", "Share an sound file"],
        video: ["Video", "Share a quick video"],
        phone: ["Phone", "Set up an easy call"],
        sms: ["SMS", "Preset an SMS"],
        text: ["Text", "Display a text message"],
        wifi: ["WiFi", "Share WiFi details"],
        location: ["Location", "Share a map address"],
        facebook: ["Facebook", "Facebook page/group"],
        twitter: ["Twitter", "Twitter account"],
        youTube: ["YouTube", "YouTube video"],
        bitcoin: ["Bitcoin", "Quick Bitcoin payments"],
        ethereum: ["Ethereum", "Quick Ethereum payments"],
    };

    // States
    const [selectorPosition, setSelectorPosition] = useState(0);
    const [qrValue, setQrValue] = useState("Hi =)");
    const [qrTitle, setQrTitle] = useState("Awesome QR");
    const [textValue, setTextValue] = useState("test");

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

    useEffect(() => {
        const qrSelectors = document.querySelectorAll(".qr-selector");
        const qrWindow = document.querySelector("#selector-window");
        const qrContent = document.querySelector("#selector-content");
        const scrollUp = document.querySelector("#selector-block-head");
        const scrollDown = document.querySelector("#selector-block-foot");

        pageHeight = qrWindow.offsetHeight;
        totalSelectorPages = Math.ceil(qrContent.offsetHeight / pageHeight);

        scrollDown.addEventListener("click", () => {
            if (selectorPage < totalSelectorPages) {
                selectorPage++;

                const newTop = selectorTop - pageHeight;
                selectorTop = newTop;
                qrContent.style.top = newTop + "px";
            }
        });

        scrollUp.addEventListener("click", () => {
            if (selectorPage > 1) {
                selectorPage--;

                const newTop = selectorTop + pageHeight;
                selectorTop = newTop;
                qrContent.style.top = newTop + "px";
            }
        });

        setTimeout(() => {
            for (const selector of qrSelectors) {
                selector.addEventListener("click", () => {
                    for (const item of qrSelectors) {
                        item.classList.remove("active");
                    }

                    selector.classList.add("active");
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
                    <div className="mt-8 bg-stone-50 overflow-hidden shadow sm:rounded-3xl h-main-card">
                        <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                            <div
                                className="relative col-span-2 flex flex-col h-full"
                                id="selector-block"
                            >
                                <div
                                    className="flex flex-row justify-center items-center h-9"
                                    id="selector-block-head"
                                >
                                    <FaChevronUp />
                                </div>
                                <div
                                    className="relative block grow overflow-hidden max-h-selector-window"
                                    id="selector-window"
                                >
                                    <div
                                        className="absolute w-full"
                                        id="selector-content"
                                    >
                                        {Object.keys(qrTypes).map(
                                            (key, index) => {
                                                return (
                                                    <div
                                                        className="flex flex-col justify-center hover:transition-all hover:text-hot-pink px-2.5 h-16 qr-selector hover:cursor-pointer"
                                                        key={index}
                                                    >
                                                        <div
                                                            className="text-base leading-4 text-stone-900 font-bold"
                                                            id="selector-title"
                                                        >
                                                            {qrTypes[key][0]}
                                                        </div>
                                                        <div
                                                            className="text-sm text-stone-400"
                                                            id="selector-descriptor"
                                                        >
                                                            {qrTypes[key][1]}
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="flex flex-row justify-center items-center h-9"
                                    id="selector-block-foot"
                                >
                                    <FaChevronDown />
                                </div>
                            </div>

                            <div className="p-6 bg-hot-pink col-span-7 shadow-lg shadow-stone-800">
                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        <div className="">
                                            <input
                                                type="text"
                                                placeholder="Awesome QR"
                                                onChange={(el) => {
                                                    setQrTitle(el.target.value);
                                                }}
                                            />
                                        </div>

                                        <div className="">
                                            <input
                                                type="text"
                                                onChange={(el) => {
                                                    setTextValue(
                                                        el.target.value
                                                    );
                                                }}
                                            />
                                            <button
                                                onClick={() =>
                                                    setQrValue(textValue)
                                                }
                                            >
                                                Generate QR
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-6 col-span-3">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <QRCodeSVG value={qrValue} id="final-qr" />
                                </div>
                                <button onClick={handleDownload}>
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
