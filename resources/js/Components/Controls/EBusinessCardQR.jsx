import React, { useEffect, useState } from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import { faunaDriver } from "@/Helpers/FaunaDriver";

const EBusinessCardQR = ({ setText, setChanged }) => {
    // States
    const [isLoading, setIsLoading] = useState(false);
    const [temporaryLink, setTemporaryLink] = useState([
        "https://qrmory.com/visit/...",
        0,
    ]);

    useEffect(async () => {
        setIsLoading(true);

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
                {isLoading ? (
                    <p className="italic">Generating temporary link...</p>
                ) : (
                    <a
                        href={temporaryLink[0]}
                        data-ref={temporaryLink[1]}
                        target="_blank"
                    >
                        {temporaryLink[0]}
                    </a>
                )}
                <div className="opacity-70 italic">
                    (This temporary link will be confirmed once you generate the
                    QR Code)
                </div>
            </article>
        </>
    );
};

export default EBusinessCardQR;
