import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData()
    const item = {
        name: product.product_name,
        price: product.price,
        image: product.image
    }
    const handleAdd = () => {
        fetch("http://localhost:5000/add-to-cart", {
            method: "POST",
            headers: {
                "content-type": "application/json",

            },
            body: JSON.stringify({ item }),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data?.acknowledged) {
                    toast.success('Product added to the cart successfully!')
                }
            });

    };
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={product.image} className="object-cover h-[72vh] w-96" />
                <div className="h-[50vh]">
                    <h1 className="text-xl font-semibold text-blue-400">{product.product_name}</h1>
                    <div className="flex mt-2">
                        <p className="bg-gray-200 w-28 text-center rounded-md"><span className="text-gray-500">Price:</span><span className="font-bold">{product.price}TK</span></p>
                        <p className="bg-gray-200 w-28 mx-1 text-center rounded-md"><span className="text-gray-500">Status:</span><span className="font-bold">{product.status}</span></p>
                    </div>
                    <p className="font-semibold text-[18px] mt-4">Key Features</p>

                    {
                        // eslint-disable-next-line react/jsx-key
                        product.details?.map((detail) => <p className="font-semibold mt-4">- {detail}</p>)
                    }
                    <button onClick={handleAdd} className="btn bg-orange-400 mt-6 text-bold">Add To Cart</button>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails;
