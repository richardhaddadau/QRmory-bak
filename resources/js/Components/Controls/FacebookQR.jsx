import React from "react";

const FacebookQR = ({ setText, setChanged }) => {
    return (
        <>
            <label className="control-label">
                Enter Facebook Username:
                <div className="flex flex-row flex-nowrap">
                    <p className="pt-2 text-qrmory-purple-400 font-bold text-lg">
                        https://facebook.com/
                    </p>
                    <input
                        type="text"
                        className="control-input"
                        onChange={(el) => {
                            setText(`https://facebook.com/${el.target.value}`);
                            setChanged(true);
                        }}
                    />
                </div>
            </label>
        </>
    );
};

export default FacebookQR;
