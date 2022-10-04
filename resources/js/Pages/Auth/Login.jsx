import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full control-input"
                        autoComplete="username"
                        onChange={onHandleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-6">
                    <Label forInput="password" value="Password" />

                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full control-input"
                        autoComplete="current-password"
                        onChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="px-1 py-0.5 text-sm text-stone-400 hover:text-white hover:bg-qrmory-purple-500 hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        {/*<Checkbox*/}
                        {/*    name="remember"*/}
                        {/*    value={data.remember}*/}
                        {/*    handleChange={onHandleChange}*/}
                        {/*/>*/}

                        {/*<span className="ml-2 text-sm text-gray-600">*/}
                        {/*    Remember me*/}
                        {/*</span>*/}
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <button
                        className="ml-4 px-4 py-2 rounded border border-qrmory-purple-500 hover:bg-qrmory-purple-500 text-qrmory-purple-500 text-sm uppercase font-bold hover:text-white hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                        disabled={processing}
                    >
                        Log in
                    </button>
                </div>
            </form>

            <div className="mt-6 flex items-center justify-center">
                <Link
                    href={route("register")}
                    className="px-1 py-0.5 text-sm text-stone-400 hover:text-white hover:bg-qrmory-purple-500 hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                >
                    Not a member yet?
                </Link>
            </div>
        </Guest>
    );
}
