class CompressIt {
    constructor(value) {
        this.shortUrl = "";
        this.longUrl = value;
        this.title = "";
        this.clicks = 0;
    }

    Compress = (givenRef, tryLength) => {
        if (!givenRef) return undefined;

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

        console.log(`Optimised: ${optimisedCompressedSite}`);

        this.shortUrl = optimisedCompressedSite;
    };
}

const comprssed = new CompressIt();
export { comprssed };
