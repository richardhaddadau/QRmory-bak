import faunadb from "faunadb";
import { comprssed } from "@/Helpers/ComprssIt";

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

    handleError = (value) => {
        console.error(
            "Error: [%s] %s: %s",
            value.name,
            value.message,
            value.errors()[0].description
        );
    };

    GetSecret = () => {
        return this.client;
    };

    GetUsers = async () => {
        let users = [];

        await this.client
            .query(
                q.Map(
                    q.Paginate(q.Match(q.Index("all_users"))),
                    q.Lambda("X", q.Get(q.Var("X")))
                )
            )
            .then((res) => {
                users = res;
            })
            .catch((err) => {
                this.handleError(err);
                return false;
            });

        return users;
    };

    GetUserByEmail = async (email) => {
        let user;

        await this.client
            .query(
                q.Map(
                    q.Paginate(q.Match(q.Index("users_by_email"), email)),
                    q.Lambda("X", q.Get(q.Var("X")))
                )
            )
            .then((res) => (user = res["data"]))
            .catch((err) => {
                this.handleError(err);
                return false;
            });

        return user.length > 0 ? user : false;
    };

    RegisterNewUsers = async (newUserObject) => {
        const newName = newUserObject.name;
        const newEmail = newUserObject.email;
        const newPassword = newUserObject.password;

        let userFound = false;

        let users = await this.GetUsers();
        for (let user of users["data"]) {
            if (newEmail === user["data"]["email"]) {
                userFound = true;
            }
        }

        if (!userFound) {
            await this.client
                .query(
                    q.Create(q.Collection("users"), {
                        credentials: {
                            password: newPassword,
                        },
                        data: {
                            email: newEmail,
                            name: newName,
                        },
                    })
                )
                .catch((err) => {
                    this.handleError(err);
                    return false;
                });

            return true;
        } else {
            return false;
        }
    };

    LoginUser = async (userObject) => {
        if (!userObject.email) return undefined;
        if (!userObject.password) return undefined;

        const userEmail = userObject.email;
        const userPassword = userObject.password;

        const user = await this.GetUserByEmail(userEmail);

        let loggedInUser = {};

        if (user) {
            const ref = user[0]["ref"]["value"]["id"];

            await this.client
                .query(
                    q.Login(q.Ref(q.Collection("users"), ref), {
                        password: userPassword,
                    })
                )
                .then((res) => {
                    loggedInUser = {
                        secret: res["secret"],
                    };

                    if (res) {
                        this.client = new faunadb.Client({
                            headers: this.headers,
                            domain: this.domain,
                            port: this.port,
                            scheme: this.scheme,
                            secret: loggedInUser.secret,
                        });
                    }

                    return loggedInUser.secret;
                })
                .catch((err) => {
                    this.handleError(err);
                    return false;
                });
        }
    };

    LogOut = async () => {
        await this.client
            .query(q.Logout(true))
            .then((res) => console.log(res))
            .catch((err) => {
                this.handleError(err);
                return false;
            });
    };

    // {
    //     "ref": {
    //         "@ref": {
    //             "id": "345075506061771348",
    //             "collection": {
    //                 "@ref": {
    //                     "id": "tokens"
    //                 }
    //             }
    //         }
    //     },
    //     "ts": 1665348497365000,
    //     "instance": {
    //         "@ref": {
    //             "id": "344692163671491154",
    //             "collection": {
    //                 "@ref": {
    //                     "id": "users",
    //                     "collection": {
    //                         "@ref": {
    //                             "id": "collections"
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     "secret": "fnEEyfRYL4ACVATFuroucApSzOGyi4J0IOl4eQK0zTMwD_zTaQo"
    // }

    GetCurrentUser = async () => {
        let thisUser;

        await this.client
            .query(q.CurrentIdentity)
            .then((res) => console.log(res));
    };

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
            })
            .catch((err) => {
                this.handleError(err);
                return false;
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
            })
            .catch((err) => {
                this.handleError(err);
                return false;
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
            })
            .catch((err) => {
                this.handleError(err);
                return false;
            });

        return found;
    };
}

const faunaDriver = new FaunaDriver();
export { faunaDriver };
