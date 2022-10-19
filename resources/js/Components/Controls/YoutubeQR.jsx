import React, { useState } from "react";

const YoutubeQR = ({ setText, setChanged }) => {
    // States
    const [urlType, setUrlType] = useState("video");
    const [youTubeURL, setYouTubeURL] = useState(
        "https://www.youtube.com/watch?v="
    );

    return (
        <>
            <label className="control-label">
                Enter YouTube detail:
                <div className="flex flex-col xl:flex-row flex-nowrap">
                    <select
                        id="protocol-selector"
                        className="mr-2 mt-1 rounded-xl"
                        onChange={(el) => {
                            const youtubeInput =
                                document.getElementById("youtube-input").value;

                            if (el.target.value === "video") {
                                setYouTubeURL(
                                    "https://www.youtube.com/watch?v="
                                );
                            } else {
                                setYouTubeURL("https://www.youtube.com/");
                            }

                            if (youtubeInput) {
                                setText(youTubeURL + youtubeInput);
                            } else {
                                setText("");
                            }

                            setChanged(true);
                        }}
                    >
                        <option value="video">Video</option>
                        <option value="username">Username</option>
                    </select>
                    <p className="pt-2 text-qrmory-purple-500 font-bold text-lg">
                        {youTubeURL}
                    </p>
                    <input
                        id="youtube-input"
                        type="text"
                        className={
                            "control-input " +
                            (urlType === "video" ? "shortest" : "")
                        }
                        onChange={(el) => {
                            if (el.target.value) {
                                setText(`${youTubeURL}${el.target.value}`);
                            } else {
                                setText("");
                            }

                            setChanged(true);
                        }}
                    />
                </div>
            </label>
        </>
    );
};

export default YoutubeQR;
