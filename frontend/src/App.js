import { Route, Routes  } from 'react-router-dom';
import Checkout from './Page/Checkout';
import Home from './Page/Home';
import Search from './Page/Search';
import 'aos/dist/aos.css';
import AOS from 'aos';
import NotFound from './Page/NotFoundPage';
import Profile from './Page/Profile';
import { useEffect, useState } from 'react';
import { loadUser } from './Redux/actions/user';
import { useDispatch } from 'react-redux';
import Invoice from './Page/Invoice';
import ProductList from './Page/ProductList';
import CategoryProduct from './Page/CategoryProduct';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import ProtectedRoute from './Component/ProtectedRoute';


function App() {
  const [modal, setModal] = useState(false)
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
        <Navbar modal={modal} setModal={setModal} />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/search/:keyword" element={<Search/>} />
          <Route path='/checkout' element={
            <ProtectedRoute setModal={setModal}>
              <Checkout/>
            </ProtectedRoute>
          }></Route>
          <Route path='/search' element={<ProductList/>}></Route>
          <Route path='/profile' element={
            <ProtectedRoute setModal={setModal}>
              <Profile/>
            </ProtectedRoute>
          }></Route>
          <Route path='/category/:category' element={<CategoryProduct/>}></Route>
          <Route path='/invoice/:id' element={
            <ProtectedRoute setModal={setModal}>
              <Invoice/>
            </ProtectedRoute>
          }></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
