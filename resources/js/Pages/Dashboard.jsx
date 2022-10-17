import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import DashNavBar from "@/Components/DashNavBar";
import {
    FaChartPie,
    FaClone,
    FaPlusCircle,
    FaThLarge,
    FaToolbox,
} from "react-icons/all";
import CreateACode from "@/Components/Dashboard/CreateACode";
import DashboardMain from "@/Components/Dashboard/DashboardMain";
import MyCodes from "@/Components/Dashboard/MyCodes";
import Analytics from "@/Components/Dashboard/Analytics";

export default function Dashboard(props) {
    const sideNav = {
        dashboard: {
            title: "Dashboard",
            icon: <FaThLarge size={30} />,
            component: <DashboardMain />,
        },
        newCode: {
            title: "Create a Code",
            icon: <FaPlusCircle size={30} />,
            component: <CreateACode />,
        },
        myCodes: {
            title: "My Codes",
            icon: <FaToolbox size={30} />,
            component: <MyCodes />,
        },
        analytics: {
            title: "Analytics",
            icon: <FaChartPie size={30} />,
            component: <Analytics />,
        },
    };

    // States
    const [dashOpen, setDashOpen] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(
        <DashboardMain />
    );

    return (
        // <Authenticated
        //     auth={props.auth}
        //     errors={props.errors}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
        //     <Head title="Dashboard" />
        //
        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </Authenticated>
        <>
            <Head title="Dashboard" />

            <DashNavBar props={props} />
            <main className="flex flex-row h-screen w-full">
                <nav className="flex flex-col h-screen bg-white w-max transition-all duration-300">
                    {Object.keys(sideNav).map((item) => {
                        return (
                            <div
                                className="cursor-pointer flex w-44 items-center bg-white hover:bg-qrmory-purple-500 text-qrmory-purple-500 hover:text-white transition-all duration-300"
                                onClick={() => {
                                    setSelectedComponent(
                                        sideNav[item]["component"]
                                            ? sideNav[item]["component"]
                                            : null
                                    );
                                }}
                            >
                                <div className="flex items-center justify-center w-16 h-20">
                                    {sideNav[item]["icon"]}
                                </div>
                                <span className="text-lg font-bold">
                                    {sideNav[item]["title"]}
                                </span>
                            </div>
                        );
                    })}
                </nav>
                <section className="mx-auto p-8 w-full text-center text-qrmory-purple-500 bg-stone-100">
                    {selectedComponent ? selectedComponent : null}
                </section>
            </main>
        </>
    );
}
