import { Route, Routes, Switch  } from 'react-router-dom';
import Checkout from './Page/Checkout';
import Cart from './Page/Cart';
import Home from './Page/Home';
import Wishlist from './Page/Wishlist';
import SearchResult from './Component/SearchResult';
import Login from './Page/Login';
import Signup from './Page/Signup';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Product_Details from './Page/Product-Details';
import ConfirmPayment from './Page/ConfirmPayment';
import NotFound from './Page/404';
import Profile from './Page/Profile';


function App() {
  AOS.init({ duration : 1000});
  return (
      <div className="bg-[#f8f8f8]">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path="/search/:keyword" element={<SearchResult/>} />
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/product-details' element={<Product_Details/>}></Route>
          <Route path='/confirm-payment' element={<ConfirmPayment/>}></Route>
          <Route path='/wishList' element={<Wishlist/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>
  );
}

export default App;
