import { useContext } from "react";
import Ratting from "./Ratting";
import { AuthContext } from "../../Authantication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
/* eslint-disable react/prop-types */
const Products = ({product, mode}) => {
  const {user} = useContext(AuthContext)
  const handelCartBtn = (data) =>{
    const name = data.name;
    const price = data.price;
    const image = data.photo;
    const brand = data.brand;
    const addCart = {name, price, image, brand}
    fetch("http://localhost:5000/cart",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCart),
    })
    .then((req) => req.json())
      .then((data) =>
        data?.insertedId
          ? (Swal.fire({
              title: "Success!",
              text: "Product is added to cart successfully",
              icon: "success",
              confirmButtonText: "Yeah",
            })
          )
          : null
      );
  }



    return (
        <div className={!mode? "card bg-base-100 shadow-xl" : "card bg-[#646464] shadow-xl text-white"}>
  <div className="relative">
  <figure><img src={product.photo} alt={product.name} /></figure>
  <div className="absolute bottom-2 bg-black bg-opacity-50 rounded-full left-2">{
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
      
    {
      user?<div className="card-actions justify-evenly">
    <a href={`/updateproduct/${product._id}`}><button className="btn btn-warning bg-[#f72c00] font-semibold border-none hover:border-none text-white hover:text-[#f72c00]">Update</button></a>
    <a href={`/shop/${product._id}`}><button className="btn btn-warning bg-[#f72c00] font-semibold border-none hover:border-none text-white hover:text-[#f72c00]">Details</button></a>
    <button onClick={() => handelCartBtn(product)} className="btn btn-warning bg-[#f72c00] font-semibold border-none hover:border-none text-white hover:text-[#f72c00]">Add Cart</button>
    </div>:null
    }
  </div>
</div>
    );
};

export default Products;