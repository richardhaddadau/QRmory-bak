import faunadb from "faunadb";

const q = faunadb.query;
const faunaKey = "fnAExEoXzbACVOkVYjGRJqAl_ompChQbamP_CB--";

class FaunaDriver {
    constructor(token) {
        this.headers = {
            "content-type": "application/json",
        };
        this.domain = "db.fauna.com";
        this.port = 443;
        this.scheme = "https";

        // Client Config
        this.client = new faunadb.Client({
            headers: this.headers,
            domain: this.domain,
            port: this.port,
            scheme: this.scheme,
            secret: token || faunaKey,
        });
    }

    GenerateNewLink = async (temporary, sendBack) => {
        console.log("hello");
        // const getNow = Date.now();
        // const newLink = comprssed;
        // newLink.Compress(getNow, 7);
        // newLink.longUrl = `https://qrmory.com/${newLink.shortUrl}`;
        //
        // console.log(getNow);
        // console.log(newLink.shortUrl);
        // console.log(newLink.longUrl);
        //
        // await this.client
        //     .query(
        //         q.Create(q.Collection("links"), {
        //             data: {
        //                 short_url: newLink.shortUrl,
        //                 long_url: newLink.longUrl,
        //                 clicks: 0,
        //                 temporary: temporary,
        //                 deleted: false,
        //             },
        //         })
        //     )
        //     .then(async (res) => {
        //         const newRef = res["ref"]["value"]["id"];
        //         newLink.Compress(newRef);
        //         newLink.longUrl = `https://qrmory.com/${newLink.shortUrl}`;
        //
        //         console.log(newLink.shortUrl);
        //         console.log(newLink.longUrl);
        //
        //         await this.client.query(
        //             q.Update(q.Ref(q.Collection("links"), newRef), {
        //                 data: {
        //                     short_url: newLink.shortUrl,
        //                     long_url: newLink.longUrl,
        //                 },
        //             })
        //         );
        //     });
        //
        // return sendBack ? `https://comprss.it/${newLink.shortUrl}` : null;
    };

    GetLinks = async () => {
        let links = [];

        await this.client
            .query(
                q.Map(
                    q.Paginate(q.Match(q.Index("all_links"))),
                    q.Lambda("X", q.Get(q.Var("X")))
                )
            )
            .then((res) => {
                links = res;
            });

        return links;
    };

    GetLinkByShortUrl = async (searchUrl) => {
        let found = [];

        await this.client
            .query(
                q.Map(
                    q.Paginate(q.Match(q.Index("link_by_shorturl"), searchUrl)),
                    q.Lambda("X", q.Get(q.Var("X")))
                )
            )
            .then((res) => {
                found = res;
            });

        return found;
    };
}

const faunaDriver = new FaunaDriver();
export { faunaDriver };
