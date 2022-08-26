import React from "react";

const TwitterQR = ({ setText, setChanged }) => {
    return (
        <div className="w-full max-w-md mx-auto flex justify-center">
            <div className="relative w-full">
                <label className="text-hot-pink-200">
                    Enter Twitter Username:
                    <div className="flex flex-row flex-nowrap">
                        <p className="pt-2 text-white font-bold text-lg">
                            https://twitter.com/
                        </p>
                        <input
                            type="text"
                            className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                            onChange={(el) => {
                                setText(
                                    `https://twitter.com/${el.target.value}`
                                );
                                setChanged(true);
                            }}
                        />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default TwitterQR;
