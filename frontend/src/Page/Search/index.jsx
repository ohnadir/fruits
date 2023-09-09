import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Search.scss'
import { getSearchProduct } from "../../Redux/actions/product";
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Component/Loader';
import { addItemToCart } from "../../Redux/actions/carts"
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ProductDetails from '../ProductDetails';
import { message } from 'antd';

const SearchResult = () => {
    const [ detailsModal, setDetailsModal ] = useState('')
    const { loading, products } = useSelector(state => state.searchProduct);
    const { keyword } = useParams()
    const [messageApi, contextHolder ] = message.useMessage();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSearchProduct(keyword))
    }, [keyword, dispatch]);
    const handleCart=(product)=>{
        const data = {
            name: product?.name,
            id:product?._id,
            price: product?.price,
            quantity : 1,
            image : product?.productPictures,
            total: Number(product?.price) * 1
        }
        if(data){
            addItemToCart(data)
            messageApi.success('Product added to cart')
        }
    }
    return (
        <>  
            {contextHolder}
            <div className='search-product-container'>
                {
                    loading
                    ?
                    <Loader/>
                    :
                    <>
                    {
                        !products
                        ?
                        <div className='empty-container'>
                            <div>
                                <div className='empty-cart'>
                                    <span>
                                        <svg stroke="#059669" fill="#059669" strokeWidth="0" viewBox="0 0 512 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <h1 className='mt-2 text-center'>No product found by Search</h1>
                                </div>
                            </div>
                        </div>
                        :
                        <div >
                            <h1 className='text-center p-0 text-lg'>Search Product for <span className='capitalize text-[#10b981]'>{keyword}</span></h1>                            <div className='products-container'> 
                                {   
                                    products?.map(product => 
                                        <div key={product._id} className='products' >
                                            <img className='product-img' src={product?.productPictures} alt="" />

                                            {/* hover button */}
                                            <div className='hover-btn-container'>
                                                <div className='grid grid-cols-1 gap-3'>
                                                    <button className='hover-btn' onClick={()=>handleCart(product)}>
                                                    <span className='button-text' >add to cart</span>
                                                    <AiOutlineShoppingCart className='button-icon' />
                                                    </button>
                                                    <button className='hover-btn' onClick={()=> setDetailsModal(product?._id)}>
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
                                                <p className='m-0 text-center'>{product.name}</p>
                                                <p className='m-0 text-center text-[#10b981] font-extrabold'>$200</p>
                                            </div>
                                        </div>
                                )}
                                {
                                    detailsModal && <ProductDetails detailsModal={detailsModal} setDetailsModal={setDetailsModal}/>
                                }
                            </div>
                        </div>
                    }
                    
                    </>
                }
            </div>
        </>
    );
};

export default SearchResult;