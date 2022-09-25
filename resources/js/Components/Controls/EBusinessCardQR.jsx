import React, { useEffect, useState } from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { faunaDriver } from "@/Helpers/FaunaDriver";

const EBusinessCardQR = ({ setText, setChanged }) => {
    // States
    const [isLoading, setIsLoading] = useState(false);
    const [temporaryLink, setTemporaryLink] = useState(
        "https://comprss.it/..."
    );

    useEffect(async () => {
        setIsLoading(true);

        const found = await faunaDriver.GetLinkByShortUrl("test");
        await console.log(found["data"].length);
        const newLink = await faunaDriver.GenerateNewLink(true, true);

        setTemporaryLink(newLink);
        setIsLoading(false);
    }, []);

    return (
        <>
            <label className="control-label">
                Enter Website:
                <input
                    type="text"
                    className="control-input"
                    onChange={(el) => {
                        setText(el.target.value);
                    }}
                />
            </label>
            <article className="mt-8 w-full text-qrmory-purple-400">
                <div className="">
                    Temporary Url: {isLoading ? "..." : temporaryLink}
                </div>
                <div className="opacity-70 italic">
                    (will be confirmed once you generate the QR Code)
                </div>
            </article>
        </>
    );
};

export default EBusinessCardQR;
