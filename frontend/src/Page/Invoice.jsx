import React, { useRef } from 'react'
import "../Style/Invoice.scss"
import ReactToPrint from "react-to-print";

const Invoice = () => {
    const componentRef = useRef(null);
    return (
        <div className='bg-gray-50 h-full'>
            <div className='invoice-container'>
                <div className='invoice-title'>
                    <h1>Thank you <span className="font-bold text-emerald-600">Nadir Hossain</span>, Your order have been received !</h1>
                </div>
                <div className='invoice-body' ref={componentRef}>
                    <div className=' bg-[#eef2ff] p-[30px]'>
                        <div className='flex flex-col md:flex-row gap-5 md:gap-0 md:items-center justify-between border-b-[1px] border-white pb-[15px]'>
                            <div>
                                <h1 className='text-[20px] font-[700] m-0'>INVOICE</h1>
                                <p className='m-0 text-[15px]'>Status : <span className='text-orange-500'>Pending</span></p>
                            </div>
                            <div className='brand-logo'>
                                <img className='w-[100px] mb-[7px]' src="https://kachabazar-store.vercel.app/logo/logo-color.svg" alt="" />
                                <p>Bambali, Sédhiou, Senegal</p>
                            </div>
                        </div>
                        <div className=' pt-[15px] flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
                            <div>
                                <h1 className='m-0 font-[700]'>DATE</h1>
                                <p className='m-0 text-[14px] font-[600]'>May 26, 2023</p>
                            </div>
                            <div>
                                <h1 className='m-0 font-[700]'>INVOICE NO.</h1>
                                <p className='m-0 text-[14px] font-[600]'>#10083</p>
                            </div>
                            <div>
                                <h1 className='m-0 font-[700]'>INVOICE NO.</h1>
                                <p className='m-0 text-[14px] font-[600]'>Nadir Hossain</p>
                                <p className='m-0 text-[14px] font-[600]'>nadirhossain336@gmail.com</p>
                                <p className='m-0 text-[14px] font-[600]'>01756953936</p>
                                <p className='m-0 text-[14px] font-[600]'>H-282, R-02, Shantipur, Khailgaon</p>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-white p-[30px]'>
                        <table className='w-full text-center'>
                            <tr>
                                <th className='bg-[#ddd] py-[6px]'>SR.</th>
                                <th className='bg-[#ddd] py-[6px]'>PRODUCT NAME</th>
                                <th className='bg-[#ddd] py-[6px]'>QUANTITY</th>
                                <th className='bg-[#ddd] py-[6px]'>ITEM PRICE</th>
                                <th className='bg-[#ddd] py-[6px]'>AMOUNT</th>
                            </tr>
                            <tr>
                                <td className='py-[6px]'>1</td>
                                <td className='py-[6px]'>Rainbow Chard</td>
                                <td className='py-[6px]'>2</td>
                                <td className='py-[6px]'>$7.2</td>
                                <td className='py-[6px]'>$14.14</td>
                            </tr>
                        </table>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-4 justify-between p-[30px] bg-[#ecfdf5]'>
                        <div>
                            <h1 className='m-0 font-[700]'>PAYMENT METHOD</h1>
                            <p className='font-[600] m-0 text-[14px]'>Cash</p>
                        </div>
                        <div>
                            <h1 className='m-0 font-[700]'>SHIPPING COST</h1>
                            <p className='font-[600] m-0 text-[14px]'>$60.00</p>
                        </div>
                        <div>
                            <h1 className='m-0 font-[700]'>DISCOUNT</h1>
                            <p className='font-[600] m-0 text-[14px]'>$0.00</p>
                        </div>
                        <div>
                            <h1 className='m-0 font-[700]'>TOTAL AMOUNT</h1>
                            <p className='text-red-500 text-[18px] font-[700] m-0'>$74.14</p>
                        </div>
                    </div>
                </div>
                <div className="btn-container">
                    <ReactToPrint trigger={() => (<button >Print / Download</button>)}content={() => componentRef.current}/>
                </div>
            </div>
        </div>
    )
}

export default Invoice