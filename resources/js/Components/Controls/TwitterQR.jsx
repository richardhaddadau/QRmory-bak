import React from "react";

const TwitterQR = ({ setText, setChanged }) => {
    return (
        <>
            <label className="control-label">
                Enter Twitter Username:
                <div className="flex flex-row flex-nowrap">
                    <p className="pt-2 text-qrmory-purple-400 font-bold text-lg">
                        https://twitter.com/
                    </p>
                    <input
                        type="text"
                        className="control-input"
                        onChange={(el) => {
                            setText(`https://twitter.com/${el.target.value}`);
                            setChanged(true);
                        }}
                    />
                </div>
            </label>
        </>
    );
};

export default TwitterQR;
