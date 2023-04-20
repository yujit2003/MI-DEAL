import Header from './component/layout/Header/Header.js'
import Footer from './component/layout/Footer/Footer'
import Home from './component/Home/Home.js'
import WebFont from 'webfontloader'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Loader from './component/layout/Loader/Loader';
import ProductDetail from './component/Product/ProductDetails.js';
import Products from './component/Product/Products';
import Search  from './component/Product/Search.js'
import LoginSignUp from './component/User/LoginSignUp.js'
import  store  from './component/store'
import { loadUser } from './component/actions/userAction.js'
import { useSelector } from 'react-redux'
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useEffect } from 'react'
import Profile from './component/User/Profile.js' 
import Dashboard from "./component/Admin/Dashboard.js";
import Cart from './component/Cart/Cart.js'
// npm i react-js-pagination@3.0.3


function App() {

  const {isAuthenticated, user} = useSelector((state) => state.user);

  useEffect(() => {
    // npm i webfontloader
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    // getStripeApiKey();
  }, []);

  return (
      <Router>
      <Header />
      {isAuthenticated && <UserOptions user= {user} />}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path="/products" element={ <Products />} />
        <Route path="/products/:keyword" element={ <Products />} />
        <Route path="/search" element={ <Search />} />
        <Route path="/login" element={ <LoginSignUp />} />
          <Route path="/account" element={ <Profile />} />
        <Route path="/cart" element={ <Cart/>} />
        <Route path="/cart" element={ <Cart/>} />
        <Route path="/admin/dashboard" element={ <Dashboard/>} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
