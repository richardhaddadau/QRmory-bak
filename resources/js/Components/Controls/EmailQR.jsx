import React, { useState } from "react";

const EmailQR = ({ setText, setChanged }) => {
    // States
    const [emailTo, setEmailTo] = useState("");
    const [emailSubject, setEmailSubject] = useState("");
    const [emailBody, setEmailBody] = useState("");

    const updateEmail = () => {
        setText(`mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`);
        setChanged(true);
    };

    return (
        <>
            <div className="mb-8">
                <label className="text-stone-500">
                    Enter email address to send to:
                    <input
                        type="text"
                        className="w-full text-hot-pink-500 font-bold bg-transparent border-stone-500 focus:bg-stone-300 transition-all duration-300"
                        onChange={(el) => {
                            setEmailTo(el.target.value);
                            updateEmail();
                        }}
                    />
                </label>
            </div>

            <div className="mb-8">
                <label className="text-stone-500">
                    Enter email subject:
                    <input
                        type="text"
                        className="w-full text-hot-pink-500 font-bold bg-transparent border-stone-500 focus:bg-stone-300 transition-all duration-300"
                        onChange={(el) => {
                            setEmailSubject(el.target.value);
                            updateEmail();
                        }}
                    />
                </label>
            </div>

            <div className="mb-8">
                <label className="text-stone-500">
                    Enter email message:
                    <textarea
                        className="w-full text-hot-pink-500 font-bold bg-transparent border-stone-500 focus:bg-stone-300 transition-all duration-300 resize-none"
                        onChange={(el) => {
                            setEmailBody(el.target.value);
                            updateEmail();
                        }}
                    />
                </label>
            </div>
        </>
    );
};

export default EmailQR;
