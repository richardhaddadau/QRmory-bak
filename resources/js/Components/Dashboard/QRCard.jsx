import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import { FaPencilAlt, FaSave, FaTimes } from "react-icons/all";
import { Skeleton } from "@mui/material";

const QRCard = ({
    title = "Untitled",
    type = "QR Type",
    cardIndex,
    unsavedChanges,
}) => {
    const [openEdit, setOpenEdit] = useState(false);
    const [changed, setChanged] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [editLoading, setEditLoading] = useState(false);

    const handleSave = () => {
        setOpenEdit(false);
        unsavedChanges(cardIndex, false);
    };

    const loadEdit = () => {
        // TODO: Load card data
        setEditLoading(true);
        setOpenEdit(true);

        setTimeout(() => {
            setEditLoading(false);
        }, 1500);
    };

    const toggleAlert = () => {
        setOpenAlert(!openAlert);
    };

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
                    {editLoading ? (
                        <CircularProgress size={20} color={"inherit"} />
                    ) : openEdit ? (
                        <div className="flex flex-row flex-nowrap gap-2">
                            <FaTimes
                                className="cursor-pointer text-stone-400 hover:text-red-700 transition-all duration-300"
                                title="Cancel Editing"
                                size={20}
                                onClick={() => {
                                    changed
                                        ? setOpenAlert(true)
                                        : setOpenEdit(false);
                                }}
                            />
                            <FaSave
                                className="cursor-pointer text-stone-400 hover:text-qrmory-purple-500 transition-all duration-300"
                                title="Save Changes"
                                size={20}
                                onClick={() => {
                                    // TODO: Save Changes
                                    setChanged(false);
                                    setOpenEdit(false);
                                    handleSave();
                                }}
                            />
                        </div>
                    ) : (
                        <FaPencilAlt
                            className="cursor-pointer text-stone-400 hover:text-qrmory-purple-500 transition-all duration-300"
                            title="Edit Code"
                            onClick={loadEdit}
                        />
                    )}
                </div>
                <div className="mt-1 mb-4 text-left text-sm italic hover:translate-x-1 hover:-translate-y-1 transition-all duration-300">
                    {/* TODO: Load card compressed link */}
                    <a
                        href="https://qrmory.com/visit/asdasd"
                        className="p-1 pr-2 hover:bg-qrmory-purple-500 hover:text-white"
                    >
                        https://qrmory.com/visit/asdasd
                    </a>
                </div>
                <div
                    className={
                        "py-2 flex flex-row items-center justify-between border-t-1" +
                        (openEdit
                            ? " block transition-all duration-300"
                            : " hidden transition-all duration-300")
                    }
                >
                    {editLoading ? (
                        <div className="flex flex-col w-full">
                            <Skeleton height={30} width={50} />
                            <Skeleton height={30} width={"100%"} />
                            <Skeleton height={20} width={"80%"} />
                        </div>
                    ) : (
                        <div className="flex flex-col w-full text-left">
                            {/* TODO: Load card data */}
                            <input type="text" value="Sample" />
                            <span className="pt-1 pb-2 text-sm italic">
                                Enter a website
                            </span>
                        </div>
                    )}
                </div>
                <div className="pt-2 flex flex-row items-center justify-between border-t-1">
                    <div className="italic text-stone-400 text-sm">
                        Created on 01 March, 2022
                    </div>
                    <div
                        className="cursor-pointer text-stone-400 hover:text-red-700 transition-all duration-300"
                        title="Delete Code"
                    >
                        <DeleteIcon fontSize={"medium"} />
                    </div>
                </div>
            </article>

            <Dialog
                open={openAlert}
                onClose={toggleAlert}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You have unsaved changes. Would you like to keep editing
                        or discard the changes you've made?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleAlert}>Discard Changes</Button>
                    <Button onClick={toggleAlert} autoFocus>
                        Keep Editing
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default QRCard;
