import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Provider }  from 'react-redux'
import store from './Redux/store';

// stripe
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51MJynOHzN4rqAg27o1nDk5hQeHaX8cuaBkInxAzGMEnEqee4QMyeztVLqyeuAhzgK9ZRdwPAF8uWFrRX2Qj8iuQ9005XC9m0sA");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  
);