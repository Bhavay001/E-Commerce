import React from 'react'
import Modal from './Modal'
const OrderSuccessModal = ({onClose}) =>{
    return(
        <Modal onClose={onClose}>
        <div className="order-container">
            <div className="order-container--success">
                <img className='img-fluid' src="https://t4.ftcdn.net/jpg/02/96/39/49/360_F_296394926_47KWuovlxc7yzUqwqP0aNNXu8mC0BX76.jpg" alt="Success" />
                <div className="message">
                    <h1>Order Successfully Placed !!</h1>
                    <span>OderId #{Math.random().toString(32).slice(2)}</span>
                </div>
            </div>
        </div>

        </Modal>
    )
}

export default OrderSuccessModal