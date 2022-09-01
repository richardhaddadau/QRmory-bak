import React, { useEffect, useState } from "react";

import NavBar from "@/Components/NavBar";
import QRCodeSVG from "qrcode.react";

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
import MyFooter from "@/Components/MyFooter";

import {
    DownloadSVG,
    DownloadPNG,
    DownloadPDF,
    DownloadJPG,
} from "@/Helpers/DownloadQR";

const Welcome = (props) => {
    const randomTitles = [
        "New QRmory Code",
        "Made with QRmory",
        "QRmory is Awesome",
        "QRmory Code",
        "My New QR Code",
        "QR Codes are fun",
        "Na-na-na-na-na-na-na-na-QRmory man",
        "I Love QRmory",
    ];

    // States
    const [qrValue, setQrValue] = useState("Welcome to QRmory!");
    const [qrTitle, setQrTitle] = useState(
        randomTitles[Math.floor(Math.random() * randomTitles.length)]
    );
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
        // email: [
        //     "Email",
        //     "Preset an email",
        //     <EmailQR setText={setTextValue} setChanged={setQrChanged} />,
        // ],
        // socialMedia: [
        //     "Social Media",
        //     "Share your profiles",
        //     <SocialMediaQR setText={setTextValue} setChanged={setQrChanged} />,
        // ],
        // eBusinessCard: ["E-Biz Card", "The modern business card"],
        // poll: ["Poll", "Run a quick poll"],
        // reviews: ["Reviews", "Collect customer reviews"],
        // event: ["Event", "Promote an event"],
        // document: ["Document", "Share a PDF document"],
        // audio: ["Audio", "Share an sound file"],
        // video: ["Video", "Share a quick video"],
        // phone: [
        //     "Phone",
        //     "Set up an easy call",
        //     <PhoneQR setText={setTextValue} setChanged={setQrChanged} />,
        // ],
        // sms: [
        //     "SMS",
        //     "Preset an SMS",
        //     <SmsQR setText={setTextValue} setChanged={setQrChanged} />,
        // ],
        // text: [
        //     "Text",
        //     "Display a text message",
        //     <TextQR setText={setTextValue} setChanged={setQrChanged} />,
        // ],
        // wifi: ["WiFi", "Share WiFi details"],
        // location: ["Location", "Share a map address"],
        // facebook: [
        //     "Facebook",
        //     "Facebook page/group",
        //     <FacebookQR setText={setTextValue} setChanged={setQrChanged} />,
        // ],
        // instagram: [
        //     "Instagram",
        //     "Instagram account",
        //     <InstagramQR setText={setTextValue} setChanged={setQrChanged} />,
        // ],
        // twitter: [
        //     "Twitter",
        //     "Twitter account",
        //     <TwitterQR setText={setTextValue} setChanged={setQrChanged} />,
        // ],
        // youTube: [
        //     "YouTube",
        //     "YouTube video",
        //     <YoutubeQR setText={setTextValue} setChanged={setQrChanged} />,
        // ],
        // bitcoin: ["Bitcoin", "Quick Bitcoin payments"],
        // ethereum: ["Ethereum", "Quick Ethereum payments"],
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

                    <div className="py-16 px-8 flex md:flex-row flex-col md:items-stretch items-center gap-8 min-h-qr-card w-full">
                        <div className="p-8 flex flex-col grow bg-white rounded-3xl shadow-2xl">
                            <div className="mb-4 pb-4 flex flex-row flex-wrap justify-start items-center content-end self-start border-b-2 border-b-stone-100 transition-all">
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

                                <p className="ml-2 inline text-black italic">
                                    more coming soon
                                </p>

                                {/*<div*/}
                                {/*    className="self-start cursor-pointer py-2 m-1"*/}
                                {/*    onClick={() =>*/}
                                {/*        setQrOptionsOpen(!qrOptionsOpen)*/}
                                {/*    }*/}
                                {/*>*/}
                                {/*    <FaGripVertical*/}
                                {/*        color="black"*/}
                                {/*        size={24}*/}
                                {/*        className="inline"*/}
                                {/*    />*/}
                                {/*    <p className="ml-2 inline text-black">*/}
                                {/*        {qrOptionsOpen ? "less" : "more"}{" "}*/}
                                {/*        options*/}
                                {/*    </p>*/}
                                {/*</div>*/}
                            </div>
                            <div className="mx-auto flex flex-col grow justify-center w-full text-left">
                                <label className="control-label">
                                    Enter QR Name (optional):
                                    <input
                                        type="text"
                                        className="block control-input"
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
                                    className="mt-8 py-2.5 px-8 bg-qrmory-purple-500 w-full md:w-52 text-sm font-bold text-white rounded-3xl uppercase font-bold hover:tracking-widest hover:shadow-lg hover:shadow-qrmory-purple-500 transition-all duration-300"
                                >
                                    Generate QR
                                </button>
                            </div>
                        </div>
                        <div className="pt-8 pb-10 px-10 flex flex-col justify-between w-qr-preview bg-white rounded-3xl shadow-2xl text-center">
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
                                    level="H"
                                />
                            </div>
                            <button
                                className="mx-auto py-2.5 px-4 w-full bg-qrmory-purple-500 rounded-full text-white uppercase font-bold hover:tracking-widest hover:shadow-lg hover:shadow-qrmory-purple-500 transition-all duration-300"
                                id="download-button"
                                onClick={() => {
                                    const svgData =
                                        document.querySelector(
                                            "#final-qr"
                                        ).outerHTML;
                                    DownloadSVG(svgData, qrTitle);
                                }}
                                disabled={qrChanged}
                            >
                                Download SVG
                            </button>
                            {/*<div className="my-2 flex flex-row flex-nowrap justify-between items-center w-full">*/}
                            {/*    <button*/}
                            {/*        className="py-2.5 px-4 text-stone-50 bg-hot-pink-500 rounded-full uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-400 hover:text-stone-50 hover:shadow-lg hover:shadow-hot-pink-200 transition-all duration-300"*/}
                            {/*        id="download-button"*/}
                            {/*        onClick={DownloadPNG}*/}
                            {/*        disabled={qrChanged}*/}
                            {/*    >*/}
                            {/*        png*/}
                            {/*    </button>*/}

                            {/*    <button*/}
                            {/*        className="py-2.5 px-4 text-stone-50 bg-hot-pink-500 rounded-full uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-400 hover:text-stone-50 hover:shadow-lg hover:shadow-hot-pink-200 transition-all duration-300"*/}
                            {/*        id="download-button"*/}
                            {/*        onClick={DownloadJPG}*/}
                            {/*        disabled={qrChanged}*/}
                            {/*    >*/}
                            {/*        jpg*/}
                            {/*    </button>*/}

                            {/*    <button*/}
                            {/*        className="py-2.5 px-4 text-stone-50 bg-hot-pink-500 rounded-full uppercase font-bold shadow-md shadow-hot-pink-700 hover:bg-hot-pink-400 hover:text-stone-50 hover:shadow-lg hover:shadow-hot-pink-200 transition-all duration-300"*/}
                            {/*        id="download-button"*/}
                            {/*        onClick={DownloadPDF}*/}
                            {/*        disabled={qrChanged}*/}
                            {/*    >*/}
                            {/*        pdf**/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>

            {/*<section className="py-8 bg-stone-200 text-qrmory-purple-500 text-center">*/}
            {/*    <div className="flex md:flex-row flex-col justify-evenly items-center w-full">*/}
            {/*        <div className="">*/}
            {/*            <p className="font-bold text-4xl">65,000</p>*/}
            {/*            <p className="text-base uppercase">*/}
            {/*                Wonderful Visitors*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*        <div className="">*/}
            {/*            <p className="font-bold text-4xl">120,000</p>*/}
            {/*            <p className="text-base uppercase">QR Codes Created</p>*/}
            {/*        </div>*/}

            {/*        <div className="">*/}
            {/*            <p className="font-bold text-4xl">500</p>*/}
            {/*            <p className="text-base uppercase">Awesome Arsenals</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <p className="py-16 text-center text-base text-qrmory-purple-500 italic">
                More coming soon
            </p>

            {/*<section className="py-16 px-8 bg-stone-200 text-white text-center">*/}
            {/*    <div className="mx-auto py-20 px-10 flex md:flex-row flex-col justify-evenly items-center w-full max-w-main-card bg-qrmory-purple-500 rounded-3xl">*/}
            {/*        <div className="">*/}
            {/*            <p className="font-bold text-4xl">65,000</p>*/}
            {/*            <p className="text-base uppercase">*/}
            {/*                Wonderful Visitors*/}
            {/*            </p>*/}
            {/*        </div>*/}

            {/*        <div className="">*/}
            {/*            <p className="font-bold text-4xl">120,000</p>*/}
            {/*            <p className="text-base uppercase">QR Codes Created</p>*/}
            {/*        </div>*/}

            {/*        <div className="">*/}
            {/*            <p className="font-bold text-4xl">500</p>*/}
            {/*            <p className="text-base uppercase">Awesome Arsenals</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <MyFooter />
        </>
    );
};

export default Welcome;
