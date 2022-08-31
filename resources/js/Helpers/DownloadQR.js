import React from "react";

const cleanTitle = (title) => {
    return title.replace(" ", "-").toLowerCase();
};

const DownloadSVG = (svgData, title) => {
    const svgBlob = new Blob([svgData], {
        type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.download = cleanTitle(title).length
        ? cleanTitle(title) + ".svg"
        : "awesome-qr.svg";
    document.querySelector("#final-qr").append(downloadLink);
    downloadLink.href = svgUrl;
    downloadLink.click();
    downloadLink.remove();
};

const DownloadJPG = () => {};

const DownloadPNG = () => {};

const DownloadPDF = () => {};

export { DownloadPNG, DownloadJPG, DownloadPDF, DownloadSVG };
