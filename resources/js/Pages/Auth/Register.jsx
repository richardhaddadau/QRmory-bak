import React, { useEffect, useState } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
// import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { FaCheck, FaEye, FaEyeSlash, FaTimes } from "react-icons/all";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const [passwordType, setPasswordType] = useState("password");
    const [passwordOneLetter, setPasswordOneLetter] = useState(false);
    const [passwordCapitalLetter, setPasswordCapitalLetter] = useState(false);
    const [passwordOneNumber, setPasswordOneNumber] = useState(false);
    const [passwordEight, setPasswordEight] = useState(false);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );

        if (event.target.name === "password") {
            const currentPass = event.target.value;

            setPasswordOneLetter(currentPass.match(/[A-z]+/gi));
            setPasswordCapitalLetter(currentPass.match(/[A-Z]+/g));
            setPasswordOneNumber(currentPass.match(/[0-9]+/g));
            setPasswordEight(currentPass.match(/[A-z0-9]{8,}/gi));
        }
    };

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    };

    const submit = (e) => {
        e.preventDefault();

        if (
            data["name"] &&
            data["email"] &&
            data["password"] &&
            passwordEight &&
            passwordOneNumber &&
            passwordOneLetter &&
            passwordCapitalLetter
        ) {
            post(route("register"));
        }
    };

    return (
        <Guest>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Name" />

                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full control-input"
                        autoComplete="name"
                        onChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-6">
                    <Label forInput="email" value="Email" />

                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full control-input"
                        autoComplete="email"
                        onChange={onHandleChange}
                        required
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
                        autoComplete="new-password"
                        onChange={onHandleChange}
                        required
                    />

                    <div className="mt-2 text-sm">
                        <p>Passwords must include:</p>
                        <ul className="">
                            <li className="flex flex-row items-center gap-2">
                                {passwordOneLetter ? (
                                    <FaCheck color="green" />
                                ) : (
                                    <FaTimes color="red" />
                                )}{" "}
                                At least one letter
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                {passwordCapitalLetter ? (
                                    <FaCheck color="green" />
                                ) : (
                                    <FaTimes color="red" />
                                )}{" "}
                                At least one capital letter
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                {passwordOneNumber ? (
                                    <FaCheck color="green" />
                                ) : (
                                    <FaTimes color="red" />
                                )}{" "}
                                At least one number
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                {passwordEight ? (
                                    <FaCheck color="green" />
                                ) : (
                                    <FaTimes color="red" />
                                )}{" "}
                                Be at least 8 characters long
                            </li>
                        </ul>
                    </div>

                    {/*<InputError message={errors.password} className="mt-2" />*/}
                </div>

                <div className="flex items-center justify-end mt-8">
                    <button
                        className="ml-4 px-4 py-2 rounded border border-qrmory-purple-500 hover:bg-qrmory-purple-500 text-qrmory-purple-500 text-sm uppercase font-bold hover:text-white hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                        processing={processing}
                    >
                        Register
                    </button>
                </div>
            </form>

            <div className="mt-6 flex items-center justify-center">
                <Link
                    href={route("login")}
                    className="px-1 py-0.5 text-sm text-stone-400 hover:text-white hover:bg-qrmory-purple-500 hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                >
                    Already a member?
                </Link>
            </div>
        </Guest>
    );
}
