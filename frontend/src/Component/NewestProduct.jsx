import React, { useEffect, useState } from 'react'
import "../Style/NewestProduct.css"
import photo from "../assets/hr2.png";
import { FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GrFormView } from 'react-icons/gr';
import { MdClose } from 'react-icons/md';
import { Modal } from 'antd';
import ProductDetails from './Modal/ProductDetails';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, clearErrors } from '../Redux/actions/product';
import Spinner from "./Loader"
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider from 'react-slick';


const NewestProduct = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
  const { loading, reverseProduct, products } = useSelector(state => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const ArrowLeft = (props) => (
    <button
        {...props}
        className="newPrev">
        <BiChevronLeft/>
    </button>
  );
  const ArrowRight = (props) => (
    <button
      {...props}
      className="newNext">
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
            {
                loading ? <Spinner></Spinner> : 
                <div className=''>
                    <Slider {...settings} >
                        {
                            products?.map((item)=>
                                <div key={item._id} className=' overflow-hidden relative cardItem' >
                                    <img className=' mx-auto photo' src={photo} alt="" />
                                    <div>
                                        <FaRegHeart  className="absolute top-2 right-2 text-[28px] border rounded-full p-[4px]" />
                                        <p className='absolute top-0 px-[10px] bg-[#679509] w-fit text-white'>New</p>
                                    </div>
                                    <div className='hoverBtn '>
                                        <div className='grid grid-cols-1 gap-3'>
                                            <button className='cartBtn'>
                                                <span className='text-1' >add to cart</span>
                                                <span className='' ><AiOutlineShoppingCart className='text-2' /></span>

                                            </button>
                                            <button className='cartBtn' onClick={()=>setOpen(true)}>
                                                <span className='text-1' >quick view</span>
                                                <span className='' ><GrFormView style={{color: "white"}} className='text-2 text-3' /></span>
                                            </button>
                                        </div>
                                    </div>
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
                                        <p className='m-0 text-center text-[#679509] font-extrabold'>$200</p>
                                    </div>
                                </div>
                            )
                        }
                        
                    </Slider>
                </div>
            }
            {
                        open && 
                            <Modal
                                width={1000}
                                open={open}
                                onCancel={()=>setOpen(false)}
                                bodyStyle={{padding:"0", margin:"0", border:"none" }}
                                footer={null}  >
                                    <ProductDetails/>
                            </Modal>
                    }
        </div>
            
    )
}

export default NewestProduct