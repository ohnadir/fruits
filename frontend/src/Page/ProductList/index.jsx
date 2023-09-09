import React, { useEffect, useState } from 'react';
import './ProductList.scss'
import { getFilterProduct,  } from "../../Redux/actions/product";
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

const ProductList = () => {
    const [ detailsModal, setDetailsModal ] = useState('')
    const [productGrid, setProductGrid] = useState("grid")
    const { loading, products } = useSelector(state => state.searchProduct);
    const [messageApi, contextHolder ] = message.useMessage();
    const [showBorder, setShowBorder] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [search, setSearch] = useState("");
    const [filterItem, setFilterItem] = useState("low2high")
    const dispatch = useDispatch();

    
    const handleFilterItem=(value)=>{
        setFilterItem(value)
    }
    const handleSearch=()=>{
        setKeyword(search);
    }
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
            dispatch(addItemToCart(data))
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

    useEffect(() => {
        dispatch(getFilterProduct(filterItem))
    }, [dispatch, filterItem]);
    return (
        <>  
            {contextHolder}
                    
                <>
                    {/* product filter section start */}
                    <section className='filter' style={{borderBottom : showBorder === true ? "2px solid #eee" : null}}>
                        <div className='filter-container'>
                            <div className='flex items-center gap-4'>
                                <div className="input-container">
                                    <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search Product' />
                                    <button onClick={handleSearch}><BsSearch/></button>
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
                                    defaultValue="low2high"
                                    style={{
                                        width: 150,
                                    }}
                                    onChange={handleFilterItem}
                                    options={[
                                        {
                                        value: 'low2high',
                                        label: 'Price (Lowest)',
                                        },
                                        {
                                        value: 'high2low',
                                        label: 'Price (Highest)',
                                        },
                                        {
                                        value: 'a2z',
                                        label: 'Products (A to Z)',
                                        },
                                        {
                                        value: 'z2a',
                                        label: 'Products (Z to A)'
                                        },
                                    ]}
                                    />
                            </div>
                        </div>
                    </section>
                    {/* product filter section end */}


                    {/* product list start */}
                    <div className='product-list-container'>
                        {
                            loading
                            ?
                            <Loader/>
                            :
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
                                                <p className='m-0 text-center text-[#10b981] font-extrabold'>${product?.price}</p>
                                            </div>
                                        </div>
                                )}
                                {
                                    detailsModal && <ProductDetails detailsModal={detailsModal} setDetailsModal={setDetailsModal}/>
                                }
                            </div>
                        }
                    </div>
                    {/* product list end */}
                </>
        </>
    );
};

export default ProductList;