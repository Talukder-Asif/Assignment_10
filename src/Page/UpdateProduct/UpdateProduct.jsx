import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const item = useLoaderData()
    const HandelUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const ratting = form.ratting.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;
        const updatedproduct = {name, brand, price, category, ratting, details, photo}
        // send data to Backend 
        fetch(`https://brand-shop-server-359a9t7j6-asif-talukders-projects.vercel.app/product/${item._id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updatedproduct)
        })
        .then(req => req.json())
        .then (data => data?.modifiedCount > 0 ?(
          Swal.fire({
            title: 'Success!',
            text: 'Updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        ):null)
    }
  return (
    <div className="my-10">
      <h2 className="text-center text-4xl font-bold">Update Page</h2>
      <img className="w-36 m-auto mt-5" src={item.photo} alt="" />
      <div className="w-3/4 m-auto mt-20">
      <form onSubmit={HandelUpdateProduct}>
        <div className="relative z-0 w-full mb-6 group">
          {" "}
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                defaultValue={item.name}
                name = "name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <select id="Brand" defaultValue={item.brand} name="brand" className="select select-bordered w-full ">
                <option disabled >
                  Which brand it is?
                </option>
                <option >OnePlus</option>
                <option >Asus</option>
                <option >HP</option>
                <option >Xiaomi</option>
                <option >Realme</option>
                <option >Apple</option>
                <option >JBL</option>
                <option >Samsung</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
            <select name="category" defaultValue={item.category} className="select select-bordered w-full ">
                <option disabled >
                  Which category it is?
                </option>
                <option >Mobile</option>
                <option >Laptop</option>
                <option >Desktop</option>
                <option >Music</option>
                <option >Watch</option>
                <option >Fridge</option>
                <option >TV</option>
                <option >Earphone</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <select name="ratting" defaultValue={item.ratting} className="select select-bordered w-full ">
                <option disabled >
                  Customer ratting?
                </option>
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
            <input
                type="text"
                defaultValue={item.price}
                name = "price"
                className="input input-bordered w-full"
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <input
                type="text"
                defaultValue={item.photo}
                name = "photo"
                className="input input-bordered w-full "
              />
            </div>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
        <textarea name="details" className="textarea textarea-bordered w-full" defaultValue={item.details}></textarea>
        </div>

        <button
          type="submit"
          className="text-white w-full bg-[#f72c00] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default UpdateProduct;
