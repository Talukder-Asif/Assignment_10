/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */

import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {


  const navigate = useNavigate();
  const [error, seterror] = useState(null)
  const {createUser, googleSignup, update} = useContext(AuthContext)
  const handelCreate = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    seterror(null)
    // Check if the password is at least 6 characters long
    if (password.length < 6) {
      seterror(null)
      return seterror("Password must be at least 6 characters long.") ;
    }
  
    // Check if the password contains at least one capital letter
    if (!/[A-Z]/.test(password)) {
      return seterror("Password must contain at least one capital letter.");
    }
  
    // Check if the password contains at least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return seterror("Password must contain at least one special character.");
    }
    return createUser(email, password)
        .then((result) => {
          update(name, photo)
          Swal.fire({
            icon: 'success',
            title: 'Sign up successfully',
            showConfirmButton: false,
            timer: 2000
          })
          navigate('/')
          
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.message,
              confirmButtonColor: '#f72c00',
            })
          })

    }
    const handelGoogle = () =>{
      googleSignup()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        Swal.fire({
          icon: 'success',
          title: 'Sign up successfully',
          showConfirmButton: false,
          timer: 2000
        })
        navigate('/')
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        Swal.fire({
          icon: 'error',
          title: errorMessage,
          showConfirmButton: false,
          timer: 3000
        })
        // ...
      });
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registrar now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelCreate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                 {
                error? <p className="text-red-600 py-2">{error}</p>:""
              }
                <label className="label">
                  <a onClick={handelGoogle} className="label-text-alt link link-hover font-bold ">
                    Create with Google
                  </a>
                  <a href="/signin" className="label-text-alt link link-hover">
                    Have a account?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="text-white w-full bg-[#f72c00] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Signp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
