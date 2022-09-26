import { faunaDriver } from "@/Helpers/FaunaDriver";

class CompressIt {
    constructor(value) {
        this.slug = "";
        this.link = value;
        this.title = "";
        this.clicks = 0;
    }

    Compress = async (givenRef, tryLength = 7) => {
        if (!givenRef) return undefined;

        // Check if short link already exists
        // const currentLinks = await faunaDriver.GetLinks();
        // const currentLinksArray = [];
        // const currentShortLinksArray = [];
        //
        // // Feed arrays with current links available
        // currentLinks["data"].map((item) => {
        //     currentLinksArray.push(item["data"]);
        //     currentShortLinksArray.push(item["data"]["short_url"]);
        // });
        //
        // currentShortLinksArray.includes("xxx");

        let compressedSite = "";
        let optimisedCompressedSite = "";
        let compressedArray = [];
        let currentDiv = givenRef;
        let remainder = 0;

        // Constants
        const urlLength = tryLength;
        const possibleChars =
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const possibleCharsLength = possibleChars.length;

        while (currentDiv > 0) {
            remainder = Math.floor(currentDiv % possibleCharsLength);
            currentDiv = Math.floor(currentDiv / possibleCharsLength);
            compressedArray.unshift(remainder);
        }

        for (const item of compressedArray) {
            compressedSite += possibleChars[item];
        }

        // Push to optimisedCompressedSite
        optimisedCompressedSite = compressedSite.slice();

        if (compressedSite.length > urlLength) {
            optimisedCompressedSite = optimisedCompressedSite.substring(
                compressedSite.length - urlLength,
                compressedSite.length
            );
        } else if (compressedSite.length < urlLength) {
            // Analytics Point: should keep record of how many document references fell under the urlLength
            // If a lot, perhaps find a more stable filler than random chars

            let extraChars = "";

            for (
                let count = 0;
                count < compressedSite.length - urlLength;
                count++
            ) {
                extraChars +=
                    possibleChars[Math.random() * possibleCharsLength];
            }

            optimisedCompressedSite += possibleChars.slice();
        }

        this.slug = optimisedCompressedSite;
    };
}

const comprssed = new CompressIt();
export { comprssed };
