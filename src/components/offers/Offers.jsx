import React from "react";
import { Link } from "react-router";
import exclusive_image from "../../assets/exclu.webp";

const Offers = () => {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-pink-50 via-white to-blue-50 py-12 px-4 md:px-20 rounded-3xl shadow-xl my-10 overflow-hidden">

            <div className="left flex-1 flex flex-col gap-4 items-start justify-center mb-8 md:mb-0">

                <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 drop-shadow mb-1">
                    Exclusive
                </h1>

                <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                    Offers For You
                </h1>

                <p className="text-lg text-gray-700 mb-4">
                    ONLY ON BEST SELLERS PRODUCTS
                </p>

                <Link
                    to="/men"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow transition-colors duration-200 text-lg"
                >
                    Check Now
                </Link>

            </div>

            <div className="right flex-1 flex items-center justify-center">

                <img
                    src={exclusive_image}
                    alt="Exclusive Offer"
                    className="w-72 md:w-96 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 object-contain bg-white"
                />

            </div>

        </section>
    );
};

export default Offers;