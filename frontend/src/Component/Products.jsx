import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/actions/product';
import Loader from './Loader';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Products.scss"
import ProductDetails from './Modal/Product-Details-Modal';

const Products = () => {
  const [detailsModal, setDetailsModal] = useState("")
  const dispatch = useDispatch();
  const { loading, products } = useSelector(state => state.products);

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
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
      <div className='products-container'>
        {
          loading
            ? <Loader></Loader>
            : 
            <div >
              <div className='text-center pb-5 products-header'>
                <h1>Popular Products for Daily Shopping</h1>
                <p>See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.</p>
              </div>
              <Slider {...settings} >
                {
                  products?.map((item) =>
                    <div key={item._id} className='product' >
                      <img className='product-img' src={item?.productPictures} alt="" />

                      {/* hover button */}
                      <div className='hover-btn-container'>
                        <div className='grid grid-cols-1 gap-3'>
                            <button className='hover-btn'>
                              <span className='button-text' >add to cart</span>
                              <AiOutlineShoppingCart className='button-icon' />
                            </button>
                            <button className='hover-btn' onClick={()=> setDetailsModal(item?._id)}>
                              <span className='button-text' >quick view</span>
                              <AiOutlineEye className='button-icon' />
                            </button>
                        </div>
                      </div>

                      {/* product body */}
                      <div>
                        <p className='m-0 text-center text-[14px]'>
                          <Rating
                            initialRating={3.5}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                            readonly
                          ></Rating>
                        </p>
                        <p className='m-0 text-center'>{item.name}</p>
                        <p className='m-0 text-center text-[#10b981] font-extrabold'>$200</p>
                      </div>
                      
                    </div>
                  )}
              </Slider>
              {
                detailsModal && <ProductDetails detailsModal={detailsModal} setDetailsModal={setDetailsModal}/>
              }
            </div>
        }
      </div>
  );
};

export default Products;