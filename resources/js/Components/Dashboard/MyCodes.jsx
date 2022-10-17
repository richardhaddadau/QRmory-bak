import React, { useState } from "react";
import QRCard from "@/Components/Dashboard/QRCard";

const MyCodes = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div>
                <h1 className="text-left text-xl font-bold">My Codes</h1>

                <section className="py-4 grid grid-cols-3 gap-3">
                    <QRCard />
                    <QRCard />
                    <QRCard />
                    <QRCard />
                    <QRCard />
                    <QRCard />
                </section>
            </div>
        </>
    );
};

export default MyCodes;
