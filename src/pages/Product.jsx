import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router";
import Bredcrums from "../components/bredcrums/Bredcrums";
import ProductDisplay from "../components/productdisplay/ProductDisplay";

const Product = () => {
    const { all_product } = useContext(ShopContext);

    const { productId } = useParams();

    const product = all_product.find(
        (item) => item.id === Number(productId)
    );

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-700">
                    Product not found
                </h2>
            </div>
        );
    }

    return (
        <div>
            <Bredcrums product={product} />
            <ProductDisplay product={product} />
        </div>
    );
};

export default Product;