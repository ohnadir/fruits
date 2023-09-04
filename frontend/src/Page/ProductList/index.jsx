import React, { useEffect, useState } from 'react';
import './ProductList.scss'
import { getProducts } from "../../Redux/actions/product";
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Component/Loader';
import { addItemToCart } from '../../Redux/actions/carts';
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ProductDetails from '../ProductDetails';
import { message, Select } from 'antd';
import { BsFillGridFill, BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import categories from "../../Category.json";

const SearchResult = () => {
    const [ detailsModal, setDetailsModal ] = useState('')
    const [category, setCategory] = useState('all')
    const [productGrid, setProductGrid] = useState("grid")
    const { loading, products } = useSelector(state => state.products);
    const [messageApi, contextHolder ] = message.useMessage();
    const [showBorder, setShowBorder] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);

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

    // this function for scrolling border showing
    const controlBorder = () => {
        if (window.scrollY > 50) {
            setShowBorder(true)
        } else {
            setShowBorder(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlBorder)
        return () => {
          window.removeEventListener('scroll', controlBorder)
        }
    }, []);
    return (
        <>  
            {contextHolder}
            <div className='product-list-container'>
                {
                    loading
                    ?
                    <Loader/>
                    :
                    <>
                        {/* product filter section start */}
                        <section className='filter-container' style={{borderBottom : showBorder === true ? "2px solid #eee" : null}}>
                            <div className='flex items-center gap-4'>
                                <div className="input-container">
                                    <input type="text" placeholder='Search Product' />
                                    <button><BsSearch/></button>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <div className="option" style={{backgroundColor: productGrid === "grid" ? "#10b981" : null}} onClick={()=>setProductGrid("grid")}>
                                        <BsFillGridFill size={20}/>
                                    </div>
                                    <div className="option" style={{backgroundColor: productGrid === "list" ? "#10b981" : null}} onClick={()=>setProductGrid("list")}>
                                        <GiHamburgerMenu size={25} />
                                    </div>
                                </div>
                            </div>
                            <div className="select-container">
                                <Select
                                    defaultValue="lowest"
                                    style={{
                                        width: 150,
                                    }}
                                    //   onChange={handleChange}
                                    options={[
                                        {
                                        value: 'lowest',
                                        label: 'Price (Lowest)',
                                        },
                                        {
                                        value: 'highest',
                                        label: 'Price (Highest)',
                                        },
                                        {
                                        value: 'atoz',
                                        label: 'Products (A to Z)',
                                        },
                                        {
                                        value: 'ztoa',
                                        label: 'Products (Z to A)'
                                        },
                                    ]}
                                    />
                            </div>
                        </section>
                        {/* product filter section end */}

                        <div className='flex justify-between'>
                            {/* category list start */}
                            <div className="category-products w-[15%]">
                                <p style={{backgroundColor: category === "all" ? "#10b981" : null, color: category === "all" ? "white" : null}} className='capitalize' onClick={()=>setCategory("all")}>All</p>
                                {
                                    categories.map((item)=>
                                        <div className='category' key={item.id}>
                                            <p style={{backgroundColor: category === item.name ? "#10b981" : null, color: category === item.name ? "white" : null}} onClick={()=>setCategory(item.name)} className='capitalize'>{item.name}</p>
                                        </div>
                                    )
                                }
                            </div>
                            {/* category list end */}

                            {/* product list start */}
                            <div className='products-container-list'>
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
                        {/* product list end */}
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default SearchResult;