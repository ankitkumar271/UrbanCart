import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import cart from "../../assets/cart.jpg";
import { ShopContext } from "../../context/ShopContext";

const NavBar = () => {
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <nav className="bg-white shadow-md py-3 px-6 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <img
                    src={logo}
                    alt="UrbanCart Logo"
                    className="h-12 w-12 rounded-full object-cover border-2 border-blue-500"
                />

                <p className="text-2xl font-bold text-blue-600 tracking-wide ml-2">
                    UrbanCart
                </p>
            </div>

            <ul className="flex gap-8 text-lg font-medium text-gray-700">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `hover:text-blue-600 cursor-pointer transition-colors pb-1 ${
                                isActive
                                    ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                                    : ""
                            }`
                        }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/men"
                        className={({ isActive }) =>
                            `hover:text-blue-600 cursor-pointer transition-colors pb-1 ${
                                isActive
                                    ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                                    : ""
                            }`
                        }
                    >
                        Men
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/women"
                        className={({ isActive }) =>
                            `hover:text-blue-600 cursor-pointer transition-colors pb-1 ${
                                isActive
                                    ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                                    : ""
                            }`
                        }
                    >
                        Women
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/kids"
                        className={({ isActive }) =>
                            `hover:text-blue-600 cursor-pointer transition-colors pb-1 ${
                                isActive
                                    ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                                    : ""
                            }`
                        }
                    >
                        Kids
                    </NavLink>
                </li>
            </ul>

            <div className="flex items-center gap-5">
                <NavLink
                    to="/login"
                    className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition-colors"
                >
                    Login
                </NavLink>

                <div className="relative">
                    <NavLink to="/cart">
                        <img
                            src={cart}
                            alt="Shopping Cart"
                            className="h-8 w-8 object-contain cursor-pointer hover:scale-110 transition-transform"
                        />

                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
                            {getTotalCartItems()}
                        </span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;