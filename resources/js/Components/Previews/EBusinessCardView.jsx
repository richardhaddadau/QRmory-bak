import React from "react";
import QRCodeSVG from "qrcode.react";

const EBusinessCardView = ({ getValue, getChanged, getLevel }) => {
    return (
        <>
            <div className="my-16 mx-auto text-gray-600 dark:text-gray-600 text-sm">
                <QRCodeSVG
                    id="final-qr"
                    renderAs="svg"
                    value={getValue}
                    fgColor={getChanged ? "#78716c" : "black"}
                    size={180}
                    level={getLevel} // L (Low), M (Medium), Q (Quartile), H (High)
                />
            </div>
        </>
    );
};

export default EBusinessCardView;
