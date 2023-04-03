import React from 'react'
import { Table } from 'antd';
import { FaTrashAlt } from 'react-icons/fa';

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
];
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 6,
      render: () => <button className='text-xl w-6 h-6 rounded-full flex items-center p-[7px] font-bold bg-red-100 text-red-500'><FaTrashAlt/></button>,
    },
  ];
const Order = () => {
    return (
      <div data-aos="fade-up" >
        <Table className='border' dataSource={dataSource} columns={columns} pagination={false} />
      </div>
    )
}

export default Order