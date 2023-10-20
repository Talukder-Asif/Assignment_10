import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
        <div className="max-w-7xl m-auto text-center items-center content-center grid min-h-screen bg-red-600">
            <h2 className="text-9xl font-bold text-white">{error.status}</h2>
            <h3 className="text-4xl font-bold text-white">{error.statusText}</h3>
            <Link className="text-2xl underline font-bold text-white" to={"/"}>Home</Link>

        </div>            
        </div>
    );
};

export default ErrorPage;