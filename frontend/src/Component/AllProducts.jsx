import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import '../App.css'
import Metadata from '../Component/Layout/MetaData';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, clearErrors } from '../Redux/actions/product';
import Loader from './Loader';
import { message, Alert } from 'antd';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(state => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const ArrowLeft = (props) => (
    <button
        {...props}
        className="prev">
        <BiChevronLeft/>
    </button>
  );
  const ArrowRight = (props) => (
    <button
      {...props}
      className="next">
        <BiChevronRight/>
    </button>
  );
  const settings = {
    dots: false,
    arrows:true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='max-w-7xl mx-auto px-10 my-16'>
      <Metadata title={'Home'} />
      {
        loading
          ? <Loader></Loader>
          : 
          <div className=''>
            <Slider {...settings} >
              {
                products?.map((product) => <div className='overflow-hidden'>
                  <div className='pCard p-3 bg-white'>
                    <img className='w-[70%] mx-auto' src={product.productPictures[0]} alt="" />
                    <h1>{product?.reviews[1]}</h1>
                    <h1>{product?.name}</h1>
                    <h1>{product?.price}</h1>
                  </div>
                </div>)    
              }
            </Slider>
          </div>
      }
    </div>
  );
};

export default AllProducts;