import React, { useEffect, useState } from 'react';
import './ProductList.scss'
import { getSearchProduct } from "../../Redux/actions/product";
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
import StarRatings from 'react-star-ratings';

const ProductList = () => {
    const [ detailsModal, setDetailsModal ] = useState('')
    const [category, setCategory] = useState('')
    const [productGrid, setProductGrid] = useState("grid")
    const { loading, products } = useSelector(state => state.searchProduct);
    const [messageApi, contextHolder ] = message.useMessage();
    const [showBorder, setShowBorder] = useState(false);
    const [maxRating, setMaxRating] = useState(5);
    const [keyword, setKeyword] = useState("");
    const [search, setSearch] = useState("");
    const [filterItem, setFilterItem] = useState("low2high")
    console.log(filterItem)
    // low2high, high2low,
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

    const price = [];
    const filter = products?.filter( (item)=> price.push(+item.price));
    const newPriceArray = price.filter((el, index) => price.indexOf(el) === index);

    let edge;
    function maxwell(){
        for(let checker of newPriceArray){
          if(checker > 2)edge = checker;
        }
        return edge;
    }
    const [maxPrice, setMaxPrice] = useState(maxwell())
    const handleChange = (e) =>{
        setMaxPrice(e.target.value)
    }

    const changeRating=(newRating)=>{
        setMaxRating(newRating)
    }

    const minPrice = 0
    const minRating = 1
    useEffect(() => {
        dispatch(getSearchProduct(keyword, filterItem, category, minPrice, maxPrice, maxRating, minRating))
    }, [dispatch, keyword, filterItem, category, minPrice, maxPrice, maxRating, minRating]);
    return (
        <>  
            {contextHolder}
            <div className='product-list-container'>
                {
                    
                    <>
                        {/* product filter section start */}
                        <section className='filter-container' style={{borderBottom : showBorder === true ? "2px solid #eee" : null}}>
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
                        </section>
                        {/* product filter section end */}

                        <div className='flex justify-between'>

                            {/* aside bar start */}
                            <aside className='aside'>
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

                                {/* price range start*/}
                                <div className="price-range">
                                    <h1>Price Range</h1>
                                    <p>Price : <span className='font-semibold'>{maxPrice ? maxPrice : Math.max(...newPriceArray)}</span></p>
                                    <input 
                                        name='price' 
                                        type="range" 
                                        step="1"
                                        value={maxPrice ? maxPrice : Math.max(...newPriceArray)}
                                        onChange={handleChange}
                                        min={Math.min(...newPriceArray)} 
                                        max={Math.max(...newPriceArray)}
                                    />




                                </div>
                                {/* price range start*/}

                                {/* filter by rating start*/}
                                <div className='rating'>
                                    <h1>Product Rating</h1>
                                    <StarRatings
                                        starDimension="20px"
                                        starSpacing="5px"
                                        rating={maxRating}
                                        starRatedColor="#FACA51"
                                        changeRating={changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                        starEmptyColor="#e9e9e9"
                                        starHoverColor="#FACA51"
                                    />
                                </div>
                                {/* filter by rating end*/}
                            </aside>
                            {/* aside bar end */}

                            {/* product list start */}

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
                        {/* product list end */}
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default ProductList;