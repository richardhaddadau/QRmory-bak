import faunadb from "faunadb";
import { comprssed } from "@/Helpers/CompressIt";

const q = faunadb.query;
const faunaKey = import.meta.env.VITE_FAUNA_KEY;

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
        let newRef;
        const getNow = Date.now();
        const newLink = comprssed;
        await newLink.Compress(getNow, 8);
        newLink.link = `https://qrmory.com/visit/${newLink.slug}`;

        await this.client
            .query(
                q.Create(q.Collection("links"), {
                    data: {
                        slug: newLink.slug,
                        link: newLink.link,
                        title: newLink.title,
                        clicks: 0,
                        temporary: temporary,
                        deleted: false,
                    },
                })
            )
            .then(async (res) => {
                newRef = res["ref"]["value"]["id"];
                await newLink.Compress(newRef, 8);
                newLink.link = `https://qrmory.com/visit/${newLink.slug}`;

                await this.client.query(
                    q.Update(q.Ref(q.Collection("links"), newRef), {
                        data: {
                            slug: newLink.slug,
                            link: newLink.link,
                        },
                    })
                );
            });

        return sendBack ? [newLink.link, newRef] : null;
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

    GetLinkBySlug = async (searchUrl) => {
        let found = [];

        await this.client
            .query(
                q.Map(
                    q.Paginate(q.Match(q.Index("link_by_slug"), searchUrl)),
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