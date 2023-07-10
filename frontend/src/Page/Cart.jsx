import React, { useState } from 'react';
import cartHeader from '../assets/breadcrumb.jpg'
import { MdOutlineDoubleArrow } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'
import { Table } from 'antd';
import Layout from '../Component/Layout/Layout';


const Cart = () => {
    const [count, setCount] = useState(1);


    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 1,
        },
        {
            title: 'Product Name',
            dataIndex: 'product name',
            key: 2,
        },
        {
            title: 'Unit Price',
            dataIndex: 'unit price',
            key: 3,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 4,
            render: () =>
                <div className='flex w-36 h-[30px] bg-[#679509] border-[#679509] p-[2px]'>
                    <button disabled={count === 1} onClick={()=>setCount(count - 1)} className='px-2   text-white' >-</button>
                    <input className='outline-0 w-24 px-8' type="text" value={count} />
                    <button onClick={()=>setCount(count + 1)} className='px-2  text-white'>+</button>
                </div>
        },
        {
            title: 'Sub Total',
            dataIndex: 'sub total',
            key: 5,
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 6,
            render: () => <button className='text-xl w-8 h-8 rounded-full flex items-center p-[10px] font-bold bg-red-100 text-red-500'><FaTrashAlt/></button>,
        },
    ];
    const data = [];
    
    for (let i = 0; i < 5; i++) {
      data.push({
        key: i,
        title: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    return (
        <Layout>
            <div >
                <div className='pb-12'>
                    {/* Cart Header */}

                    <div className='relative'>
                        <img src={cartHeader} className='h-[200px] w-full' alt="" />
                        <div className=" absolute bottom-0  text-center w-full h-full flex justify-center items-center">
                            <div className='flex gap-8'>
                                <div>
                                    <h1 className="text-3xl font-bold text-white">Cart</h1>
                                    <h5 className='flex items-center gap-4 text-xl text-white'>Home <MdOutlineDoubleArrow className='mt-2' /> Cart</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Layout>
    );
};

export default Cart;