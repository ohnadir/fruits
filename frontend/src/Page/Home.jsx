import React from 'react';
import AllProducts from '../Component/AllProducts';
import Header from '../Component/Header';
import Poster from '../Component/Poster';
import Question from '../Component/Question';
import AllUsers from './Admin/AllUsers';
import Signup from './Signup';
import Layout from '../Component/Layout/Layout';
import Category from '../Component/Category';
import { Deal } from '../Component/Deal';
import { ProductWidgets } from '../Component/ProductWidgets';
import NewestProduct from '../Component/NewestProduct';
// import Cart from './Cart';
// import Checkout from './Checkout';


const Home = (props) => {
    return (
        <Layout>
            <div className='bg-[#f8f8f8]'>
                <Header></Header>
                <Poster></Poster>
                <AllProducts></AllProducts>
                <Category/>
                <NewestProduct/>
                <Deal/>
                <ProductWidgets/>
                <Question></Question>
            </div>
        </Layout>
    );
};

export default Home;