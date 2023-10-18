/* eslint-disable react/prop-types */
const Products = ({product}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={product.photo} alt={product.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{product?.name}</h2>
    <p className="text-[#f72c00] font-semibold">{product?.price} TAKA</p>
    <p>{product?.details.slice(0,100)}</p>
    <div className="card-actions justify-end">
    <a href={`/updateproduct/${product._id}`}><button className="btn btn-warning">Update</button></a>
    </div>
  </div>
</div>
    );
};

export default Products;