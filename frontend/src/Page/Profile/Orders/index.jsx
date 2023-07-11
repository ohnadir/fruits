import React, { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { emailOrder } from "../../../Redux/actions/order"
import './Orders.scss'

const Order = () => {
  const { orders } = useSelector(state => state.emailOrder);
  const { user  } = useSelector(state => state.auth);
  const dispatch  = useDispatch();
  useEffect(() => {
    dispatch(emailOrder(user.email));
  }, [user]);
  const handleDelete=(id)=>{
  }
  return (
    <div data-aos="fade-up" className='my-orders'>
      <table className='overflow-x-auto'>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Shipping Cost</th>
          <th>Delivery Status</th>
          <th>Order Number</th>
          <th>Payment Method</th>
          <th>Delivery Method</th>
          <th>Action</th>
        </tr>
        {
          orders?.map(order=>
            <tr key={order._id}>
              <td>{order?.products?.map((name)=> {return name.name})}</td>
              <td>{order?.products?.map((name)=> {return name.price})}</td>
              <td>{order?.products?.map((name)=> {return name.quantity})}</td>
              <td>{order?.total}</td>
              <td>{order?.shippingCost}</td>
              <td>{order?.deliveryStatus}</td>
              <td>{order?.orderNumber}</td>
              <td className='capitalize'>{order?.paymentMethod}</td>
              <td className='capitalize'>{order?.deliveryMethod}</td>
              <td className='trash' onClick={()=>handleDelete(order._id)}><FaTrashAlt size={22} /></td>
            </tr>
          )
        }
      </table>
    </div>
  )
}

export default Order