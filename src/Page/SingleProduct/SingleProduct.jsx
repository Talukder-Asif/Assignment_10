import { useLoaderData } from "react-router-dom";
import Ratting from "../ROwProduct/Ratting";
import Swal from "sweetalert2";

const SingleProduct = () => {
    const data = useLoaderData()
    const handelCartBtn = (ProductData) =>{
        const name = ProductData.name;
        const price = ProductData.price;
        const image = ProductData.photo;
        const brand = ProductData.brand;
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
        <div className="max-w-7xl px-4 my-10 m-auto">
            <div className="md:grid pb-5 grid-cols-2 border-b-2 border-black gap-7">
                {/* leftImg */}
                <div className=" border-2 border-black">
                    <img className="h-[250px] m-auto w-[250px] md:h-[400px] md:w-[400px]" src={data.photo} alt="" />
                </div>
                {/* Right details */}
                <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black ">Name : {data.name}</h2>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black ">Price : <span className="text-[#f72c00]">{data.price}</span> Taka only</h2>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black ">Brand : {data.brand}</h2>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-black ">Category : {data.category}</h2>
                    <div className="flex gap-5 items-center">
                    <Ratting Ratting={data.ratting}></Ratting>
                    <button onClick={()=>handelCartBtn(data)} className="btn text-white btn-primary border-[#f72c00] hover:border-[#f72c00] hover:text-[#f72c00] hover:bg-white bg-[#f72c00]">Add Cart</button>

                    </div>
                    <p className="text-lg"><b>Short Discription :</b> {data.details.slice(0,200)}</p>
                </div>
            </div>
            <p className="text-lg">
                <b>Discription :</b>
                {data.details}
            </p>
        </div>
    );
};

export default SingleProduct;