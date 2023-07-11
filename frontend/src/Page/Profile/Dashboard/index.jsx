import React from 'react'
import "./Dashboard.scss"
import { Table } from 'antd';
import CountUp from 'react-countup';

const Dashboard = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'ORDER TIME',
      dataIndex: 'orderTime',
      key: 'order time',
    },
    {
      title: 'METHOD',
      dataIndex: 'method',
      key: 'method',
    },
    {
      title: 'STATUS',
      key: 'status',
      dataIndex: 'status'
    },
    {
      title: 'TOTAL',
      key: 'total',
      dataIndex: 'total'
    }
  ];
  const data = [
    {
      key: '1',
      id: '11223',
      orderTime: "May 24, 2023",
      method: 'Cash',
      status: 'Pending',
      total: '70.00'
    },
    {
      key: '2',
      id: '11224',
      orderTime: "May 24, 2023",
      method: 'Cash',
      status: 'Pending',
      total: '70.00'
    },
    {
      key: '3',
      id: '11224',
      orderTime: "May 24, 2023",
      method: 'Cash',
      status: 'Pending',
      total: '70.00'
    },
  ];
  return (
    <div className='dashboard'>

      {/* order monitoring */}
      <div>
        <h3 className='font-bold text-[18px] mb-5'>Update Profile</h3>
        <div className=' category-container'>
          <div className='category-item'>
            <div className='category-icon cart-icon'>
              <span>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </span>
            </div>
            <div>
              <p className='counter-text'>Total Order</p>
              <p className='counter-number'>
                <CountUp end={20} />
              </p>
            </div>
          </div>
          <div className='category-item'>
            <div className='category-icon pending-icon'>
              <span>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
              </span>
            </div>
            <div>
              <p className='counter-text'>Pending Order</p>
              <p className='counter-number'>
                <CountUp end={18} />
              </p>
            </div>
          </div>
          <div className='category-item'>
            <div className='category-icon process-icon'>
              <span>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </span>
            </div>
            <div>
              <p className='counter-text'>Processing Order</p>
              <p className='counter-number'>
                <CountUp end={11} />
              </p>
            </div>
          </div>
          <div className='category-item'>
            <div className='category-icon complete-icon'>
              <span>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
            </div>
            <div>
              <p className='counter-text'>Complete Order</p>
              <p className='counter-number'>
                <CountUp end={29} />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* recent order */}
      <div className='mt-10'>
        <h1>Recent Orders</h1>
        <Table style={{borderRadius : "6px"}} className='border rounded-[6px]' pagination={false} columns={columns} dataSource={data}/>
      </div>
    </div>
  )
}

export default Dashboard