import React, { useEffect, useState } from "react";

// QRmory Libraries
import Standard from "@/Layouts/Standard";
import NavBar from "@/Components/NavBar";
import QRCodeSVG from "qrcode.react";
import MyFooter from "@/Components/MyFooter";

// Download Libraries
import { DownloadSVG } from "@/Helpers/DownloadQR";
import d3ToPng from "d3-svg-to-png";

// QR Control Types
import FacebookQR from "@/Components/Controls/FacebookQR";
import InstagramQR from "@/Components/Controls/InstagramQR";
import TextQR from "@/Components/Controls/TextQR";
import TwitterQR from "@/Components/Controls/TwitterQR";
import WebsiteQR from "@/Components/Controls/WebsiteQR";
import YoutubeQR from "@/Components/Controls/YoutubeQR";

// Main Component
const Welcome = (props) => {
    // States
    const [qrValue, setQrValue] = useState("Welcome to QRmory!");
    const [textValue, setTextValue] = useState("");
    const [qrControl, setQrControl] = useState(null);
    const [qrOptionsOpen, setQrOptionsOpen] = useState(false);
    const [qrChanged, setQrChanged] = useState(true);
    const [qrTitle, setQrTitle] = useState("Made with QRmory");
    // const [qrTitle, setQrTitle] = useState(
    //     randomTitles[Math.floor(Math.random() * randomTitles.length)]
    // );

    const randomTitles = [
        "New QRmory Code",
        "Made with QRmory",
        "QRmory is Awesome",
        "QRmory Code",
        "My New QR Code",
        "QR Codes are fun",
        "I Love QRmory",
    ];

    const qrTypes = {
        website: [
            "Website",
            "Link to a page or site",
            <WebsiteQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
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
        text: [
            "Text",
            "Display a text message",
            <TextQR setText={setTextValue} setChanged={setQrChanged} />,
        ],
        // wifi: ["WiFi", "Share WiFi details"],
        // location: ["Location", "Share a map address"],
        // bitcoin: ["Bitcoin", "Quick Bitcoin payments"],
        // ethereum: ["Ethereum", "Quick Ethereum payments"],
    };

    const loginWithData = () => {};

    useEffect(() => {
        const qrSelectors = document.querySelectorAll(".qr-selector");

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
                });
            }
        }
    }, []);

    return (
        <>
            <Standard>
                <NavBar
                    className={"text-qrmory-purple-500"}
                    props={props}
                    logoColour="#49176B"
                />

                <header className="main-hero flex flex-col justify-center items-center h-hero bg-white text-qrmory-purple-500">
                    <div className="px-6 w-full max-w-7xl text-center">
                        <h1 className="font-header text-5xl hero-heading">
                            Generate an <span>arsenal</span> of QR Codes
                        </h1>
                        <h3 className="mt-2 text-xl tracking-widest uppercase drop-shadow-lg">
                            Be equipped for anything with QRmory
                        </h3>

                        <div className="mt-16 flex flex-row justify-center gap-4">
                            <button
                                className="py-3 px-6 bg-qrmory-purple-500 rounded text-white font-bold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                                onClick={() => {
                                    window.scrollTo({
                                        top: document.querySelector("main")
                                            .offsetTop,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                Start Creating
                            </button>
                            <button className="py-3 px-6 border border-qrmory-purple-500 rounded text-qrmory-purple-500 font-bold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
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

                        <div className="py-16 flex lg:flex-row flex-col lg:items-stretch items-center gap-6 min-h-qr-card w-full">
                            <div className="p-8 flex flex-col items-start justify-between grow gap-2 bg-white rounded-3xl shadow-xl shadow-stone-100">
                                <div className="mb-4 pb-4 flex flex-row flex-wrap justify-start items-center content-end self-start border-b-2 border-b-stone-100 transition-all">
                                    {Object.keys(qrTypes).map((key, index) => {
                                        return (
                                            <div
                                                className="cursor-pointer flex justify-center items-center py-2 px-5 m-1 rounded border bg-white border-qrmory-purple-500 text-sm hover:bg-qrmory-purple-500 hover:text-qrmory-purple-200 qr-selector home"
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
                                        className="mt-8 py-2.5 px-8 border border-qrmory-purple-500 bg-white hover:bg-qrmory-purple-500 w-full md:w-44 text-sm font-medium text-qrmory-purple-500 hover:text-white rounded uppercase font-semibold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                                        onClick={() => {
                                            if (textValue.length > 0) {
                                                setQrValue(textValue);
                                                setQrChanged(false);
                                            }
                                        }}
                                    >
                                        Generate QR
                                    </button>
                                </div>
                                <a
                                    href={route("login")}
                                    className="p-0.5 hover:pl-1 pr-2 italic hover:text-white hover:bg-qrmory-purple-500 hover:-translate-y-1 hover:translate-x-1 transition-all duration-300"
                                >
                                    Create a free account to save your QR Codes
                                </a>
                            </div>
                            <div className="pt-8 pb-10 px-10 flex flex-col justify-between w-qr-preview bg-white rounded-3xl shadow-xl shadow-stone-100 text-center">
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
                                            qrChanged ? "#78716c" : "black"
                                        }
                                        size={180}
                                        level="H"
                                    />
                                </div>
                                <button
                                    className="cursor-pointer mx-auto py-2.5 px-4 w-full border border-qrmory-purple-500 bg-white hover:bg-qrmory-purple-500 rounded text-qrmory-purple-500 hover:text-white tracking-widest uppercase font-bold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
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
                                <div className="my-2 flex flex-row flex-nowrap gap-2 items-center w-full">
                                    <button
                                        className="cursor-pointer py-2.5 px-4 grow border border-qrmory-purple-500 bg-white hover:bg-qrmory-purple-500 rounded text-qrmory-purple-500 hover:text-white uppercase font-medium tracking-widest hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                                        id="download-button"
                                        onClick={() => {
                                            d3ToPng("#final-qr", qrTitle, {
                                                format: "png",
                                            }).then((r) => console.log(r));
                                        }}
                                        disabled={qrChanged}
                                    >
                                        png
                                    </button>

                                    <button
                                        className="cursor-pointer py-2.5 px-4 grow border border-qrmory-purple-500 bg-white hover:bg-qrmory-purple-500 rounded text-qrmory-purple-500 hover:text-white uppercase font-medium tracking-widest hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                                        id="download-button"
                                        onClick={() => {
                                            d3ToPng("#final-qr", qrTitle, {
                                                format: "jpg",
                                            }).then((r) => console.log(r));
                                        }}
                                        disabled={qrChanged}
                                    >
                                        jpg
                                    </button>
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
