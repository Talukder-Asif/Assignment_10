import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const loadededdata = useLoaderData();
  const [data , setdata] = useState(loadededdata)
// Delete from server
const HandelDelete = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            console.log(id)
            fetch(`http://localhost:5000/cart/${id}`, {
                method: 'DELETE',
            })
            .then((res) => res.json())
            .then (dataa => {console.log(dataa);
                if (dataa.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      ) 
                    const reamining = data.filter(d => d._id != id);
                    setdata(reamining);
                    }
            } ) }
      }) }




  return (
    <div className="px-5 py-7">
      {data.map((cardItem) => (
        <div
          key={cardItem._id}
          className="border-2 px-5 py-2 mb-3 border-[#656160] flex justify-between items-center flex-wrap"
        >
          <img
            className="w-28"
            src={cardItem.image}
            alt=""
          />
          <div>
            <h4>Product Name : {cardItem.name}</h4>
            <p>Brand : {cardItem.brand}</p>
          </div>
          <h2>Price : {cardItem.price}</h2>
          <button onClick={()=>HandelDelete(cardItem._id)} className="py-1 px-4  bg-[#f72c00] text-white text-xl font-semibold">X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
