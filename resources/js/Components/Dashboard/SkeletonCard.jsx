import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Skeleton } from "@mui/material";

const SkeletonCard = ({ title = "Untitled", type = "QR Type" }) => {
    // States
    const [favourite, setFavourite] = useState(false);

    const handleFavourite = () => {
        setFavourite(!favourite);
    };

    return (
        <>
            <article className="p-4 w-full rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="pb-2 flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-start">
                        <Skeleton animation={"wave"} height={30} width={100} />
                        <Skeleton animation={"wave"} height={15} width={50} />
                    </div>
                    <Skeleton animation={"wave"} height={40} width={10} />
                </div>
                <div className="pt-2 flex flex-row items-center justify-between border-t-1">
                    <div
                        className="cursor-pointer transition-all duration-300"
                        onClick={handleFavourite}
                    >
                        <Skeleton animation={"wave"} height={35} width={75} />
                    </div>
                    <div className="cursor-pointer text-stone-400 hover:text-red-700 transition-all duration-300">
                        <Skeleton animation={"wave"} height={35} width={20} />
                    </div>
                </div>
            </article>
        </>
    );
};

export default SkeletonCard;
