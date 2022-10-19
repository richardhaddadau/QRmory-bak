import React, { useState, useEffect } from "react";
import QRCodeSVG from "qrcode.react";
import { DownloadSVG } from "@/Helpers/DownloadQR";
import d3ToPng from "d3-svg-to-png";
import WebsiteQR from "@/Components/Controls/WebsiteQR";
import FacebookQR from "@/Components/Controls/FacebookQR";
import InstagramQR from "@/Components/Controls/InstagramQR";
import TwitterQR from "@/Components/Controls/TwitterQR";
import YoutubeQR from "@/Components/Controls/YoutubeQR";
import TextQR from "@/Components/Controls/TextQR";

const CreateACode = () => {
    // States
    const [qrValue, setQrValue] = useState("You are awesome!");
    const [qrTitle, setQrTitle] = useState("New Code");
    const [textValue, setTextValue] = useState("");
    const [qrControl, setQrControl] = useState(null);
    const [qrChanged, setQrChanged] = useState(true);

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
            <div>
                <h1 className="text-left text-xl font-bold">
                    Create a New Code
                </h1>

                <section className="py-4 flex flex-col lg:items-stretch items-center gap-6 min-h-qr-card w-full">
                    <article className="flex flex-row flex-wrap items-start justify-start">
                        {Object.keys(qrTypes).map((key, index) => {
                            return (
                                <div
                                    className="py-2 px-5 m-1 cursor-pointer flex justify-center items-center rounded bg-white text-sm shadow-sm hover:shadow-lg qr-selector transition-all duration-300"
                                    key={qrTypes[key]}
                                    data-selector={key}
                                >
                                    {qrTypes[key][0]}
                                </div>
                            );
                        })}
                        <div></div>
                    </article>

                    <article className="flex flex-col lg:flex-row items:stretch w-full gap-4">
                        <div className="p-8 flex flex-col grow bg-white rounded-3xl shadow-xl shadow-stone-100">
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

                                <button
                                    className={
                                        "mt-2 py-2.5 px-8 border bg-white w-full md:w-44" +
                                        " text-sm rounded uppercase font-bold" +
                                        " transition-all duration-300" +
                                        (qrChanged
                                            ? " cursor-not-allowed text-stone-500 bg-stone-400 border-stone-400"
                                            : " border-qrmory-purple-500 text-qrmory-purple-500 hover:text-white" +
                                              " hover:bg-qrmory-purple-500 hover:translate-x-1 hover:-translate-y-1")
                                    }
                                    onClick={() => {
                                        if (textValue.length > 0) {
                                            setQrValue(textValue);
                                            setQrChanged(false);
                                        }
                                    }}
                                    title={
                                        qrChanged
                                            ? "Generate your QR Code so you can save it"
                                            : "Remember to save your code"
                                    }
                                    disabled={qrChanged}
                                >
                                    Save Dynamic Code
                                </button>
                            </div>
                        </div>
                        <div className="pt-8 pb-10 px-10 flex flex-col justify-between w-full lg:w-qr-preview bg-white rounded-3xl shadow-xl shadow-stone-100 text-center">
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
                                    fgColor={qrChanged ? "#78716c" : "black"}
                                    size={180}
                                    level="H"
                                />
                            </div>
                            <button
                                className="cursor-pointer mx-auto py-2.5 px-4 w-72 max-w-full border border-qrmory-purple-500 bg-white hover:bg-qrmory-purple-500 rounded text-sm text-qrmory-purple-500 hover:text-white uppercase font-bold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
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
                            <div className="my-2 mx-auto flex flex-row flex-nowrap gap-2 items-center w-72 max-w-full">
                                <button
                                    className="cursor-pointer py-2.5 px-4 grow border border-qrmory-purple-500 bg-white hover:bg-qrmory-purple-500 rounded text-sm text-qrmory-purple-500 hover:text-white uppercase font-bold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
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
                                    className="cursor-pointer py-2.5 px-4 grow border border-qrmory-purple-500 bg-white hover:bg-qrmory-purple-500 rounded text-sm text-qrmory-purple-500 hover:text-white uppercase font-bold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
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
                    </article>
                </section>
            </div>
        </>
    );
};

export default CreateACode;
