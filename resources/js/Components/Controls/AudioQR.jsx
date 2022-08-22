import React from "react";

const AudioQR = ({ setText }) => {
    return (
        <div className="w-full max-w-md mx-auto flex justify-center">
            <div className="relative w-full">
                <label className="text-hot-pink-200">
                    Upload Audio:
                    <input
                        type="text"
                        className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                        onChange={(el) => {
                            setText(el.target.value);
                        }}
                    />
                </label>
            </div>
        </div>
    );
};

export default AudioQR;
