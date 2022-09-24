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

    GenerateNewLink = async (temporary) => {
        await this.client.query(
            q.Create(q.Collection("links"), {
                data: {
                    short_url: "",
                    long_url: "",
                    clicks: 0,
                    temporary: temporary,
                    deleted: false,
                },
            })
        );
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
