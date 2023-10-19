/* eslint-disable react/prop-types */
const Products = ({product}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={product.photo} alt={product.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{product?.name}</h2>
    <p>{product?.details.slice(0,100)}</p>
    <div className="flex justify-between ">
    <p className="font-semibold text-center ">Price:<br/> <span className="text-[#f72c00]">{product?.price} TAKA</span></p> 
    <p className="font-semibold text-center ">Brand:<br/> <span className="text-[#f72c00]">{product?.brand}</span></p> 
    <p className="font-semibold text-center">category:<br/> <span className="text-[#f72c00]">{product?.category} </span></p> 
    </div>

    <div className="card-actions justify-end">
    <a href={`/updateproduct/${product._id}`}><button className="btn btn-warning">Update</button></a>
    </div>
  </div>
</div>
    );
};

export default Products;