import React from "react";

const PhoneQR = ({ setText, setChanged }) => {
    return (
        <div className="w-full max-w-md mx-auto flex justify-center">
            <div className="relative w-full">
                <label className="text-hot-pink-200">
                    Enter Phone Number:
                    <input
                        type="tel"
                        className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                        onChange={(el) => {
                            setText(`tel:${el.target.value}`);
                            setChanged(true);
                        }}
                    />
                </label>
            </div>
        </div>
    );
};

export default PhoneQR;
