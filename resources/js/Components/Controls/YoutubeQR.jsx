import React, { useState } from "react";

const YoutubeQR = ({ setText, setChanged }) => {
    // States
    const [youTubeURL, setYouTubeURL] = useState("https://www.youtube.com/");

    return (
        <>
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

            <label className="text-stone-500">
                Enter YouTube detail:
                <div className="flex flex-row flex-nowrap">
                    <p className="pt-2 text-stone-700 font-bold text-lg">
                        {youTubeURL}
                    </p>
                    <input
                        type="text"
                        className="w-full text-hot-pink-500 font-bold bg-transparent border-stone-500 focus:bg-stone-300 transition-all duration-300"
                        onChange={(el) => {
                            setText(`${youTubeURL}${el.target.value}`);
                            setChanged(true);
                        }}
                    />
                </div>
            </label>
        </>
    );
};

export default YoutubeQR;
