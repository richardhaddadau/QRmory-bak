import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />

            <div className="relative flex items-top justify-center min-h-screen bg-stone-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">

                    <div className="mt-8 bg-stone-50 overflow-hidden shadow sm:rounded-3xl">
                        <div className="grid grid-cols-1 md:grid-cols-8">

                            <div className="col-span-1">
                                <div className="p-2 hover:text-hot-pink">
                                    <div className="">Website</div>
                                    <div className="">Share a website</div>
                                </div>
                            </div>

                            <div className="p-6 bg-hot-pink col-span-5">
                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel has wonderful, thorough documentation covering every aspect of the
                                        framework. Whether you are new to the framework or have previous experience with
                                        Laravel, we recommend reading all of the documentation from beginning to end.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 col-span-2">
                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel has wonderful, thorough documentation covering every aspect of the
                                        framework. Whether you are new to the framework or have previous experience with
                                        Laravel, we recommend reading all of the documentation from beginning to end.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
