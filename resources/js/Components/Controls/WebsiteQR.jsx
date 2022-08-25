import React from "react";

const WebsiteQR = ({ setText, setChanged }) => {
    return (
        <>
            <label className="text-stone-500 mb-8">
                Enter Website:
                <input
                    type="text"
                    className="w-full text-hot-pink-500 font-bold bg-transparent border-stone-500 focus:bg-stone-300 transition-all duration-300"
                    onChange={(el) => {
                        setText(el.target.value);
                        setChanged(true);
                    }}
                />
            </label>
        </>
    );
};

export default WebsiteQR;
