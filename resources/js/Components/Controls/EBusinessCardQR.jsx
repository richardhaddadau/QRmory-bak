import React from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";

const EBusinessCardQR = ({ setText, setChanged }) => {
    return (
        <label className="control-label">
            Enter Website:
            <input
                type="text"
                className="control-input"
                onChange={(el) => {
                    setText(el.target.value);
                }}
            />
        </label>
    );
};

export default EBusinessCardQR;
