import React from "react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";

const WebsiteQR = () => {
    return (
        <div>
            <Label forInput="url">
                Enter Website:
                <Input type="text" name="url" />
            </Label>
        </div>
    );
};

export default WebsiteQR;
