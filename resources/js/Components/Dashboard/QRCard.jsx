import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const QRCard = ({ title = "Untitled", type = "QR Type" }) => {
    return (
        <>
            <article className="p-4 w-full rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="pb-2 flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-start">
                        <h2 className="-mb-1 text-left text-lg font-medium">
                            {title}
                        </h2>
                        <h3 className="text-stone-500">{type}</h3>
                    </div>
                    <MoreVertIcon fontSize={"medium"} />
                </div>
                <div className="pt-2 flex flex-row items-center justify-between border-t-1">
                    <div className="italic text-stone-400 text-sm">
                        Created on 01 March, 2022
                    </div>
                    <div className="cursor-pointer text-stone-400 hover:text-red-700 transition-all duration-300">
                        <DeleteIcon fontSize={"medium"} />
                    </div>
                </div>
            </article>
        </>
    );
};

export default QRCard;
