import { useState, useEffect } from "react";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  const [featuredProductsData, setFeaturedProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/featured-products", {
          cache: "force-cache",
          next: {
            revalidate: 5,
          },
        });
        const data = await response.json();
        setFeaturedProductsData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mt-8">
        <h1 className="text-center font-extrabold">Featured Category</h1>
        <p className="text-center font-semibold">
          Get Your Desired Product from Featured Category!
        </p>
      </div>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8
     p-10 w-[70%] mx-auto"
      >
        {featuredProductsData.map((data) => (
          
         
          <FeaturedProducts key={data._id} data={data}></FeaturedProducts>
        ))}
      </div>
    </>
  );
};

export default Home;
