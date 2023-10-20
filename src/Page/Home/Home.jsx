import {useLoaderData } from "react-router-dom";
import Products from "../ROwProduct/Products";
import { useEffect, useState } from "react";
import BrandsLayout from "./BrandsLayout";
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
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

{/* Banner */}
{/* style={{backgroundImage: 'url(https://i.ibb.co/KrPhRLb/387827788-710400371119326-8201050937880299661-n.png)'}}  */}
<div className="hero min-h-screen bg-[#fafafa] ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/jJBf50q/Apple-i-Phone-14-Pro-i-Phone-14-Pro-Max-space-black-220907-inline-jpg-small-removebg-preview.png" className=" " />
    <div>
      <h1 className="text-5xl font-bold">The best Online <br /> shop in your Country</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn text-white btn-primary border-[#f72c00] hover:border-[#f72c00] hover:text-[#f72c00] hover:bg-white bg-[#f72c00]">Get Started</button>
    </div>
  </div>
</div>

{/*Section 2, Our Brands */}
    <div className="mt-14 max-w-5xl px-3 m-auto">
    <h2 className="text-4xl font-bold text-black text-center">Our Trusted <span className="text-[#f72c00]">Brands</span></h2>
    <p className="text-center">Explore tops accessories  on our platform</p>
    <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-5">
        {
          brands.map((brand, i )=> <BrandsLayout key={i} brand={brand}></BrandsLayout>)
        }
    </div>
    </div>




{/* 3rd section..... */}
    <div className="max-w-7xl mt-14 px-3 m-auto">
    <h2 className="text-4xl font-bold text-center text-black mt-10">Our <span className="text-[#f72c00]">Top Rated </span> Product</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        topRated.map(product => <Products product={product} key={product._id}></Products>)
      }
      </div>
    </div>


{/* 4th sections "Why choice us" */}
<div className="max-w-7xl mt-14 py-10 bg-[#fafafa] px-3 m-auto">
<h2 className="text-4xl font-bold text-center text-black mt-10">Why <span className="text-[#f72c00]">Choose </span> Us</h2>

<div className="md:grid gap-10 mt-5 grid-cols-2">
{/* left side  */}
<div>
<h2 className="text-5xl mb-5  font-bold text-black"><span className="text-[#f72c00]">We have <br /></span>Best deals for you</h2>
<p className="text-base mt-3 mb-5  font-semibold text-justify text-[#232323]">We are committed to providing electronic accessories that meet the highest standards of quality and reliability. Our products are sourced from trusted manufacturers, ensuring you get top-notch accessories that stand the test of time. Discover a vast selection of electronic accessories to enhance your tech experience. From chargers and cables to protective cases and stylish headphones, we have everything you need to complement your devices.</p>


<a href="#"><button className=" rounded-none mt-3 btn text-white font-semibold text-base bg-[#f72c00] border-2 border-[#f72c00] hover:border-[#f72c00] hover:text-[#f72c00] mb-5">Find Deals</button></a>
</div>

{/* Right side  */}
<div>
{/* 1st section of right side */}
<div className="flex gap-5 mb-5 items-center ">
<span className="p-3 rounded-full h-14 bg-[#f72c00]"><AiOutlineDollarCircle className="text-3xl text-[#fafafa]" /></span>
<div>
  <h3 className="text-black font-semibold text-2xl">Affordable Pricing</h3>
  <p> We believe that high-quality electronic accessories should be accessible to everyone. That is why we offer competitive pricing without compromising on quality. Get more value for your money with us.</p>
</div>
</div>
{/* 2nd section of right side */}
<div className="flex gap-5 mb-5 items-center">
<span className="p-3 rounded-full h-14 bg-[#f72c00]"><BiSupport className="text-3xl text-[#fafafa]" /></span>
<div>
  <h3 className="text-black font-semibold text-2xl">Expert Customer Support</h3>
  <p> We believe that high-quality electronic accessories should be accessible to everyone. That is why we offer competitive pricing without compromising on quality. Get more value for your money with us.</p>
</div>
</div>
{/* 3rd section of right side */}
<div className="flex gap-5 items-center">
<span className="p-3 rounded-full h-14 bg-[#f72c00]"><VscWorkspaceTrusted className="text-3xl text-[#fafafa]" /></span>
<div>
  <h3 className="text-black font-semibold text-2xl">Satisfaction Guarantee</h3>
  <p>We stand by the quality of our products. If you are not completely satisfied with your purchase, our hassle-free return and refund policy ensures your peace of mind.</p>
</div>
</div>


</div>


</div>
</div>


    </div>
  );
};

export default Home;