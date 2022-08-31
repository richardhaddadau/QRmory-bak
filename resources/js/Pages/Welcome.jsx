import React, { useEffect, useState } from "react";
import Standard from "@/Layouts/Standard";
import NavBar from "@/Components/NavBar";
import QRCodeSVG from "qrcode.react";
import { FaGripVertical } from "react-icons/all";

import AudioQR from "@/Components/Controls/AudioQR";
import BitcoinQR from "@/Components/Controls/BitcoinQR";
import DocumentQR from "@/Components/Controls/DocumentQR";
import EBusinessCardQR from "@/Components/Controls/EBusinessCardQR";
import EmailQR from "@/Components/Controls/EmailQR";
import EthereumQR from "@/Components/Controls/EthereumQR";
import EventQR from "@/Components/Controls/EventQR";
import FacebookQR from "@/Components/Controls/FacebookQR";
import InstagramQR from "@/Components/Controls/InstagramQR";
import LocationQR from "@/Components/Controls/LocationQR";
import PhoneQR from "@/Components/Controls/PhoneQR";
import PollQR from "@/Components/Controls/PollQR";
import ReviewsQR from "@/Components/Controls/ReviewsQR";
import SmsQR from "@/Components/Controls/SmsQR";
import SocialMediaQR from "@/Components/Controls/SocialMediaQR";
import TextQR from "@/Components/Controls/TextQR";
import TwitterQR from "@/Components/Controls/TwitterQR";
import VideoQR from "@/Components/Controls/VideoQR";
import WebsiteQR from "@/Components/Controls/WebsiteQR";
import WifiQR from "@/Components/Controls/WifiQR";
import YoutubeQR from "@/Components/Controls/YoutubeQR";

