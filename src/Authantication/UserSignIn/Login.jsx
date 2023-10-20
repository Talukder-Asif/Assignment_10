const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link font-bold  link-hover">
                  Log in with Google
                </a>
                <a href="/signup" className="label-text-alt link link-hover">
                  Create a new account
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="text-white w-full bg-[#f72c00] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
