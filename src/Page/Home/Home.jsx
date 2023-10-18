import {useLoaderData } from "react-router-dom";
import brand_1 from "/src/assets/636353ed9f9141667453933.png"
import brand_2 from "/src/assets/636354923c0881667454098.png"
import brand_3 from "/src/assets/636365ad743361667458477.png"
import brand_4 from "/src/assets/6398129629bbc1670910614.png"
import brand_5 from "/src/assets/639827850f9b11670915973.png"
import brand_6 from "/src/assets/639829185247d1670916376.jpg"
import brand_7 from "/src/assets/63982988279811670916488.png"
import brand_8 from "/src/assets/639829bab54871670916538.png"
import Products from "../ROwProduct/Products";
const Home = () => {
  const product = useLoaderData();
  const topRateds = product.filter(i => i.ratting === "5");
  const topRated = topRateds.slice(0,12);
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

{/*Section 2, Our Brands */}
    <div className="mt-7 max-w-5xl px-3 m-auto">
    <h2 className="text-4xl font-bold text-center">Our Brands</h2>
    <div className="grid grid-cols-4 mt-5 gap-5">
        <a href="/brands/oneplus"><div className="rounded-md text-center"><div className="bg-[#f7fee7]">
          <img className="m-auto py-7" src={brand_1}></img>
        </div>
        <p>OnePlus</p>
        </div></a>
        <a href="/brands/asus"><div className="rounded-md text-center"><div className="bg-[#ecfdf5]">
          <img className="m-auto py-7" src={brand_2}></img>
        </div>
        <p>ASUS</p>
        </div></a>
        <a href="/brands/hp"><div className="rounded-md text-center"><div className="bg-[#eff6ff]">
          <img className="m-auto py-7" src={brand_3}></img>
        </div>
        <p>HP</p>
        </div></a>
        <a href="/brands/xiaomi"><div className="rounded-md text-center"><div className="bg-[#ff660039]">
          <img className="m-auto py-7" src={brand_4}></img>
        </div>
        <p>Xiaomi</p>
        </div></a>
        <a href="/brands/realme"><div className="rounded-md text-center"><div className="bg-[#fef2f2]">
          <img className="m-auto py-7" src={brand_5}></img>
        </div>
        <p>Realme</p>
        </div></a>
        <a href="/brands/apple"><div className="rounded-md text-center"><div className="bg-[#ffffff]">
          <img className="m-auto py-7" src={brand_6}></img>
        </div>
        <p>Apple</p>
        </div></a>
        <a href="/brands/jbl"><div className="rounded-md text-center"><div className="bg-[#ff6600]">
          <img className="m-auto py-7" src={brand_7}></img>
        </div>
        <p>JBL</p>
        </div></a>
        <a href="/brands/samsung"><div className="rounded-md text-center"><div className="bg-[#ffffff]">
          <img className="m-auto py-7" src={brand_8}></img>
        </div>
        <p>Samsung</p>
        </div></a>
    </div>

    </div>


{/* 3rd section..... */}
    <div className="max-w-7xl px-3 m-auto">
    <h2 className="text-4xl font-bold text-center mt-10">Our Top Rated Product</h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
      {
        topRated.map(product => <Products product={product} key={product._id}></Products>)
      }
      </div>
    </div>

    </div>
  );
};

export default Home;