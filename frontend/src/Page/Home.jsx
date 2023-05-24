import React from 'react';
import AllProducts from '../Component/AllProducts';
import Header from '../Component/Header';
import Question from '../Component/Question';
import Layout from '../Component/Layout/Layout';
import Category from '../Component/Category';
import { Deal } from '../Component/Deal';
import { ProductWidgets } from '../Component/ProductWidgets';
import NewestProduct from '../Component/NewestProduct';
import Services from '../Component/Services';
import Newsletter from '../Component/Newsletter';
// import Cart from './Cart';
// import Checkout from './Checkout';


const Home = (props) => {
    return (
        <Layout>
            <div className='bg-[#f8f8f8]'>
                <Header></Header>
                <Services/>
                <Category/>
                <AllProducts></AllProducts>
                <NewestProduct/>
                <Deal/>
                <ProductWidgets/>
                <Question></Question>
                <Newsletter/>
            </div>
        </Layout>
    );
};

export default Home;