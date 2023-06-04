import { Route, Routes  } from 'react-router-dom';
import Checkout from './Page/Checkout';
import Cart from './Page/Cart';
import Home from './Page/Home';
import Wishlist from './Page/Wishlist';
import SearchResult from './Component/SearchResult';
import 'aos/dist/aos.css';
import AOS from 'aos';
// import Product_Details from './Page/Product-Details';
import ConfirmPayment from './Page/ConfirmPayment';
import NotFound from './Page/404';
import Profile from './Page/Profile';
import { useEffect } from 'react';
import { loadUser } from './Redux/actions/user';
import { useDispatch } from 'react-redux';
import Invoice from './Page/Invoice';
import Navbar from './Component/Navbar';


function App() {
  const dispatch = useDispatch()

  // animation
  AOS.init({ duration : 1000});

  setTimeout(() => {
    localStorage.removeItem("token");
  }, 7 * 24  *60  *60 * 1000);

  const token = localStorage.getItem("token");
  useEffect(()=>{
    if(token){
      dispatch(loadUser(JSON.parse(token)));
    }
  },[ dispatch, token])

  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/search/:keyword" element={<SearchResult/>} />
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          {/* <Route path='/product-details' element={<Product_Details/>}></Route> */}
          <Route path='/confirm-payment' element={<ConfirmPayment/>}></Route>
          <Route path='/wishList' element={<Wishlist/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/invoice/:id' element={<Invoice/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
