import React from 'react';
import Products from '../Component/Products';
import Header from '../Component/Header';
import Layout from '../Component/Layout/Layout';
import Category from '../Component/Category';
import Services from '../Component/Services';


const Home = (props) => {
    return (
        <Layout>
            <div>
                <Header></Header>
                <Category/>
                <Products></Products>
                <Services/>
            </div>
        </Layout>
    );
};

export default Home;