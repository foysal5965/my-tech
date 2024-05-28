import { useLoaderData } from "react-router-dom";
import FeaturedProductsDetailsCard from "./FeaturedProductsDetailsCard";

const CategoryDetails = () => {
    const products = useLoaderData()
    
  return (
    <div
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8
  p-10 w-[70%] h-[h-screen] mx-auto"
  >
    {products.map((product) => (
      <FeaturedProductsDetailsCard
        key={product._id}
        product={product}
      ></FeaturedProductsDetailsCard>
    ))}
  </div>
  )
};

export default CategoryDetails;
