import React from 'react'
import "../Style/Services.scss"
import { RiShieldKeyholeLine } from 'react-icons/ri';
import { FaDollarSign } from 'react-icons/fa';
import { TbLeaf, TbTruckDelivery } from 'react-icons/tb';

const Services = () => {
    return (
        <div className='bg-white py-5 border border-b-1'>
            <div className='services-container'>
                <div className='service'>
                    <div className='service-item'>
                        <div className='service-icon'>
                            <TbTruckDelivery size={22} />
                        </div>
                        <div>
                            <p>Free Shipping</p>
                        </div>
                    </div>
                    <div className='service-item'>
                        <div className='service-icon'>
                            <TbLeaf size={22} />
                        </div>
                        <div >
                            <p>Fresh Products</p>
                        </div>
                    </div>
                    <div className='service-item'>
                        <div className='service-icon'>
                            <FaDollarSign size={22} />
                        </div>
                        <div>
                            <p>Moneyback Offer</p>
                        </div>
                    </div>
                    <div className='service-item'>
                        <div className='service-icon'>
                            <RiShieldKeyholeLine size={22} />
                        </div>
                        <div>
                            <p>Safe Payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services