import React from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";

const TextQR = ({ setText, setChanged }) => {
    return (
        <>
            <label className="text-stone-500 mb-8">
                Enter Text Message:
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

export default TextQR;
