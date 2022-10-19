import React, { useEffect, useState } from "react";
import QRCard from "@/Components/Dashboard/QRCard";
import SkeletonCard from "@/Components/Dashboard/SkeletonCard";

const MyCodes = () => {
    // States
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [codeList, setCodeList] = useState([]);

    const unsavedChanges = (index, value) => {
        codeList[index] = value;

        console.log(codeList);
    };

    const data = [
        ["First Code", "Audio", true],
        ["Second Code", "Twitter", true],
        ["Third Code", "Facebook", false],
        ["Fourth Code", "Website", false],
        ["Fifth Code", "Website", false],
        ["Sixth Code", "Video", false],
        ["Seventh Code", "Poll", true],
        ["Eighth Code", "Email", false],
        ["Ninth Code", "Website", true],
    ];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            <div>
                <h1 className="text-left text-xl font-bold">My Codes</h1>

                <section className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {loading ? (
                        <>
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </>
                    ) : (
                        <>
                            {data.map((item, index) => {
                                codeList[index] = false;

                                return (
                                    <QRCard
                                        title={item[0]}
                                        type={item[1]}
                                        cardIndex={index}
                                        unsavedChanges={unsavedChanges}
                                        key={index}
                                    />
                                );
                            })}
                        </>
                    )}
                </section>
            </div>
        </>
    );
};

export default MyCodes;
