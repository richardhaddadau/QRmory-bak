import React, { useState } from "react";
import Standard from "@/Layouts/Standard";
import NavBar from "@/Components/NavBar";
import QRCodeSVG from "qrcode.react";
import { FaGripVertical } from "react-icons/all";

const Welcome = (props) => {
    // States
    const [qrValue, setQrValue] = useState("Welcome to QRmory!");
    const [qrTitle, setQrTitle] = useState("New QRmory Code");
    const [textValue, setTextValue] = useState("");
    const [qrControl, setQrControl] = useState(null);
    const [qrOptionsOpen, setQrOptionsOpen] = useState(false);
    const [qrChanged, setQrChanged] = useState(true);

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
                            <div
                                className="self-start cursor-pointer"
                                onClick={() => setQrOptionsOpen(!qrOptionsOpen)}
                            >
                                <FaGripVertical
                                    color="black"
                                    size={24}
                                    className="inline"
                                />
                                <p className="ml-2 inline text-black">
                                    {qrOptionsOpen ? "less" : "more"} options
                                </p>
                            </div>
                            <div className="mx-auto flex flex-col grow justify-center w-full text-left">
                                <label className="text-qrmory-purple-500 mb-8">
                                    Enter QR Name (optional):
                                    <input
                                        type="text"
                                        className="block w-full max-w-sm bg-transparent border-qrmory-purple-500 text-qrmory-purple-500 font-bold focus:bg-stone-300 transition-all duration-300"
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
                        <div className="p-8 flex flex-col w-qr-preview bg-white rounded-3xl shadow-2xl text-center">
                            <h4 className="text-sm uppercase text-stone-500">
                                Title
                            </h4>
                            <h5>This would be the title</h5>

                            <h5 className="text-sm text-qrmory-purple-500 font-bold">
                                {qrTitle || null}
                            </h5>
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
