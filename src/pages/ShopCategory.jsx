import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/item/Item";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    const categoryProducts = all_product.filter(
        (item) => props.category === item.category
    );

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 py-10 px-4 md:px-20">

            <img
                src={props.banner}
                alt="Category Banner"
                className="w-full max-h-64 object-cover rounded-2xl shadow mb-8"
            />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <p className="text-lg text-gray-700 font-medium">
                    <span className="text-blue-600 font-bold">
                        Showing {categoryProducts.length} products
                    </span>{" "}
                    in this category
                </p>

                <div className="flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-2 shadow-sm">
                    <span className="text-gray-700 font-medium">
                        Sort by:
                    </span>

                    <img
                        src={dropdown_icon}
                        alt="Sort Dropdown"
                        className="h-5 w-5"
                    />
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

                {categoryProducts.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}

            </div>

        </section>
    );
};

export default ShopCategory;