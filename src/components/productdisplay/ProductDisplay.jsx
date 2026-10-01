import React, { useContext, useState } from "react";
import star from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    const [selectedSize, setSelectedSize] = useState("");

    const sizes = ["S", "M", "L", "XL", "XXL"];

    const handleAddToCart = () => {
        addToCart(product.id);
    };

    return (
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">

            {/* Left: Images */}
            <div className="flex-1 flex flex-col md:flex-row gap-6">

                <div className="flex md:flex-col gap-3 md:gap-4 items-center md:items-start">
                    {[1, 2, 3, 4].map((_, i) => (
                        <img
                            key={i}
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg border border-blue-100 bg-white shadow"
                        />
                    ))}
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-60 h-60 md:w-96 md:h-96 object-contain rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-pink-50"
                    />
                </div>

            </div>

            {/* Right: Details */}
            <div className="flex-1 flex flex-col gap-5">

                <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">
                    {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4].map((_, i) => (
                        <img
                            key={i}
                            src={star}
                            alt="star"
                            className="w-6 h-6"
                        />
                    ))}

                    <img
                        src={star_dull_icon}
                        alt="star"
                        className="w-6 h-6"
                    />

                    <p className="ml-2 text-gray-500 text-base">
                        (130)
                    </p>
                </div>

                {/* Price */}
                <div className="flex gap-4 items-end mb-2">
                    <div className="text-2xl font-bold text-blue-600">
                        ₹{product.new_price}
                    </div>

                    <div className="text-lg text-gray-400 line-through">
                        ₹{product.old_price}
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-2">
                    Discover premium quality and stylish design with this
                    product from UrbanCart. Perfect for casual and everyday
                    fashion.
                </p>

                {/* Size */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold text-blue-700 mb-2">
                        Select Size
                    </h2>

                    <div className="flex gap-3 flex-wrap">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`px-4 py-2 rounded-full font-semibold cursor-pointer transition-colors duration-200 shadow-sm ${
                                    selectedSize === size
                                        ? "bg-blue-600 text-white border border-blue-600"
                                        : "bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-600 hover:text-white"
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Add To Cart */}
                <button
                    onClick={handleAddToCart}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow transition-colors duration-200 text-lg w-full md:w-auto"
                >
                    Add to Cart
                </button>

                {/* Category */}
                <div className="mt-4 text-gray-600 text-sm">
                    <span className="font-semibold text-blue-700">
                        Category :
                    </span>

                    <span className="ml-1 capitalize">
                        {product.category || "Fashion"}
                    </span>
                </div>

                {/* Tags */}
                <div className="text-gray-600 text-sm">
                    <span className="font-semibold text-blue-700">
                        Tags :
                    </span>

                    <span className="ml-1">
                        Fashion, Casual, Summer
                    </span>
                </div>

            </div>
        </div>
    );
};

export default ProductDisplay;