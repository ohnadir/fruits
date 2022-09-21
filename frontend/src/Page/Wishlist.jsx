import { Table } from 'antd';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import cartHeader from '../assets/breadcrumb.jpg'
import ProductDetails from '../Component/ProductDetails';

const Wishlist = () => {
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
                <div className='flex w-36 bg-[#679509] border-[#679509] p-[2px]'>
                    <button onClick={()=>setCount(count - 1)} className='px-2 text-3xl  text-white' >-</button>
                    <input className='outline-0 w-20 px-8' type="text" value={count} />
                    <button onClick={()=>setCount(count + 1)} className='px-1  text-3xl text-center text-white'>+</button>
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
            render: () => <button className='text-xl w-8 h-8 rounded-full flex items-center p-2 font-bold bg-red-100 text-red-500'><FaTrashAlt/></button>,
        },
    ];
    const data = [];
    
    for (let i = 0; i < 5; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    return (
        <div>
            <div className='pb-12'>
                {/* Wishlist Header */}

                <div className='relative'>
                    <img src={cartHeader} alt="" />
                    <div className=" absolute bottom-0  text-center w-full h-full flex justify-center items-center">
                        <div className='flex gap-8'>
                            <div>
                                <h1 className="text-4xl font-bold text-white">Wishlist</h1>
                                <h5 className='flex items-center gap-4 text-2xl text-white'>Home <MdOutlineDoubleArrow className='mt-2' /> Wishlist</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-7xl mx-auto'>
                        {/* table */}
                    <div className='mt-9'>
                        <Table
                            style={{"backgroundColor": "#4d4d4d"}}
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                        />
                    </div>
                    
                </div>
            </div>
            
        </div>
        
    )
};

export default Wishlist;