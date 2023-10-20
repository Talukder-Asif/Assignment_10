/* eslint-disable no-unused-vars */
import { Link, NavLink, useNavigate } from "react-router-dom";
import image_1 from '/src/assets/logo-black.png'
import "./NavBar.css"
import { useContext } from "react";
import { AuthContext } from "../Authantication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const NavBar = () => {


  const navigate = useNavigate();
  const {user , logOut} = useContext(AuthContext);
  const HandelLogOut = () =>{
    logOut()
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Sign up successfully',
        showConfirmButton: false,
        timer: 2000
      })
      navigate('/signin')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  const navItem = (
    <>
      <li className="ml-4 text-xl font-semibold"><NavLink to={'/'}>Home</NavLink></li>
      <li className="ml-4 text-xl font-semibold"><NavLink to={'/addproduct'}>Add Product</NavLink></li>
      <li className="ml-4 text-xl font-semibold"><NavLink to={'/shop'}>Products</NavLink></li>
    </>
  );
  return (
    <div className="bg-[#f5f5f7]">
      <div className="navbar max-w-7xl m-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL? user.photoURL : 'https://i.ibb.co/qWrBVVB/index-1.png'} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {
        user?
        <>
        <li className="text-center text-xl font-bold">{user?.displayName? user.displayName : user.email}</li>
        <li className="ml-4 text-xl font-semibold"><NavLink to={'/cart'}>My Cart</NavLink></li>
        <li onClick={HandelLogOut} className="ml-4 text-xl font-semibold"><Link>Logout</Link></li>
        </>
        :
        <>
        <li className="ml-4 text-xl font-semibold"><NavLink to={'/signin'}>Login</NavLink></li>
        <li className="ml-4 text-xl font-semibold"><NavLink to={'/signup'}>Sign Up</NavLink></li>
        </>
      }
      </ul>
    </div>
  </div>
</div>
    </div>
  );
};

export default NavBar;
