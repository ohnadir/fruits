import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Search.scss'
import { getSearchProduct } from "../../Redux/actions/product";
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Component/Loader';
import { addToCart } from '../../utils/LocalStorage';
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
        addToCart(data)
        messageApi.success('Product added to cart')
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
                    <div className='products-container grid grid-flow-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {
                            products.map(product => 
                                <div key={product._id} className='product' >
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
                }
            </div>
        </>
    );
};

export default SearchResult;