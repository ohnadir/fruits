import React, { useState } from 'react'

const Address = () => {
    const [Open, setOpen] = useState(false)
    const [Address, setAddress] = useState({
        street: '244/1',
        city: 'Dhaka',
        country: 'Bangladesh',
        zip_code: "3546"
    })
    const handleChange=()=>{}
    return (
        <div data-aos="fade-up" className='address-container p-4 border'>
            <div>
                <div className=''>
                    <header>
                        <div className='flex items-center justify-between'>
                            <h3 className='font-bold text-[18px] m-0 mb-2'>Billing Address</h3>
                            {
                                Address
                                ?
                                <button onClick={()=>setOpen(!Open)} className='m-0 underline text-[13px] font-bold'>Edit</button>
                                // <p >Edit</p>
                                :
                                <button onClick={()=>setOpen(!Open)} className='m-0 underline text-[13px] font-bold'>Add</button>
                            }
                        </div>
                    </header>
                    <body className='address-content'>
                        {
                            Open
                            ?
                            <div className='grid grid-cols-1 gap-3 '>
                                <div>
                                    <label htmlFor="first name">First Name</label>
                                    <input type="text" placeholder='First Name' name='firstName' onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="last name">Last Name</label>
                                    <input type="text" placeholder='Last Name' name='lastName' onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="address ">Address</label>
                                    <input type="text" placeholder='Address' name='address' onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" placeholder='Email' name='email' onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" placeholder='Address' name='address' onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="change password">Change Password</label>
                                    <input type="password" placeholder='Change Password' name='change_password' onChange={handleChange} />
                                </div>
                            </div>
                            :
                            <div className=''> 
                                <div>
                                    <p>1355 Market St, Suite 900</p>
                                    <p>San Francisco, CA 94103</p>
                                    <p><span className='font-bold'> Mobile:</span>(123) 456-7890</p>
                                </div>
                            </div>
                        }
                        
                    </body>
                </div>
            </div>
        </div>
    )
}

export default Address