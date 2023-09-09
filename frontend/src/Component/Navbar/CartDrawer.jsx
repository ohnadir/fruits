import React from 'react';
import { useNavigate } from 'react-router-dom'
import { MdClose } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import Helmet from "../Layout/Helmet";
import { decreaseCartQuantity, addItemToCart, removeItemFromCart } from "../../Redux/actions/carts"
import { useDispatch, useSelector } from 'react-redux';

const CartDrawer = ({ setOpen }) => {
    const { cartItems } = useSelector(state => state.cart);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const total = cartItems?.reduce((a, b) => {return a + b.total}, 0);

    // checkout navigate function
    const handleCheckout=()=>{
        if(total > 1){
            navigate('/checkout')
            setOpen(false)
        }
    }

    // cart item remove function
    const HandleRemove= (id)=>{
        dispatch(removeItemFromCart(id))
    }

    // cart item decrease function
    const handleDecreaseQuantity= (id)=>{
        dispatch(decreaseCartQuantity(id));
    }

    // cart item increase function
    const handleIncreaseQuantity= (data)=>{
        dispatch(addItemToCart(data));
    }

    return (
        <div className='cart-drawer'>
            <Helmet title="Cart" />

            {/* Cart Header start */}
            <div  className='cart-header'>
                <div className='cart-header-content'>
                    <span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 264l-89.6 112-38.4-44.88"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"></path>
                        </svg>
                    </span>
                    <span className='text-[16px] font-semibold'>Shopping  Cart</span>
                </div>

                {/* close icon */}
                <MdClose size={18} className='cursor-pointer' onClick={()=>setOpen(false)} />
            </div>
            {/* Cart Header end */}

            <div className='cart-body'>
                {
                    cartItems?.length === 0
                    ?

                    // empty cart container start
                    <div className='empty-cart-container'>
                        <div>
                            <div className='empty-cart'>
                                <span>
                                    <svg stroke="#059669" fill="#059669" strokeWidth="0" viewBox="0 0 512 512" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div>
                                <h1 className='mb-2 text-center'>Your Cart is empty</h1>
                                <p className='text-center text-[14px]'>No items added in your cart. Please add product to your cart list.</p>
                            </div>
                        </div>
                    </div>
                    // empty cart container end

                    :

                    // products container start
                    <div className='cart-item'>
                        {
                            cartItems?.map((item)=>
                                <div className='mb-[20px]  mx-2' key={item.id}>
                                    <div className='cart'>

                                        {/* product image start */}
                                        <div className='product-photo w-[20%] border border-red-500 rounded-full p-[10px]'>
                                            <img className='w-full' src={item?.image} alt="" />
                                        </div>
                                        {/* product image end */}

                                        {/* product details start */}
                                        <div className='cart-info w-[80%]'>
                                            <h2>{item?.name}</h2>
                                            <p>Item Price ${item?.price}</p>
                                            <div className='cart-footer mt-2'>
                                                <p className='total'>${item?.total}</p>

                                                {/* cart increase, decrease & remove container start */}
                                                <div className='btn-container'>
                                                    <button onClick={()=>handleDecreaseQuantity(item.id)}>-</button>
                                                    <button>{item?.quantity}</button>
                                                    <button onClick={()=>handleIncreaseQuantity(item)}>+</button>
                                                </div>
                                                <div className='delete-btn' onClick={()=>HandleRemove(item.id)}>
                                                    <BsTrash size={15} style={{color : "red"}}/>
                                                </div>
                                                {/* cart increase, decrease & remove container end */}
                                            </div>
                                        </div>
                                        {/* product details end */}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    // products container start
                }
            </div>

            {/* checkout button section start */}
            {
                cartItems.length === 0
                ?
                null
                :
                <div className="cart-footer-btn">
                    {/* <button onClick={()=>navigate('/cart')} className='active'>View cart</button> */}
                    <button disabled={ total === 0} className='checkout-btn' onClick={handleCheckout}>
                        <span>Proceed To Checkout</span>
                        <span className='price-container'>$ {total ? total :0 }</span>
                    </button>
                </div>
            }
            {/* checkout button section end */}

        </div>
    );
};

export default CartDrawer;