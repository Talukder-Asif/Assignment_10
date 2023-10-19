import { useLoaderData, useParams } from "react-router-dom";
import Products from "../ROwProduct/Products";
const BrandProduct = () => {
    const params = useParams().brand;
    console.log(params)
    const data = useLoaderData()
    return (
        <div>
    {/* Slider */}
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src='https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Samsung_55_4K_App_Banner_1__1.jpg' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src='https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Samsung_Refrigerator_App_Banner_1__1.jpg' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src='https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/gadget_app_banner_1_.jpg' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src='https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Amazfit_Pop_3s_and_3r_App_Banner_Banner_1_1_.jpg' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src='https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Smart_Offer_copy_app_banner.jpg' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    {/* Brand Product */}
    <div className="max-w-7xl px-3 m-auto">
    <h2 className="text-4xl font-bold text-center mt-10">{params} brand Products</h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
      {
        data.map(product => <Products product={product} key={product._id}></Products>)
      }
      </div>
    </div>

        {data.length}
        </div>
    );
};
// Test
export default BrandProduct;