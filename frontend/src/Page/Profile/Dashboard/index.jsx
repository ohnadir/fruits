import React, { useEffect } from 'react'
import "./Dashboard.scss"
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import { allUser } from "../../../Redux/actions/user"
import { orderList } from "../../../Redux/actions/order"

const Dashboard = () => {
  const { users } = useSelector(state => state.users);
  const { orders } = useSelector(state => state.orders);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(allUser())
    dispatch(orderList())
  },[dispatch])
  const handleUpdate=()=>{}
  const handleDelete=()=>{}
  return (
    <div className='dashboard'>

      {/* order monitoring */}
      <div>
        <h3 className='font-bold text-[18px] mb-5'>Orders Details</h3>
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
      <div className='order-table'>
      <h3 className='font-bold text-[18px] mb-5'>Recent Orders</h3>
        <div style={{overflowX : "auto"}}>
          <table className='order-table-container'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Shipping Cost</th>
              <th>Delivery Status</th>
              <th>Order Number</th>
              <th>Payment Method</th>
              <th>Delivery Method</th>
              <th>Action</th>
              <th>View</th>
            </tr>
            {
              orders?.map(order=>
                <tr key={order._id}>
                  <td>{order?.userName}</td>
                  <td>{order?.userEmail}</td>
                  <td>{order?.products?.map((name)=> {return name.name})}</td>
                  <td>{order?.products?.map((name)=> {return name.price})}</td>
                  <td>{order?.products?.map((name)=> {return name.quantity})}</td>
                  <td>{order?.total}</td>
                  <td>{order?.shippingCost}</td>
                  <td className='bg-cyan-600 status' onClick={()=>handleUpdate(order._id)}>{order?.deliveryStatus}</td>
                  <td>{order?.orderNumber}</td>
                  <td className='capitalize'>{order?.paymentMethod}</td>
                  <td className='capitalize'>{order?.deliveryMethod}</td>
                  <td className='trash' onClick={()=>handleDelete(order._id)}><FaTrashAlt size={22} /></td>
                  <td><BsEye className='cursor-pointer' size={22} /></td>
                </tr>
              )
            }
          </table>
        </div>
      </div>
      
      {/* users order */}
      <div className='user-table'>
      <h3 className='font-bold text-[18px] mb-5'>Recent Register User</h3>
        <div style={{overflowX : "auto"}}>
          <table className='user-table-container'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
              <th>Address</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
            {
              users?.map(user=>
                <tr key={user._id}>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.phone ? user?.phone : "No Data Found"}</td>
                  <td>{user?.address ? user?.address : "No Data Found"}</td>
                  <td className='capitalize'>{user?.role}</td>
                  <td className='trash' onClick={()=>handleDelete(user._id)}><FaTrashAlt size={22} /></td>
                </tr>
              )
            }
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard