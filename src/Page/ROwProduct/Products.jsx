import Ratting from "./Ratting";

/* eslint-disable react/prop-types */
const Products = ({product}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
  <div className="relative">
  <figure><img src={product.photo} alt={product.name} /></figure>
  <div className="absolute bottom-0 left-5">{
        <Ratting Ratting={product.ratting}></Ratting>
      }</div>
  </div>
  <div className="card-body">
    <h2 className="card-title">{product?.name}</h2>
    <p>{product?.details.slice(0,100)}</p>
    <div className="flex justify-between ">
    <p className="font-semibold text-center ">Price:<br/> <span className="text-[#f72c00]">{product?.price} TAKA</span></p> 
    <p className="font-semibold text-center ">Brand:<br/> <span className="text-[#f72c00]">{product?.brand}</span></p> 
    <p className="font-semibold text-center">category:<br/> <span className="text-[#f72c00]">{product?.category} </span></p> 
    </div>
      
    <div className="card-actions justify-evenly">
    <a href={`/updateproduct/${product._id}`}><button className="btn btn-warning bg-[#f72c00] font-semibold border-none hover:border-none text-white hover:text-[#f72c00]">Update</button></a>
    <a href={`/shop/${product._id}`}><button className="btn btn-warning bg-[#f72c00] font-semibold border-none hover:border-none text-white hover:text-[#f72c00]">Details</button></a>
    <a href={`/updateproduct/${product._id}`}><button className="btn btn-warning bg-[#f72c00] font-semibold border-none hover:border-none text-white hover:text-[#f72c00]">Add Cart</button></a>
    </div>
  </div>
</div>
    );
};

export default Products;