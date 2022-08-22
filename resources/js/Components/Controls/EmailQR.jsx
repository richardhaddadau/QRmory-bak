import React, { useState } from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";

const WebsiteQR = ({ setText, setChanged }) => {
    // States
    const [emailTo, setEmailTo] = useState("");
    const [emailSubject, setEmailSubject] = useState("");
    const [emailBody, setEmailBody] = useState("");

    const updateEmail = () => {
        setText(`mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`);
        setChanged(true);
    };

    return (
        <div className="w-full max-w-md mx-auto flex justify-center">
            <div className="relative w-full">
                <label className="text-hot-pink-200">
                    Enter email address to send to:
                    <input
                        type="text"
                        className="mb-8 w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                        onChange={(el) => {
                            setEmailTo(el.target.value);
                            updateEmail();
                        }}
                    />
                </label>

                <label className="text-hot-pink-200">
                    Enter email subject:
                    <input
                        type="text"
                        className="mb-8 w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300"
                        onChange={(el) => {
                            setEmailSubject(el.target.value);
                            updateEmail();
                        }}
                    />
                </label>

                <label className="text-hot-pink-200">
                    Enter email message:
                    <textarea
                        className="w-full text-white bg-transparent border-hot-pink-200 focus:bg-hot-pink-800 transition-all duration-300 resize-none"
                        onChange={(el) => {
                            setEmailBody(el.target.value);
                            updateEmail();
                        }}
                    />
                </label>
            </div>
        </div>
    );
};

export default WebsiteQR;
