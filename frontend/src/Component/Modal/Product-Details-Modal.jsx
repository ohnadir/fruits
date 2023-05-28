import React, { useEffect, useState } from 'react';
import Metadata from '../Layout/MetaData';
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails, clearErrors } from '../../Redux/actions/product';
import { message, Alert, Modal } from 'antd';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../../utils/LocalStorage';
import "../../Style/Product-Details.scss"


const ProductDetails = ({ detailsModal, setDetailsModal }) => {
    const [count, setCount] = useState(1);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.productDetails);
    useEffect(() => {
        dispatch(getProductDetails(detailsModal));
    }, [ dispatch, detailsModal ]);
    
    const handleCart=()=>{
        const data = {
            name: product?.name,
            id:product?._id,
            price: product?.price,
            quantity : count,
            image : product?.productPictures
        }
        addToCart(data)
    }
    return (
        <Modal
            centered
            open={detailsModal}
            closable={false}
            width={800}
            footer={false}
            bodyStyle={{margin:"0", border:"none", padding: 0}}
        >
            <div className='product-details-modal'>
                <div className='modal-close-icon' onClick={()=>setDetailsModal(false)}>
                    <svg stroke="none" fill="#ef4444" strokeWidth="0" viewBox="0 0 512 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                    </svg>
                </div>
                {/* <Metadata title={'Product Details'} /> */}
                <div className='product' >
                    <div className='img-container'>
                        <img className='w-[100%]' src={product?.productPictures} alt="" />
                    </div>
                    <div className='w-full product-details'>
                        <h2 className='product-name'>{product?.name}</h2>
                        <h3 className='product-stock'>Stock : 28</h3>
                        <p className='product-description'>{product?.desc}</p>
                        <p className='product-price'>${product?.price}</p>
                        <div className='flex gap-5 button-container'>
                            <div className='counter-btn-container'>
                                <button disabled={count === 1} onClick={()=>setCount(count - 1)}  >-</button>
                                <button>{count}</button>
                                <button onClick={()=>setCount(count + 1)}>+</button>
                            </div>
                            <div className='w-full'>
                                <button onClick={handleCart} className='cart-btn '>Add to Cart</button>
                            </div>
                        </div>
                        <div className='w-full flex items-end justify-end mt-3 text-orange-500'>
                            <button onClick={()=>navigate('/product-details')}>More info</button>
                        </div>
                    </div>
                </div>
            </div>
      </Modal>
        
        
    );
};

export default ProductDetails;