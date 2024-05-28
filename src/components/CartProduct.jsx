import React, { useState, useEffect } from 'react';
import CartTable from "./cartTable";

const ProductCart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('http://localhost:5000/products-cart');
        const data = await result.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid   gap-x-8 gap-y-8
    p-10 w-[70%] h-[h-screen] mx-auto">
       
      {data?.map((product) => (
       
        <CartTable key={product._id} product={product}></CartTable>
      ))}
    </div>
  );
};

export default ProductCart;
