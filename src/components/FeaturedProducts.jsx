import { Link } from "react-router-dom";


const FeaturedProducts = ({ data }) => {
    
  return (
    <Link to={`/category/${data?.category}`}>
      <div className="card w-50 shadow-xl h-72">
        <figure className="px-10 pt-10">
          <img src={data.image} alt="Shoes" className="rounded-md" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.product_name}</h2>
          <p className="text-center text-orange-400 font-bold">{data.price} TK</p>
          <Link to={`category/${data?._id}`}><button className="btn btn-ghost">View All</button></Link>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProducts;
