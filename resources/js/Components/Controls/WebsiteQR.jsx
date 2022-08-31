import React, { useState } from "react";

const WebsiteQR = ({ setText, setChanged }) => {
    const [protocol, setProtocol] = useState("https");
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    return (
        <>
            <label className="control-label">
                Enter Website:
                <div>
                    <select
                        id="protocol-selector"
                        className="rounded-xl"
                        onChange={(el) => {
                            const siteInput =
                                document.getElementById("site-input");

                            setText(el.target.value + "://" + siteInput.value);
                            setChanged(true);
                            setProtocol(el.target.value);
                        }}
                    >
                        <option value="https">https://</option>
                        <option value="http">http://</option>
                    </select>
                    <input
                        id="site-input"
                        type="text"
                        className="control-input"
                        onKeyDown={(e) => {
                            if (e.key === " ") {
                                e.preventDefault();
                            }
                        }}
                        onPaste={(el) => {
                            const protocolSelector =
                                document.getElementById("protocol-selector");

                            let currentValue = el.target.value;
                            let siteUrl;

                            try {
                                siteUrl = new URL(currentValue);
                            } catch (e) {
                                try {
                                    siteUrl = new URL("http://" + currentValue);
                                } catch (e) {
                                    setIsError(true);
                                    setErrorMessage();
                                    return false;
                                }
                            }

                            let getProtocol = siteUrl.protocol.substring(
                                0,
                                siteUrl.protocol.length - 1
                            );

                            let getSite = siteUrl
                                .toString()
                                .substring(
                                    getProtocol.length + 3,
                                    siteUrl.toString().length
                                );

                            protocolSelector.value = getProtocol;
                            setProtocol(getProtocol);

                            el.target.value = getSite.toString();

                            setText(getSite.toString());
                            setChanged(true);
                        }}
                        onChange={(el) => {
                            const protocolSelector =
                                document.getElementById("protocol-selector");

                            const httpsStarting = el.target.value.substring(
                                0,
                                8
                            );
                            const httpStarting = el.target.value.substring(
                                0,
                                7
                            );

                            if (
                                httpsStarting === "https://" ||
                                httpStarting === "http://"
                            ) {
                                setIsError(true);
                                setErrorMessage(
                                    `You don't need to type in a protocol (eg. http:// or https://).`
                                );
                            } else {
                                setIsError(false);
                            }

                            setText(
                                protocolSelector.value + "://" + el.target.value
                            );
                            setChanged(true);
                        }}
                    />
                </div>
                <p className="text-sm italic text-rose-600">
                    {isError ? errorMessage : null}
                </p>
            </label>
        </>
    );
};

export default WebsiteQR;
