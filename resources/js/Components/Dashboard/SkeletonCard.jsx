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
            <article className="p-4 w-full rounded-lg bg-white">
                <div className="pb-2 flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col items-start">
                        {/* QR Title */}
                        <Skeleton animation={"wave"} height={30} width={100} />

                        {/* QR Type */}
                        <Skeleton animation={"wave"} height={20} width={50} />
                    </div>

                    {/* Edit Button */}
                    <Skeleton animation={"wave"} height={35} width={20} />
                </div>
                <div className="mt-1 mb-4">
                    {/* QR Compressed Link */}
                    <Skeleton animation={"wave"} height={20} width={"100%"} />
                </div>
                <div className="pt-2 flex flex-row items-center justify-between border-t-1">
                    <div>
                        {/* "Created On" Text */}
                        <Skeleton animation={"wave"} height={35} width={75} />
                    </div>
                    <div>
                        {/* Delete Button */}
                        <Skeleton animation={"wave"} height={35} width={20} />
                    </div>
                </div>
            </article>
        </>
    );
};

export default SkeletonCard;
