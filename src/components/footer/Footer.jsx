import React from "react";
import logo from "../../assets/logo.jpg";

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-10 px-4 md:px-20 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <img
                        src={logo}
                        alt="UrbanCart Logo"
                        className="h-12 w-12 rounded-full object-cover border-2 border-blue-400"
                    />

                    <span className="text-2xl font-bold text-white tracking-wide ml-2">
                        UrbanCart
                    </span>
                </div>

                <ul className="flex gap-8 text-lg font-medium text-blue-100">
                    <li className="hover:text-blue-300 cursor-pointer transition-colors">
                        Home
                    </li>

                    <li className="hover:text-blue-300 cursor-pointer transition-colors">
                        Shop
                    </li>

                    <li className="hover:text-blue-300 cursor-pointer transition-colors">
                        About
                    </li>

                    <li className="hover:text-blue-300 cursor-pointer transition-colors">
                        Contact
                    </li>
                </ul>

                <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                        href="#"
                        className="hover:text-blue-300 transition-colors"
                        aria-label="Instagram"
                    >
                        <svg
                            className="w-7 h-7"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </a>

                    <a
                        href="#"
                        className="hover:text-blue-300 transition-colors"
                        aria-label="Twitter"
                    >
                        <svg
                            className="w-7 h-7"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.5 11.03c0 .34.04.67.1.99A12.13 12.13 0 0 1 3.1 5.1a4.28 4.28 0 0 0 1.32 5.7c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z" />
                        </svg>
                    </a>

                    <a
                        href="#"
                        className="hover:text-blue-300 transition-colors"
                        aria-label="Facebook"
                    >
                        <svg
                            className="w-7 h-7"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                        </svg>
                    </a>
                </div>
            </div>

            <hr className="my-6 border-blue-200 opacity-30" />

            <div className="text-center text-sm text-blue-200">
                &copy; {new Date().getFullYear()} UrbanCart. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;