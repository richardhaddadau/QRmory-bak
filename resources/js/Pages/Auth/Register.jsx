import React, { useEffect, useState } from "react";
import Guest from "@/Layouts/Guest";
import Label from "@/Components/Label";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { FaCheck, FaEye, FaEyeSlash, FaTimes } from "react-icons/all";

import { faunaDriver } from "@/Helpers/FaunaDriver";

const Register = (props) => {
    const fauna = faunaDriver;

    const { data, setData, post, reset } = useForm({
        name: "",
        email: "",
        password: "",
    });

    const [errorEmail, setErrorEmail] = useState("");
    const [errorGeneral, setErrorGeneral] = useState("");

    const [processing, setProcessing] = useState(false);

    const [passwordType, setPasswordType] = useState("password");
    const [passwordOneLetter, setPasswordOneLetter] = useState(false);
    const [passwordCapitalLetter, setPasswordCapitalLetter] = useState(false);
    const [passwordOneNumber, setPasswordOneNumber] = useState(false);
    const [passwordSpecialCharacter, setPasswordSpecialCharacter] =
        useState(false);
    const [passwordEight, setPasswordEight] = useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordType(passwordType === "password" ? "text" : "password");
    };

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );

        setErrorGeneral("");

        if (event.target.name === "email") {
            setErrorEmail("");
        } else if (event.target.name === "password") {
            const currentPass = event.target.value;

            setPasswordOneLetter(currentPass.match(/[A-z]+/gi));
            setPasswordCapitalLetter(currentPass.match(/[A-Z]+/g));
            setPasswordOneNumber(currentPass.match(/[0-9]+/g));
            setPasswordSpecialCharacter(
                currentPass.match(/[~`!@#$%^&*()\-_+=[\]?:;<,>.]+/g)
            );
            setPasswordEight(currentPass.length > 7);
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        if (
            data["name"] &&
            data["email"] &&
            data["password"] &&
            passwordEight &&
            passwordOneNumber &&
            passwordOneLetter &&
            passwordSpecialCharacter &&
            passwordCapitalLetter
        ) {
            let users = await fauna.GetUsers();
            // TODO: Introduce Rate Limiting by IP Address
            // const currentIP = await axios
            //     .get("/grab/ip")
            //     .then((res) => (res["status"] === 200 ? res["data"] : null));
            let userFound = false;

            for (let item of users["data"]) {
                if (data["email"] === item["data"]["email"]) {
                    userFound = true;
                }
            }

            if (!userFound) {
                await fauna.RegisterNewUsers(data).then((res) => {
                    if (!res) {
                        setErrorGeneral(
                            "Oops! Something went wrong. Please try again."
                        );
                        setProcessing(false);
                    } else {
                        window.location.href = route("login");
                    }
                });
            } else {
                setErrorEmail("This email already belongs to an account.");
                setProcessing(false);
            }
        }
    };

    return (
        <Guest>
            <Head title="Sign up for free" />

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

                    {/*<InputError message={errors.name} className="mt-2" />*/}
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

                    {errorEmail ? (
                        <InputError message={errorEmail} className="mt-2" />
                    ) : null}
                </div>

                <div className="mt-6">
                    <Label forInput="password" value="Password" />

                    <div className="flex flex-row items-center">
                        <input
                            type={passwordType}
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full control-input"
                            autoComplete="off"
                            onChange={onHandleChange}
                            required
                        />

                        <button
                            className="ml-2 p-3 rounded border border-qrmory-purple-800 border-qrmory-purple-400 bg-white hover:bg-qrmory-purple-400 text-qrmory-purple-800 hover:text-white hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                            onClick={togglePassword}
                        >
                            {passwordType === "password" ? (
                                <FaEye />
                            ) : (
                                <FaEyeSlash />
                            )}
                        </button>
                    </div>

                    {/*<InputError message={errors.password} className="mt-2" />*/}
                </div>

                <div className="mt-4 text-sm">
                    <p>For better security, passwords must include:</p>
                    <ul className="mt-2 flex flex-col gap-2">
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
                            {passwordSpecialCharacter ? (
                                <FaCheck color="green" />
                            ) : (
                                <FaTimes color="red" />
                            )}{" "}
                            At least one special character
                            <br />~ ` ! @ # $ % ^ & * ( ) \ - _ + = [ ] ? : ;
                            &lt; , &gt; .
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

                <div className="flex items-center justify-end mt-8">
                    <button
                        className={
                            "ml-4 px-4 py-2 rounded border border-qrmory-purple-800 hover:border-qrmory-purple-400" +
                            " text-qrmory-purple-800 text-sm uppercase font-bold transition-all duration-300 " +
                            (processing
                                ? "cursor-not-allowed"
                                : "hover:bg-qrmory-purple-400 hover:text-white hover:translate-x-1" +
                                  " hover:-translate-y-1")
                        }
                        disabled={processing}
                    >
                        {processing ? (
                            <p className="flex flex-row">
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-qrmory-purple-800"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Please Wait...
                            </p>
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </div>

                {errorGeneral ? (
                    <InputError
                        message={errorGeneral}
                        className="mt-4 text-center"
                    />
                ) : null}
            </form>

            <div className="mt-6 flex items-center justify-center">
                <Link
                    href={route("login")}
                    className="px-1 py-0.5 text-sm text-stone-400 hover:text-white hover:bg-qrmory-purple-400 hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                >
                    Already a member?
                </Link>
            </div>
        </Guest>
    );
};

export default Register;
