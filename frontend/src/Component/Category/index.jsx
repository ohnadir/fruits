import React from 'react'
import categories from "../Category.json";
import '../Style/Category.scss'
import { BsPlusLg } from 'react-icons/bs';

const Category = () => {
    return (
        <div className='category-container'>
            <div className="category-heading">
                <h1>Featured Categories</h1>
                <p>Choose your necessary products from this feature categories.</p>
            </div>
            <div className='categories'>
                {
                    categories.map((item)=> <div className=''>
                        <div className='category-item'>
                            <img src={item.img} alt="" />
                            <div className='itemOverlay'>
                                <BsPlusLg className='plusIcon'/> 
                            </div>
                        </div>
                        <p className='category-name'>{item.name}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Category