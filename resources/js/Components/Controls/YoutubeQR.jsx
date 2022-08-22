import React, { useState } from "react";

const YoutubeQR = ({ setText, setChanged }) => {
    // States
    const [youTubeURL, setYouTubeURL] = useState("https://www.youtube.com/");

    return (
        <div className="w-full max-w-md mx-auto flex justify-center">
            <div className="relative w-full">
                {/*<input*/}
                {/*    type="radio"*/}
                {/*    value="Use Username"*/}
                {/*    name="youtubeType"*/}
                {/*    onChange={(el) => {*/}
                {/*        setYouTubeURL("https://www.youtube.com/");*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<input*/}
                {/*    type="radio"*/}
                {/*    value="Use Username"*/}
                {/*    name="youtubeType"*/}
                {/*    onChange={() => {*/}
                {/*        setYouTubeURL("https://www.youtube.com/watch?v=");*/}
                {/*    }}*/}
                {/*/>*/}

                <label className="text-hot-pink-200">
                    Enter YouTube detail:
                    <div className="flex flex-row flex-nowrap">
                        <p className="pt-2 text-white font-bold text-lg">
                            {youTubeURL}
                        </p>
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            onChange={(el) => {
                                setText(`${youTubeURL}${el.target.value}`);
                                setChanged(true);
                            }}
                        />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default YoutubeQR;
