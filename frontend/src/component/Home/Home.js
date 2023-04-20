import React, {Fragment, useEffect } from 'react'
import {CgMouse } from "react-icons/cg";
import logo from '../../images/logo.png'
import "./Home.css"
import Product from "./product.js";
import MetaData from "../layout/MetaData";
import {getProduct} from "../actions/productAction";
import {useSelector, useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";



const Home = () => {
  const alert = useAlert();

  const dispatch = useDispatch();
  // we are using useSelector for fetching data from redux which was stored in the backend
  const {loading, error, products, productsCount} = useSelector(
    (state) =>state.products
  );


  useEffect(() => {
    if (error) {
      alert.error(error);
      // dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error,alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />
          <div className="banner">
            <img src= {logo}  />
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home;
