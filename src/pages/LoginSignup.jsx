import React, { useState } from "react";

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            setMessage("Login successful! (Demo)");
        } else {
            setMessage("Account created successfully! (Demo)");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100 py-12 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6">

                <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-2">
                    {isLogin
                        ? "Login to Your Account"
                        : "Create an Account"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >

                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className="px-5 py-3 rounded-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-base shadow"
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="px-5 py-3 rounded-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-base shadow"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                        minLength="6"
                        className="px-5 py-3 rounded-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-base shadow"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow transition-colors duration-200 text-base mt-2"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>

                </form>

                {message && (
                    <p className="text-center text-green-600 font-semibold">
                        {message}
                    </p>
                )}

                <div className="text-center text-gray-600 mt-2">

                    {isLogin ? (
                        <>
                            Don't have an account?{" "}
                            <button
                                className="text-blue-600 hover:underline font-semibold"
                                onClick={() => {
                                    setIsLogin(false);
                                    setMessage("");
                                }}
                                type="button"
                            >
                                Sign Up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button
                                className="text-blue-600 hover:underline font-semibold"
                                onClick={() => {
                                    setIsLogin(true);
                                    setMessage("");
                                }}
                                type="button"
                            >
                                Login
                            </button>
                        </>
                    )}

                </div>

            </div>

        </section>
    );
};

export default LoginSignup;