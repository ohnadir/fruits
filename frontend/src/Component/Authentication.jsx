import React, { useState } from 'react'
import { Modal } from 'antd';
import "../Style/Authentication.scss"
import Login from "../Page/Login"
import SignUp from "../Page/SignUp"

const Authentication = ({ modal, setModal }) => {
    const [ Switch, setSwitch] = useState(false)
    return (
        <Modal
            centered
            open={modal}
            width={500}
            closable={false}
            footer={false}
            bodyStyle={{margin:"0", border:"none", padding:0}}
        >
            <div className='authentication-modal'>
                <div className='modal-close-icon' onClick={()=>setModal(false)}>
                    <svg stroke="none" fill="#ef4444" strokeWidth="0" viewBox="0 0 512 512" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                    </svg>
                </div>
                {
                    Switch
                    ?
                    <SignUp setSwitch={setSwitch}/>
                    :
                    <Login setSwitch={setSwitch}/>
                }
            </div>
      </Modal>
    )
}

export default Authentication