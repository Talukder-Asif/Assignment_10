import {useLoaderData } from "react-router-dom";
import Products from "../ROwProduct/Products";
import { useEffect, useState } from "react";
import BrandsLayout from "./BrandsLayout";
const Home = () => {
  const [brands, setbrands] = useState([]);
  const product = useLoaderData();
  const topRateds = product.filter(i => i.ratting === "5");
  const topRated = topRateds.slice(0,6);
  useEffect(() => {
     fetch('Brands.json')
    .then(res => res.json())
    .then (data => setbrands(data))
  },[])
  console.log(brands)
  return (
    <div>

{/* Banner
    <div className=" grid grid-cols-2 bg-gradient-to-br from-slate-300 min-h-screen to-[#f72d0061]">
    <div></div>
    <div><img src="https://i.ibb.co/Fm0Zzvw/png-transparent-headphones-mobile-phone-accessories-battery-charger-headset-iphone-headphones-electr.png" alt="" /></div>


    </div> */}



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
    <div className="mt-14 max-w-5xl px-3 m-auto">
    <h2 className="text-4xl font-bold text-black text-center">Our Trusted <span className="text-[#f72c00]">Brands</span></h2>
    <p className="text-center">Explore tops accessories  on our platform</p>
    <div className="grid grid-cols-4 mt-5 gap-5">
        {
          brands.map((brand, i )=> <BrandsLayout key={i} brand={brand}></BrandsLayout>)
        }
    </div>
    </div>




{/* 3rd section..... */}
    <div className="max-w-7xl mt-14 px-3 m-auto">
    <h2 className="text-4xl font-bold text-center text-black mt-10">Our <span className="text-[#f72c00]">Top Rated </span> Product</h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
      {
        topRated.map(product => <Products product={product} key={product._id}></Products>)
      }
      </div>
    </div>


{/* 4th sections "Wht choice us" */}


<div className="max-w-7xl mt-14 px-3 m-auto">
<h2 className="text-4xl font-bold text-center text-black mt-10">Why <span className="text-[#f72c00]">Choose </span> Us</h2>

<div className="grid gap-5 grid-cols-2">
{/* left side  */}
<div>
<h2 className="text-5xl font-bold text-black mt-5"><span className="text-[#f72c00]">We have <br /></span>Best deals for you</h2>
<p className="text-base mt-3 font-semibold text-justify text-[#232323]">We are committed to providing electronic accessories that meet the highest standards of quality and reliability. Our products are sourced from trusted manufacturers, ensuring you get top-notch accessories that stand the test of time. Discover a vast selection of electronic accessories to enhance your tech experience. From chargers and cables to protective cases and stylish headphones, we have everything you need to complement your devices.</p>


<a href="#"><button className=" rounded-none mt-3 btn text-white font-semibold text-base bg-[#f72c00] border-2 border-[#f72c00] hover:border-[#f72c00] hover:text-[#f72c00] ">Find Deals</button></a>
</div>


{/* Right side  */}
<div></div>


</div>
</div>


    </div>
  );
};

export default Home;