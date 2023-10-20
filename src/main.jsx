import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './LayOut/MainLayout';
import Home from './Page/Home/Home';
import AddProduct from './Page/AddProduct/AddProduct';
import Login from './Authantication/UserSignIn/Login';
import CreateAccount from './Authantication/UserSingUp/CreateAccount';
import AuthProvider from './Authantication/AuthProvider/AuthProvider';
import UpdateProduct from './Page/UpdateProduct/UpdateProduct';
import BrandProduct from './Page/BrandProduct/BrandProduct';
import ShopPage from './Page/ShopPage/ShopPage';
import SingleProduct from './Page/SingleProduct/SingleProduct';
import Cart from './Page/Cart/Cart';
import ErrorPage from './Page/404/ErrorPage';
import PrivateRoute from './Routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        loader:()=>fetch('http://localhost:5000/product'),
        element: <Home></Home>
      },
      {
        path:'/shop',
        loader:()=>fetch('http://localhost:5000/product'),
        element: <ShopPage></ShopPage>
      },
      {
        path:'/shop/:id',
        loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`),
        element: <PrivateRoute>
          <SingleProduct></SingleProduct>
        </PrivateRoute>
      },
      {
        path:'/addproduct',
        element:<PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path:"/signin",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<CreateAccount></CreateAccount>
      },
      {
        path:"/brands/:brand",
        loader: ({params}) => fetch(`http://localhost:5000/brands/${params.brand}`),
        element:<BrandProduct></BrandProduct>
      },
      {
        path:'/updateproduct/:id',
        loader:({params}) => fetch(`http://localhost:5000/product/${params.id}`),
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
      },
      {
        path:"/cart",
        loader:() => fetch(`http://localhost:5000/cart`),
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
