import React from "react";
import Item from "../item/Item";
import data_product from "../../assets/data";

const Popular = () => {
    return (
        <section className="w-full py-12 px-4 md:px-20 bg-gradient-to-b from-pink-50 to-blue-50">

            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2 text-center tracking-tight">
                POPULAR IN WOMEN
            </h1>

            <hr className="border-blue-300 w-24 mx-auto mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {data_product.map((item) => (
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

export default Popular;