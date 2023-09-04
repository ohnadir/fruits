import React, { useEffect, useState } from 'react';
import "./Checkout.scss"
import { message } from 'antd';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { BsTrash } from 'react-icons/bs';
import { newOrder } from "../../Redux/actions/order"
import { makePayment } from "../../Redux/actions/payment"
import { getStoredCart, addToCart, decreaseQuantity } from "../../utils/LocalStorage"

const options = {
    style: {
        base: {
            fontSize: '14px'
        },
        invalid: {
            color: '#C13515'
        }
    }
}
const Checkout = () => {
    const [messageApi, contextHolder ] = message.useMessage();
    const [auth, setAuth] = useState('');
    const [discount, setDiscount] = useState(0)
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useSelector(state => state.auth);
    const { client_secret } = useSelector(state => state.payment);
    const { order } = useSelector(state => state.order);
    const cart = getStoredCart();
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setAuth(prev=>({...prev, [e.target.name]:e.target.value}))
    }

    const handleClick=()=>{
        document.getElementById('fedEx').querySelector('input[type="radio"]').click();
    }
    const handleClick2=()=>{
        document.getElementById('ups').querySelector('input[type="radio"]').click();
    }
    const handleClick3=()=>{
        document.getElementById('cash').querySelector('input[type="radio"]').click();
    }
    const handleClick4=(e)=>{
        document.getElementById('card').querySelector('input[type="radio"]').click();
    }
    const handleCoupon=()=>{
        if(!auth.coupon){
            messageApi.error('Please enter coupon code')
        }
        if(auth.coupon === "bazar20"){
            messageApi.success('Congratulation you got 50% discount')
            setDiscount(20)
        }
    }
    const subTotal = cart?.reduce((a, b) => {return a + b.total}, 0);
    const shippingCost = auth.deliveryMethod === "fedEx" && 60 || auth.deliveryMethod === "ups" && 20 || 0  
    const total = subTotal + shippingCost; 

    const discountAmount = total * (discount / 100);
    const totalPrice = total - (discountAmount || 0);


    const paymentAmount = {
        amount: Math.round(totalPrice * 100)
    }
    useEffect(() => {
        dispatch(makePayment(paymentAmount));
    }, [totalPrice, dispatch]);
    

    const stripeCall= async()=>{
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        
        // confirm payment 
        const result = await stripe.confirmCardPayment(
            client_secret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    name: user.name,
                    email: user.email,
                    phone: user?.phone,
                    address: user?.address
                },
                
              },
            },
        );
        return result;
    }


    const handleSubmit = async (e) => {
        
        let data ;
        if(auth.payment === "card"){
            data = await stripeCall()
        }
        const order = {
            products: cart,
            shippingInfo : {
                firstName: auth.firstName,
                lastName: auth.lastName ,
                email : auth.email,
                phone: auth.phone
            },
            shippingAddress: {
                address : auth.address,
                country: auth.country,
                city: auth.city,
                zip : auth.zipCode
            },
            paymentStatus : {
                id : data?.paymentIntent?.id,
                status : data?.paymentIntent?.status 
    
            },
            deliveryMethod : auth.deliveryMethod,
            paymentMethod : auth.payment,
            shippingCost : shippingCost,
            discount :discountAmount,
            total : totalPrice,
            userEmail : user.email,
            userName : user.name
        }
        dispatch(newOrder(order))
    }
    useEffect(()=>{
        if(order?._id){
            messageApi.success("Order is successful")
            setTimeout(() => {
                localStorage.removeItem("shopping-cart");
                navigate(`/invoice/${order?._id}`)
              }, 1000);
        }
        },[order])
    return (
        <>  
            {contextHolder}
            <div className='checkout'>
                    <div className=' checkout-container'>
                        <div className='form-container'>
                            <div className='persona-details'>
                                <h1>01.Personal Details</h1>
                                <div className='personal-details-container'>
                                    <div>
                                        <label htmlFor="firstName">First Name</label>
                                        <input onChange={handleChange} name="firstName"  type="text" placeholder='First Name' />
                                    </div>
                                    <div>
                                        <label htmlFor="Last Name">Last Name</label>
                                        <input onChange={handleChange} name="lastName" type="text" placeholder='Last Name' />
                                    </div>
                                    <div>
                                        <label htmlFor="Email">Email Address</label>
                                        <input onChange={handleChange} name="email" type="text" placeholder='Email Address' />
                                    </div>
                                    <div>
                                        <label htmlFor="Phone Number">Phone Number</label>
                                        <input onChange={handleChange} name="phone" type="text" placeholder='Phone Number' />
                                    </div>
                                </div>
                            </div>
                            <div className='shipping-details'>
                                <h1>02.Shipping Details</h1>
                                <div className='shipping-details-container'>
                                    <div>
                                        <label htmlFor="Street address">Street address</label>
                                        <input onChange={handleChange} name="address" type="text" placeholder='Street address' />
                                    </div>
                                    <div>
                                        <label htmlFor="" >Country</label>
                                        <input onChange={handleChange} name="country"  type="text" placeholder='Country' />
                                    </div>
                                    <div className='city-zip-container'>
                                        <div>
                                            <label htmlFor="city" >City</label>
                                            <input onChange={handleChange} name="city"  type="text" placeholder='City' />
                                        </div>
                                        <div>
                                            <label htmlFor="">ZIP/Postal</label>
                                            <input onChange={handleChange} name="zipCode"  type="text" placeholder='ZIP Code' />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="cost">Shipping Cost</label>
                                        <div className='shipping-option-container'>
                                            <div className='shipping-option' id='fedEx' onClick={handleClick}>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-gray-400'>
                                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.7em" width="1.7em" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1" y="3" width="15" height="13"></rect>
                                                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                                            <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                                            <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                                        </svg>
                                                    </span>
                                                    <div >
                                                        <h2>FedEx</h2>
                                                        <p>Delivery: Today Cost :- $60.00</p>
                                                    </div>
                                                </div>
                                                <input type="radio" onChange={handleChange} name="deliveryMethod" value="fedEx" id="" />
                                            </div>
                                            <div className='shipping-option' id='ups' onClick={handleClick2}>
                                                <div className='flex items-center gap-3'>
                                                    <span className='text-gray-400'>
                                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.7em" width="1.7em" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1" y="3" width="15" height="13"></rect>
                                                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                                            <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                                                <circle cx="18.5" cy="18.5" r="2.5"></circle>
                                                        </svg>
                                                    </span>
                                                    <div>
                                                        <h2>UPS</h2>
                                                        <p>Delivery: 7 Days Cost :- $20.00</p>
                                                    </div>
                                                </div>
                                                <input type="radio" onChange={handleChange} name="deliveryMethod" value="ups" id="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='payment-details'>
                                <h1>03.Payment Details</h1>
                                {
                                    auth.payment === "card"
                                    ?
                                    <div className='stripe-card'>
                                        <CardElement options={options}/>
                                    </div>
                                    :
                                    null
                                }
                                
                                <div className='payment-container'>
                                    <div className='payment-option' id='cash' onClick={handleClick3} >
                                        <div className='flex items-center gap-3'>
                                            <span className="text-gray-400">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M47.5 104H432V51.52a16 16 0 00-19.14-15.69l-368 60.48a16 16 0 00-12 10.47A39.69 39.69 0 0147.5 104zm416 24h-416a16 16 0 00-16 16v288a16 16 0 0016 16h416a16 16 0 0016-16V144a16 16 0 00-16-16zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                                                    <path d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236z"></path>
                                                </svg>
                                            </span>
                                            <p>Cash On Delivery</p>
                                        </div>
                                        <input type="radio" onChange={handleChange} name="payment" value="cash" id="" />
                                    </div>
                                    <div className='payment-option' id='card' onClick={handleClick4}>
                                        <div className='flex items-center gap-3'>
                                        <span className="text-gray-400">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.5 2h-13c-0.825 0-1.5 0.675-1.5 1.5v9c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-9c0-0.825-0.675-1.5-1.5-1.5zM1.5 3h13c0.271 0 0.5 0.229 0.5 0.5v1.5h-14v-1.5c0-0.271 0.229-0.5 0.5-0.5zM14.5 13h-13c-0.271 0-0.5-0.229-0.5-0.5v-4.5h14v4.5c0 0.271-0.229 0.5-0.5 0.5zM2 10h1v2h-1zM4 10h1v2h-1zM6 10h1v2h-1z"></path>
                                            </svg>
                                        </span>
                                        <p>Credit Card</p>
                                        </div>
                                        <input type="radio" onChange={handleChange} name="payment" value="card" id="" />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="button-container">
                                <button className='continue-btn' onClick={()=>navigate("/")}>
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.7em" width="1.7em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 160l-64 64 64 64"></path>
                                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M64 224h294c58.76 0 106 49.33 106 108v20"></path>
                                        </svg>
                                    </span>
                                    <span>Continue Shopping</span>
                                </button>
                                <button className='confirm-btn' onClick={handleSubmit}>
                                    <span>Confirm Order</span>
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M268 112l144 144-144 144m124-144H100"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <section className='card-container'>
                            <h1 className='card-heading'>Order Summary</h1>
                            <div className="cart-item-container">
                                <div className='cart-item'>
                                {
                                    cart?.map((item)=>
                                        <div className='mb-[20px]  mx-2' key={item.id}>
                                            <div className='cart'>
                                                <div className='cart-photo w-[20%]'>
                                                    <img className='w-full' src={item?.image} alt="" />
                                                </div>
                                                <div className='cart-info w-[80%]'>
                                                    <h2>{item?.name}</h2>
                                                    <p>Item Price ${item?.price}</p>
                                                    <div className='cart-footer mt-2'>
                                                        <p className='total'>${item?.total}</p>
                                                        <div className='btn-container'>
                                                            <button onClick={()=>decreaseQuantity(item.id)}  >-</button>
                                                            <button>{item?.quantity}</button>
                                                            <button onClick={()=>addToCart(item)}>+</button>
                                                        </div>
                                                        <div className='delete-btn'>
                                                            <BsTrash size={15} style={{color : "red"}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                </div>
                            </div>
                            <div className="coupon-section">
                                <input onChange={handleChange} name="coupon" type="text" placeholder='Enter your coupon code' />
                                <button disabled={discount === 20} onClick={handleCoupon}>Apply</button>
                            </div>
                            <div className="price-container">
                                <h2>
                                    <span className='text'>Subtotal</span>
                                    <span>${subTotal}</span>
                                </h2>
                                <h2>
                                    <span className='text'>Shipping Cost</span>
                                    <span>${shippingCost}</span>
                                </h2>
                                <h2>
                                    <span className='text'>Discount</span>
                                    <span className='text-orange-500'>${discountAmount}</span>
                                </h2>
                            </div>
                            <div className="checkout-divider"></div>
                            <h1 className='total-price'>
                                <span>TOTAL COST</span>
                                <span className='price'>${totalPrice}</span>
                            </h1>
                        </section>
                    </div>
            </div>
        </>
    );
};

export default Checkout;