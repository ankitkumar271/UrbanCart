import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/remove.webp";

const CartItem = () => {
    const {
        all_product,
        cart,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    } = useContext(ShopContext);

    const [promoMessage, setPromoMessage] = useState("");

    const totalAmount = getTotalCartAmount();

    const handlePromo = () => {
        setPromoMessage("Promo code feature will be available soon.");
    };

    const handleCheckout = () => {
        if (totalAmount === 0) {
            alert("Your cart is empty.");
            return;
        }

        alert("Checkout feature will be available soon.");
    };

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 py-10 px-4 md:px-20">

            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-10">

                {/* Cart Items */}
                <div className="flex-1">

                    <div className="grid grid-cols-6 gap-4 text-blue-700 font-bold text-lg mb-4">
                        <p>Product</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>

                    <hr className="mb-4" />

                    {all_product.map((item) => {

                        if (cart[item.id] > 0) {
                            return (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-6 gap-4 items-center bg-blue-50 rounded-xl p-4 mb-4 shadow-sm"
                                >
                                    {/* Product Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-contain rounded-lg border border-blue-100 bg-white"
                                    />

                                    {/* Product Name */}
                                    <p className="font-semibold text-gray-800">
                                        {item.name}
                                    </p>

                                    {/* Price */}
                                    <p className="text-blue-600 font-bold">
                                        ₹{item.new_price}
                                    </p>

                                    {/* Quantity */}
                                    <div className="flex items-center gap-2">

                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-bold text-lg hover:bg-gray-300 transition-colors"
                                        >
                                            -
                                        </button>

                                        <span className="text-gray-700 font-semibold">
                                            {cart[item.id]}
                                        </span>

                                        <button
                                            onClick={() =>
                                                addToCart(item.id)
                                            }
                                            className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
                                        >
                                            +
                                        </button>

                                    </div>

                                    {/* Total */}
                                    <p className="text-blue-700 font-bold">
                                        ₹{item.new_price * cart[item.id]}
                                    </p>

                                    {/* Remove */}
                                    <img
                                        onClick={() => {
                                            for (
                                                let i = 0;
                                                i < cart[item.id];
                                                i++
                                            ) {
                                                removeFromCart(item.id);
                                            }
                                        }}
                                        src={remove_icon}
                                        alt="Remove"
                                        className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
                                    />
                                </div>
                            );
                        }

                        return null;
                    })}

                    {/* Empty Cart */}
                    {totalAmount === 0 && (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-bold text-gray-700">
                                Your cart is empty
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Add some products to your cart to see them here.
                            </p>
                        </div>
                    )}

                </div>

                {/* Cart Totals & Promo */}
                <div className="w-full md:w-96 flex flex-col gap-8">

                    {/* Cart Totals */}
                    <div className="bg-blue-50 rounded-xl p-6 shadow flex flex-col gap-4">

                        <h1 className="text-2xl font-bold text-blue-700 mb-2">
                            Cart Totals
                        </h1>

                        <div className="flex flex-col gap-2">

                            <div className="flex justify-between text-gray-700 font-medium">
                                <p>Subtotal</p>
                                <p>₹{totalAmount}</p>
                            </div>

                            <hr />

                            <div className="flex justify-between text-gray-700 font-medium">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>

                            <hr />

                            <div className="flex justify-between text-blue-700 font-bold text-lg">
                                <p>Total</p>
                                <p>₹{totalAmount}</p>
                            </div>

                        </div>

                        <button
                            onClick={handleCheckout}
                            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow transition-colors duration-200 text-base"
                        >
                            PROCEED TO CHECKOUT
                        </button>

                    </div>

                    {/* Promo Code */}
                    <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-4 border border-blue-100">

                        <p className="text-gray-700 font-medium mb-2">
                            If you have a promo code, enter it here:
                        </p>

                        <div className="flex gap-2">

                            <input
                                type="text"
                                placeholder="Enter Promo Code"
                                className="flex-1 px-4 py-2 rounded-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 text-base shadow"
                            />

                            <button
                                onClick={handlePromo}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow transition-colors duration-200 text-sm"
                            >
                                Apply
                            </button>

                        </div>

                        {promoMessage && (
                            <p className="text-sm text-blue-600 font-medium">
                                {promoMessage}
                            </p>
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CartItem;