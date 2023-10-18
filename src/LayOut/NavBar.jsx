import { NavLink } from "react-router-dom";
import image_1 from '/src/assets/logo-black.png'
import "./NavBar.css"

const NavBar = () => {
  const navItem = (
    <>
      <li className="ml-4 text-xl font-semibold"><NavLink to={'/'}>Home</NavLink></li>
      <li className="ml-4 text-xl font-semibold"><NavLink to={'/addproduct'}>Add Product</NavLink></li>
      <li className="ml-4 text-xl font-semibold"><NavLink to={'/cart'}>My Cart</NavLink></li>
      <li className="ml-4 text-xl font-semibold"><NavLink to={'/signin'}>Login</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-[#f5f5f7]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        {navItem}
      </ul>
    </div>
    <a href="/"><img className="w-64" src={image_1} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal px-1">
     {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  );
};

export default NavBar;
