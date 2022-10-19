import React, { useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import DashNavBar from "@/Components/DashNavBar";
import {
    FaChartPie,
    FaClipboardList,
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

            <div className="flex flex-col h-screen overflow-hidden">
                <DashNavBar props={props} />

                <main className="flex flex-col sm:flex-row h-full w-full overflow-hidden">
                    <nav className="flex flex-row sm:flex-col justify-between h-16 sm:h-full w:full sm:w-15 md:w-max bg-white transition-all duration-300">
                        <div className="flex flex-row sm:flex-col xs:justify-evenly w-full">
                            {Object.keys(sideNav).map((item) => {
                                return (
                                    <div
                                        className="cursor-pointer flex sm:grow sm:w-44 items-center xs:justify-center bg-white hover:bg-qrmory-purple-500 text-qrmory-purple-500 hover:text-white transition-all duration-300"
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
                                        <span className="hidden sm:block text-lg font-bold">
                                            {sideNav[item]["title"]}
                                        </span>
                                    </div>
                                );
                            })}
                            <div className="hidden xs:flex cursor-pointer flex sm:grow sm:w-44 items-center xs:justify-center bg-white hover:bg-qrmory-purple-500 text-qrmory-purple-500 hover:text-white transition-all duration-300">
                                <div className="flex items-center justify-center w-16 h-20">
                                    <FaClipboardList size={30} />
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer px-3 hidden sm:flex flex-col justify-center h-20 bg-white hover:bg-qrmory-purple-500 text-qrmory-purple-500 hover:text-white transition-all duration-300">
                            <div className="hidden md:flex flex-row gap-1 items-center justify-between w-full">
                                <span>Codes:</span>
                                <div className="flex flex-col md:flex-row items-center text-base font-bold">
                                    <span>2500</span>
                                    <span>/</span>
                                    <span>2500</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full">
                                <span>Quota</span>
                            </div>
                            <span className="text-sm text-right italic">
                                Get More
                            </span>
                        </div>
                    </nav>

                    <section className="mx-auto p-4 md:p-8 grow w-full overflow-y-auto text-center text-qrmory-purple-500 bg-stone-100">
                        {selectedComponent ? (
                            selectedComponent
                        ) : (
                            <DashboardMain />
                        )}
                    </section>
                </main>
            </div>
        </>
    );
}
