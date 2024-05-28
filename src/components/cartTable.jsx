
const CartTable = ({product}) => {
  const handleDelete = () => {
    if (!product?._id) {
        console.error("Product ID is not available");
        return;
    }

    fetch(`http://localhost:5000/product/${product._id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => 
        res.json()
    )
    .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
            // Uncomment this line if you have a toast library integrated
            // toast.success('Delete from cart successfully');
            console.log('Delete from cart successfully');
        } else {
            console.error('Delete not acknowledged');
        }
    })
};

  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={product?.item?.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{product?.item?.name}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="grid justify-end items-center">
    <p className="my-8">TK{product.item.price}</p>
      <button onClick={handleDelete} className="btn btn-primary">Delete</button>
      
    </div>
  </div>
</div>
  )
};

export default CartTable;
