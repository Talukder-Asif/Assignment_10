import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const data = useLoaderData();
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
          <button className="py-1 px-4  bg-[#f72c00] text-white text-xl font-semibold">X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
