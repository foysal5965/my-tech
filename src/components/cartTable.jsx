
const CartTable = ({product}) => {
    
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="text-center ">Product Name</th>
        <th>Price</th>
        <th>Action</th>
        
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center justify-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product?.item?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product?.item?.name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {product?.item?.price}
          
        </td>
        
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
    
      
      
      
    
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
  )
};

export default CartTable;
