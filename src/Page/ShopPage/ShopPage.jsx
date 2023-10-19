import { useLoaderData } from "react-router-dom";
import Products from "../ROwProduct/Products";

const ShopPage = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className="max-w-7xl mt-14 px-3 m-auto">
    

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
      {
        data.map(product => <Products product={product} key={product._id}></Products>)
      }
      </div>
    </div>
        </div>
    );
};

export default ShopPage;