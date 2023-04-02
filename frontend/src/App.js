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


function App() {
  AOS.init({ duration : 1000});
  return (
      <div className="">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path="/search/:keyword" element={<SearchResult></SearchResult>} />
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/product-details' element={<Product_Details/>}></Route>
          <Route path='/confirm-payment' element={<ConfirmPayment/>}></Route>
          <Route path='/wishList' element={<Wishlist></Wishlist>}></Route>
        </Routes>
      </div>
  );
}

export default App;
