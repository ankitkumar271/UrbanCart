import React from "react";
import { Link } from "react-router";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/p8.webp";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-blue-100 via-white to-pink-100 overflow-hidden px-4 md:px-20 py-12">

            {/* Decorative background shapes */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-2xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-200 rounded-full opacity-30 blur-2xl -z-10 animate-pulse" />

            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-7 items-start justify-center z-10">

                <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-blue-600">
                        New Arrival
                    </span>

                    <img
                        src={hand_icon}
                        alt="Hand Icon"
                        className="h-8 w-8 animate-bounce"
                    />
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow mb-3">
                    Elevate Your{" "}
                    <span className="text-pink-500">Style</span>
                    <br />
                    With Our{" "}
                    <span className="text-blue-600">Trendy</span> Collection
                </h1>

                <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-2">
                    Step into the season with the latest fashion for men, women,
                    and kids. Enjoy exclusive offers and free shipping on your
                    first order!
                </p>

                <div className="flex items-center gap-4 mt-4">

                    {/* Shop Now */}
                    <Link
                        to="/men"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold text-lg shadow-lg transition-colors duration-200 flex items-center gap-2 group"
                    >
                        Shop Now

                        <img
                            src={arrow_icon}
                            alt="Arrow Icon"
                            className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-200"
                        />
                    </Link>

                    {/* Learn More */}
                    <button className="bg-white border border-blue-600 text-blue-600 px-7 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-50 transition-colors duration-200">
                        Learn More
                    </button>

                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 z-10">
                <img
                    src={men}
                    alt="Fashion"
                    className="w-72 md:w-[25rem] rounded-2xl object-cover shadow-lg"
                    style={{ background: "#fff" }}
                />
            </div>

        </section>
    );
};

export default Hero;