import React, { useState } from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";

const SmsQR = ({ setText, setChanged }) => {
    const [smsNumber, setSmsNumber] = useState("");
    const [smsBody, setSmsBody] = useState("");

    const updateSMS = () => {
        setText(`sms:${smsNumber}&body=${smsBody}`);
        setChanged(true);
    };

    return (
        <div className="w-full max-w-md mx-auto flex justify-center">
            <div className="relative w-full">
                <label className="text-hot-pink-200">
                    Enter Phone Number:
                    <input
                        type="text"
                        className="mb-8 w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                        onChange={(el) => {
                            setSmsNumber(el.target.value);
                            updateSMS();
                        }}
                    />
                </label>

                <label className="text-hot-pink-200">
                    Enter Message:
                    <textarea
                        className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300 resize-none"
                        onChange={(el) => {
                            setSmsBody(el.target.value);
                            updateSMS();
                        }}
                    />
                </label>
            </div>
        </div>
    );
};

export default SmsQR;
