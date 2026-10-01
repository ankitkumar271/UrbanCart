import React, { useState } from "react";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter your email.");
            return;
        }

        setMessage("Thank you for subscribing!");
        setEmail("");
    };

    return (
        <section className="w-full py-12 px-4 md:px-0 flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 via-white to-pink-50 rounded-3xl shadow-lg my-10">

            <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700 mb-2 text-center">
                Get Exclusive Offers on Your Email
            </h1>

            <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
                Subscribe to our newsletter and be the first to know about new
                arrivals, sales, and special offers.
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl justify-center"
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full sm:w-72 px-5 py-3 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-base shadow"
                />

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow transition-colors duration-200 text-base"
                >
                    Subscribe
                </button>
            </form>

            {message && (
                <p className="mt-4 text-blue-600 font-semibold">
                    {message}
                </p>
            )}
        </section>
    );
};

export default NewsLetter;