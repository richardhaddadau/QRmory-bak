import React, { useEffect, useState } from "react";

import NavBar from "@/Components/NavBar";
import { faunaDriver } from "@/Helpers/FaunaDriver";

import QRCodeSVG from "qrcode.react";
import d3ToPng from "d3-svg-to-png";

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
import Standard from "@/Layouts/Standard";
import EBusinessCardView from "@/Components/Previews/EBusinessCardView";

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
    const [qrLevel, setQrLevel] = useState("M");
    const [qrChanged, setQrChanged] = useState(true);
    const [showFlip, setShowFlip] = useState(false);
    const [showPreview, setShowPreview] = useState(null);

    const qrTypes = {
        website: [
            "Website",
            "Link to a page or site",
            <WebsiteQR setText={setTextValue} setChanged={setQrChanged} />,
            false,
        ],
        facebook: [
            "Facebook",
            "Facebook page/group",
            <FacebookQR setText={setTextValue} setChanged={setQrChanged} />,
            false,
        ],
        instagram: [
            "Instagram",
            "Instagram account",
            <InstagramQR setText={setTextValue} setChanged={setQrChanged} />,
            false,
        ],
        twitter: [
            "Twitter",
            "Twitter account",
            <TwitterQR setText={setTextValue} setChanged={setQrChanged} />,
            false,
        ],
        youTube: [
            "YouTube",
            "YouTube video",
            <YoutubeQR setText={setTextValue} setChanged={setQrChanged} />,
            false,
        ],
        eBusinessCard: [
            "E-Business Card",
            "The modern business card",
            <EBusinessCardQR
                setText={setTextValue}
                setChanged={setQrChanged}
            />,
            true,
            <EBusinessCardView
                getValue={qrValue}
                getChanged={qrChanged}
                getLevel={qrLevel}
            />,
        ],
        poll: [
            "Poll",
            "Run a quick poll",
            <PollQR setText={setTextValue} setChanged={setQrChanged} />,
            true,
        ],
        email: [
            "Email",
            "Preset an email",
            <EmailQR setText={setTextValue} setChanged={setQrChanged} />,
            false,
        ],
        // socialMedia: [
        //     "Social Media",
        //     "Share your profiles",
        //     <SocialMediaQR setText={setTextValue} setChanged={setQrChanged} />,
        // ],
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
        text: [
            "Text",
            "Display a text message",
            <TextQR setText={setTextValue} setChanged={setQrChanged} />,
            false,
        ],
        // wifi: ["WiFi", "Share WiFi details"],
        // location: ["Location", "Share a map address"],
        // bitcoin: ["Bitcoin", "Quick Bitcoin payments"],
        // ethereum: ["Ethereum", "Quick Ethereum payments"],
    };

    useEffect(async () => {
        const qrSelectors = document.querySelectorAll(".qr-selector");
        const links = await faunaDriver.GetLinks();

        await links["data"].map((item) => {
            console.log(item["data"]["short_url"]);
        });

        setTimeout(() => {}, 0);

        for (const item of qrSelectors) {
            item.classList.remove("active");
        }

        qrSelectors[0].classList.add("active");

        setQrControl(qrTypes["website"][2]);

        if (qrSelectors.length > 0) {
            for (const selector of qrSelectors) {
                selector.addEventListener("click", () => {
                    const selectorIndex =
                        selector.getAttribute("data-selector");

                    setTextValue("");

                    for (const item of qrSelectors) {
                        item.classList.remove("active");
                    }

                    selector.classList.add("active");

                    setQrControl(qrTypes[selectorIndex][2]);
                    setTextValue("");
                    setQrChanged(true);
                    setShowFlip(qrTypes[selectorIndex][3]);

                    setShowPreview(
                        qrTypes[selectorIndex][4]
                            ? qrTypes[selectorIndex][4]
                            : null
                    );
                });
            }
        }
    }, []);

    return (
        <>
            <Standard>
                <NavBar />

                <header className="main-hero flex flex-col justify-center items-center h-hero bg-hero text-white">
                    <div className="px-6 w-full max-w-7xl text-center">
                        <h1 className="font-header text-5xl hero-heading">
                            Generate an <span>arsenal</span> of QR Codes
                        </h1>
                        <h3 className="mt-2 text-xl tracking-widest uppercase drop-shadow-lg">
                            Be equipped for anything with QRmory
                        </h3>
                    </div>
                </header>

                <main className="mx-auto px-6 w-full max-w-7xl">
                    <section className="mx-auto py-24 text-center text-qrmory-purple-500">
                        <h2 className="font-header text-4.5xl">
                            Start Creating
                        </h2>
                        <h3 className="text-xl uppercase drop-shadow-lg">
                            Go on! Give it a go
                        </h3>

                        <div className="py-16 flex lg:flex-row flex-col lg:items-start items-center gap-6 min-h-qr-card w-full">
                            <div className="p-8 flex flex-col grow bg-white rounded-3xl shadow-2xl">
                                <div className="mb-4 pb-4 flex flex-row flex-wrap justify-start items-center content-end self-start border-b-2 border-b-stone-100 transition-all">
                                    {Object.keys(qrTypes).map((key, index) => {
                                        return (
                                            <div
                                                className="cursor-pointer flex justify-center items-center py-2 px-5 m-1 rounded-full border-2 bg-white border-hot-pink-500 text-sm hover:bg-qrmory-purple-400 hover:text-qrmory-purple-200 qr-selector transition-all duration-300"
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
                            <div className="relative">
                                {showFlip ? (
                                    <div
                                        id="flip"
                                        className="cursor-pointer py-0.5 px-3 absolute top-4 right-4 bg-white hover:bg-qrmory-purple-500 border border-qrmory-purple-500 text-qrmory-purple-500 hover:text-white rounded-full z-50 transition-all duration-300"
                                        onClick={(el) => {
                                            const mainCard =
                                                document.querySelector(
                                                    "#mainCard"
                                                );

                                            mainCard.classList.toggle(
                                                "flipOver"
                                            );
                                        }}
                                    >
                                        Flip
                                    </div>
                                ) : null}
                                <div
                                    id="mainCard"
                                    className=" transition-all duration-500"
                                >
                                    <div
                                        id="frontCard"
                                        className="py-8 px-10 relative flex flex-col justify-between w-qr-preview bg-white rounded-3xl shadow-2xl text-center transition-all duration-300"
                                    >
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
                                                renderAs="svg"
                                                value={qrValue}
                                                fgColor={
                                                    qrChanged
                                                        ? "#78716c"
                                                        : "black"
                                                }
                                                size={180}
                                                level={qrLevel} // L (Low), M (Medium), Q (Quartile), H (High)
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <button
                                                className="mx-auto py-2.5 px-4 w-full bg-qrmory-purple-500 rounded-full text-white uppercase font-bold hover:tracking-widest hover:shadow-lg hover:shadow-qrmory-purple-500 transition-all duration-300"
                                                id="download-button"
                                                onClick={() => {
                                                    const svgData =
                                                        document.querySelector(
                                                            "#final-qr"
                                                        ).outerHTML;
                                                    DownloadSVG(
                                                        svgData,
                                                        qrTitle
                                                    );
                                                }}
                                                disabled={qrChanged}
                                            >
                                                Download SVG
                                            </button>
                                            <div className="my-2 flex flex-row flex-nowrap gap-2 items-center w-full">
                                                <button
                                                    className="py-2.5 px-4 grow bg-qrmory-purple-500 rounded-full text-white uppercase font-bold hover:tracking-widest hover:shadow-lg hover:shadow-qrmory-purple-500 transition-all duration-300"
                                                    id="download-button"
                                                    onClick={() => {
                                                        d3ToPng(
                                                            "#final-qr",
                                                            qrTitle,
                                                            {
                                                                format: "png",
                                                            }
                                                        ).then((r) =>
                                                            console.log(r)
                                                        );
                                                    }}
                                                    disabled={qrChanged}
                                                >
                                                    png
                                                </button>

                                                <button
                                                    className="py-2.5 px-4 grow bg-qrmory-purple-500 rounded-full text-white uppercase font-bold hover:tracking-widest hover:shadow-lg hover:shadow-qrmory-purple-500 transition-all duration-300"
                                                    id="download-button"
                                                    onClick={() => {
                                                        d3ToPng(
                                                            "#final-qr",
                                                            qrTitle,
                                                            {
                                                                format: "jpg",
                                                            }
                                                        ).then((r) =>
                                                            console.log(r)
                                                        );
                                                    }}
                                                    disabled={qrChanged}
                                                >
                                                    jpg
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="backCard"
                                        className="py-8 px-10 absolute top-0 left-0 h-full flex flex-col justify-between w-qr-preview bg-white rounded-3xl shadow-2xl text-center transition-all duration-300"
                                    >
                                        {showPreview}
                                    </div>
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
                </main>
            </Standard>
        </>
    );
};

export default Welcome;
