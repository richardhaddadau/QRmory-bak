import React, { useEffect, useState } from "react";
import QRCard from "@/Components/Dashboard/QRCard";
import SkeletonCard from "@/Components/Dashboard/SkeletonCard";

const MyCodes = (props) => {
    // States
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [codeList, setCodeList] = useState([]);
    const [myCodesData, setMyCodesData] = useState([]);

    const unsavedChanges = (index, value) => {
        codeList[index] = value;
    };

    let dummyData = [];

    useEffect(() => {
        if (props.data.length > 0) {
            setMyCodesData(props.data);
            setLoading(false);

            // TODO: Check if data has changed and sync
        } else {
            // TODO: Load codes data
            dummyData = [
                ["First Code", "Audio", "01 March, 2022"],
                ["Second Code", "Twitter", "17 September, 2022"],
                ["Third Code", "Facebook", "11 August, 2022"],
                ["Fourth Code", "Website", "19 July, 2022"],
                ["Fifth Code", "Website", "10 July, 2022"],
                ["Sixth Code", "Video", "13 October, 2022"],
                ["Seventh Code", "Poll", "28 September, 2022"],
            ];

            props.setData(dummyData);
            setMyCodesData(dummyData);

            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
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
                            {myCodesData.map((item, index) => {
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
