import React, { useRef } from 'react'
import "../Style/Invoice.scss"
import ReactToPrint from "react-to-print";

const Invoice = () => {
    const componentRef = useRef();
    const handlePrint = () => {
        window.print();
    };
    return (
        <div className='bg-gray-50 h-full'>
            <div className='invoice-container'>
                <div className='invoice-title'>
                    <h1>Thank you <span className="font-bold text-emerald-600">Nadir Hossain</span>, Your order have been received !</h1>
                </div>
                <div className='invoice-body' ref={componentRef}>
                    <div className='invoice-content'>
                        <div className='invoice-heading'>
                            <div>
                                <h1>INVOICE</h1>
                                <p>Status : <span className='text-orange-500'>Pending</span></p>
                            </div>
                            <div className='brand-logo'>
                                <img src="https://kachabazar-store.vercel.app/logo/logo-color.svg" alt="" />
                                <p>Bambali, Sédhiou, Senegal</p>
                            </div>
                        </div>
                        <div className='client-info'>
                            <div>
                                <h1>DATE</h1>
                                <p>May 26, 2023</p>
                            </div>
                            <div>
                                <h1>INVOICE NO.</h1>
                                <p>#10083</p>
                            </div>
                            <div>
                                <h1>INVOICE NO.</h1>
                                <p>Nadir Hossain</p>
                                <p>nadirhossain336@gmail.com</p>
                                <p>H-282, R-02, Shantipur, Khailgaon</p>
                            </div>
                        </div>
                    </div>
                    <div className='product-info'>
                        <table>
                            <tr>
                                <th>SR.</th>
                                <th>PRODUCT NAME</th>
                                <th>QUANTITY</th>
                                <th>ITEM PRICE</th>
                                <th>AMOUNT</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Rainbow Chard</td>
                                <td>2</td>
                                <td>$7.2</td>
                                <td>$14.14</td>
                            </tr>
                        </table>
                    </div>
                    <div className='order-status'>
                        <div>
                            <h1>PAYMENT METHOD</h1>
                            <p>Cash</p>
                        </div>
                        <div>
                            <h1>SHIPPING COST</h1>
                            <p>$60.00</p>
                        </div>
                        <div>
                            <h1>DISCOUNT</h1>
                            <p>$0.00</p>
                        </div>
                        <div>
                            <h1>TOTAL AMOUNT</h1>
                            <p className='text-red-500 total-price'>$74.14</p>
                        </div>
                    </div>
                </div>
                <div className="btn-container">
                    <button>Download Invoice</button>
                    <ReactToPrint
            trigger={() => (
              <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                Print / Download
              </button>
            )}
            content={() => componentRef.current}
          />
                </div>
            </div>
        </div>
    )
}

export default Invoice