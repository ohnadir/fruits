import React from 'react';
import Products from '../Component/Products';
import Header from '../Component/Header';
import Category from '../Component/Category';
import Services from '../Component/Services';
import Helmet from "../Component/Layout/Helmet"


const Home = () => {
    return (
        <div>
            <Helmet title={"Your Desire Product"} />
            <Header></Header>
            <Category/>
            <Products></Products>
            <Services/>
        </div>
    );
};

export default Home;