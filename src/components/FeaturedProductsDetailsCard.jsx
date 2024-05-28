import { Link } from "react-router-dom";


const FeaturedProductsDetailsCard = ({product}) => {
    
    
    
  return (
    <div>
        <Link to={`/product/${product?._id}`}>
      <div className="card w-50 shadow-xl h-72">
        <figure className="px-10 pt-10">
          <img src={product.image} alt="product" className="rounded-md" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product.product_name}</h2>
          <p className="text-center text-orange-400 font-bold">{product.price} TK</p>
        </div>
      </div>
    </Link>
    </div>
  )
};

export default FeaturedProductsDetailsCard;
