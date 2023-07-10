import React from 'react'
import categories from "../../Category.json";
import './Category.scss'
import { BsPlusLg } from 'react-icons/bs';
import { useNavigate } from "react-router-dom"

const Category = () => {
    const navigate = useNavigate()
    return (
        <div className='category-container'>
            <div className="category-heading">
                <h1>Featured Categories</h1>
                <p>Choose your necessary products from this feature categories.</p>
            </div>
            <div className='categories'>
                {
                    categories.map((item)=> <div>
                        <div className='category-item' onClick={()=>navigate(`/category/${item.name}`)}>
                            <img src={item.img} alt="" />
                            <div className='itemOverlay'>
                                <BsPlusLg className='plusIcon'/> 
                            </div>
                        </div>
                        <p className='category-name capitalize'>{item.name}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Category