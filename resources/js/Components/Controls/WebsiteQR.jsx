import React, { useState } from "react";

const WebsiteQR = ({ setText, setChanged }) => {
    const [protocol, setProtocol] = useState("https");

    return (
        <>
            <label className="control-label">
                Enter Website:
                <div>
                    <select
                        id="protocol-selector"
                        className="rounded-xl"
                        onChange={(el) => setProtocol(el.target.value)}
                    >
                        <option value="https">https://</option>
                        <option value="http">http://</option>
                    </select>
                    <input
                        type="text"
                        className="control-input"
                        onChange={(el) => {
                            const httpProtocol = "http://";
                            const httpsProtocol = "https://";
                            const protocolSelector =
                                document.getElementById("protocol-selector");

                            let currentValue = el.target.value;
                            let starting = currentValue.substring(0, 7);

                            let siteUrl;

                            try {
                                siteUrl = new URL(currentValue);
                            } catch (e) {
                                return false;
                            }

                            let getProtocol = siteUrl.protocol.substring(
                                0,
                                siteUrl.protocol.length - 1
                            );
                            let getSite = currentValue.substring(
                                getProtocol.length + 2,
                                currentValue.length
                            );

                            protocolSelector.value = getProtocol;
                            setProtocol(getProtocol);
                            currentValue = 

                            if (starting === "https:/") {
                                currentValue = currentValue.substring(
                                    8,
                                    currentValue.length
                                );
                            } else if (starting === "http://") {
                                protocolSelector.value = "http";
                                setProtocol("http");
                                currentValue = currentValue.substring(
                                    7,
                                    currentValue.length
                                );
                            }

                            el.target.value = currentValue;

                            setText(currentValue);
                            setChanged(true);
                        }}
                    />
                </div>
            </label>
        </>
    );
};

export default WebsiteQR;