const Welcome = (props) => {
    // States
    const [qrValue, setQrValue] = useState("Welcome to QRmory!");
    const [qrTitle, setQrTitle] = useState("New QRmory Code");
    const [textValue, setTextValue] = useState("");
    const [qrControl, setQrControl] = useState(null);
    const [qrOptionsOpen, setQrOptionsOpen] = useState(false);
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
        wifi: ["WiFi", "Share WiFi details"],
        location: ["Location", "Share a map address"],
        facebook: [
            "Facebook",
            "Facebook page/group",
            <FacebookQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        instagram: [
            "Instagram",
            "Instagram account",
            <InstagramQR setText={setTextValue} setChanged={setQrChanged} />,
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

    useEffect(() => {
        const qrSelectors = document.querySelectorAll(".qr-selector");

        setTimeout(() => {
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
            <header className="main-hero flex flex-col justify-center items-center h-hero bg-hero text-white">
                <NavBar />
                <h1 className="font-header text-5xl hero-heading">
                    Generate an <span>arsenal</span> of QR Codes
                </h1>
                <h3 className="mt-2 text-xl tracking-widest uppercase drop-shadow-lg">
                    Be equipped for anything with QRmory
                </h3>
            </header>

            <section className="bg-stone-200 text-qrmory-purple-500">
                <div className="mx-auto py-24 text-center w-full max-w-7xl">
                    <h2 className="font-header text-4.5xl">Start Creating</h2>
                    <h3 className="text-xl uppercase drop-shadow-lg">
                        Go on! Give it a go
                    </h3>

                    <div className="pt-16 flex flex-row gap-8 h-qr-card w-full">
                        <div className="p-8 flex flex-col grow bg-white rounded-3xl shadow-2xl">
                            <div className="flex flex-row flex-wrap justify-start items-center content-end self-start transition-all">
                                {Object.keys(qrTypes).map((key, index) => {
                                    return (
                                        <div
                                            className="cursor-pointer flex justify-center items-center py-2 px-5 m-1 rounded-full border-2 bg-white border-hot-pink-500 text-sm text-hot-pink-500 hover:bg-qrmory-purple-400 qr-selector transition-all duration-300"
                                            key={qrTypes[key]}
                                            data-selector={key}
                                        >
                                            {qrTypes[key][0]}
                                        </div>
                                    );
                                })}
                                {qrOptionsOpen ? "" : null}
                                <div
                                    className="self-start cursor-pointer py-2 m-1"
                                    onClick={() =>
                                        setQrOptionsOpen(!qrOptionsOpen)
                                    }
                                >
                                    <FaGripVertical
                                        color="black"
                                        size={24}
                                        className="inline"
                                    />
                                    <p className="ml-2 inline text-black">
                                        {qrOptionsOpen ? "less" : "more"}{" "}
                                        options
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto flex flex-col grow justify-center w-full text-left">
                                <label className="control-label">
                                    Enter QR Name (optional):
                                    <input
                                        type="text"
                                        className="control-input"
                                        onChange={(el) => {
                                            setQrTitle(el.target.value);
                                        }}
                                        value={qrTitle}
                                    />
                                </label>

                                <div className="w-full flex justify-center">
                                    <div className="relative w-full">
                                        {qrControl}
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        if (textValue.length > 0) {
                                            setQrValue(textValue);
                                            setQrChanged(false);
                                        }
                                    }}
                                    className="mt-8 py-2.5 px-8 bg-qrmory-purple-500 w-full md:w-52 text-sm font-bold text-white rounded-3xl uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-300 hover:tracking-widest hover:shadow-lg hover:shadow-qrmory-purple-500 transition-all duration-300"
                                >
                                    Generate QR
                                </button>
                            </div>
                        </div>
                        <div className="pt-8 pb-10 px-12 flex flex-col justify-between w-qr-preview bg-white rounded-3xl shadow-2xl text-center">
                            <div className="">
                                <h4 className="text-sm uppercase text-stone-500">
                                    Title
                                </h4>

                                <h5 className="text-base text-qrmory-purple-500 font-bold">
                                    {qrTitle || null}
                                </h5>
                            </div>

                            <div className="my-16 mx-auto text-gray-600 dark:text-gray-600 text-sm">
                                <QRCodeSVG
                                    id="final-qr"
                                    value={qrValue}
                                    fgColor={qrChanged ? "#78716c" : "black"}
                                    size={180}
                                />
                            </div>
                            <button
                                className="mx-auto py-2.5 px-4 w-full bg-hot-pink-500 rounded-full text-stone-50 uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-400 hover:text-stone-50 hover:shadow-lg hover:shadow-hot-pink-200 transition-all duration-300"
                                id="download-button"
                                onClick={handleDownload}
                                disabled={qrChanged}
                            >
                                Download .SVG
                            </button>
                            <div className="my-2 flex flex-row flex-nowrap justify-between items-center w-full">
                                <button
                                    className="py-2.5 px-4 text-stone-50 bg-hot-pink-500 rounded-full uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-400 hover:text-stone-50 hover:shadow-lg hover:shadow-hot-pink-200 transition-all duration-300"
                                    id="download-button"
                                    onClick={handleDownload}
                                    disabled={qrChanged}
                                >
                                    .png
                                </button>

                                <button
                                    className="py-2.5 px-4 text-stone-50 bg-hot-pink-500 rounded-full uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-400 hover:text-stone-50 hover:shadow-lg hover:shadow-hot-pink-200 transition-all duration-300"
                                    id="download-button"
                                    onClick={handleDownload}
                                    disabled={qrChanged}
                                >
                                    .jpg
                                </button>

                                <button
                                    className="py-2.5 px-4 text-stone-50 bg-hot-pink-500 rounded-full uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-400 hover:text-stone-50 hover:shadow-lg hover:shadow-hot-pink-200 transition-all duration-300"
                                    id="download-button"
                                    onClick={handleDownload}
                                    disabled={qrChanged}
                                >
                                    .pdf*
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Welcome;
