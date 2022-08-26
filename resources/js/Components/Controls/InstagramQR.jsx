import React from "react";

const InstagramQR = ({ setText, setChanged }) => {
    return (
        <>
            <label className="text-stone-500">
                Enter Instagram Username:
                <div className="flex flex-row flex-nowrap">
                    <p className="pt-2 text-stone-700 font-bold text-lg">
                        https://www.instagram.com/
                    </p>
                    <input
                        type="text"
                        className="w-full text-hot-pink-500 font-bold bg-transparent border-stone-500 focus:bg-stone-300 transition-all duration-300"
                        onChange={(el) => {
                            setText(
                                `https://www.instagram.com/${el.target.value}`
                            );
                            setChanged(true);
                        }}
                    />
                </div>
            </label>
        </>
    );
};

export default InstagramQR;
