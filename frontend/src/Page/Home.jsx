import React from 'react';
import AllProducts from '../Component/AllProducts';
import Header from '../Component/Header';
import Poster from '../Component/Poster';
import Question from '../Component/Question';
import AllUsers from './Admin/AllUsers';
import Signup from './Signup';
import Layout from '../Component/Layout/Layout';
// import Cart from './Cart';
// import Checkout from './Checkout';


const Home = (props) => {
    return (
        <Layout>
            <div className=''>
                <Header></Header>
                <Poster></Poster>
                <AllProducts></AllProducts>
                <Question></Question>
            </div>
        </Layout>
    );
};

export default Home;