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
            <div className="mx-auto flex flex-col grow justify-center w-full text-left">
                <label className="control-label">
                    Enter email address to send to:
                    <input
                        type="text"
                        className="control-input"
                        onChange={(el) => {
                            setEmailTo(el.target.value);
                            updateEmail();
                        }}
                    />
                </label>
            </div>

            <div className="mx-auto flex flex-col grow justify-center w-full text-left">
                <label className="control-label">
                    Enter email subject:
                    <input
                        type="text"
                        className="control-input"
                        onChange={(el) => {
                            setEmailSubject(el.target.value);
                            updateEmail();
                        }}
                    />
                </label>
            </div>

            <div className="mx-auto flex flex-col grow justify-center w-full text-left">
                <label className="control-label">
                    Enter email message:
                    <textarea
                        className="control-textarea"
                        rows={4}
                        onChange={(el) => {
                            setEmailBody(
                                el.target.value.replaceAll("\n", "%0D0A")
                            );
                            updateEmail();
                            console.log(emailSubject);
                        }}
                    />
                </label>
            </div>
        </>
    );
};

export default EmailQR;
