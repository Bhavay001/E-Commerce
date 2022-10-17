import React, {useState} from 'react'
import AddToCartIcon from "../../../assets/icons/add-to-cart.svg"
import Modal from '../UI/Modal';

const ListItem = ({ data,onAdd, onRemove })=>{
    // const [count,setcount] = useState(0);
    const [showModal,setModal] = useState(false)
    const increaseCount = event =>{
        event.stopPropagation();
        onAdd(data.id)
        // setcount(count+1);
    }
    const decreaseCount = event =>{
        event.stopPropagation();
        onRemove(data.id);
        // if(count===0){
        //     return;
        // }
        // if(count===1){
        //     onRemove(data.id);
        // }
        // setcount(count-1)
    }

    const handleModal = () =>{
        setModal(previousState => !previousState)
    }

    return(
        <>
    
            <div onClick={handleModal} className="item-card">
                <div>
                    <img className="img-fluid" src={data.thumnail} alt="item" />
                    <div className="item-card__information">
                        <div className="pricing">
                            <span>{`₹ ${data.discountedPrice}`}</span>
                            <small>
                                <strike>{`₹ ${data.price}`}</strike>
                            </small>
                        </div>
                        <div className="title">
                            <h3>{data.title}</h3>
                        </div>
                    </div>
                    {
                        data.quantity<1 ?
                        <button onClick={increaseCount} className='cart-add'>
                            <span>Add To Cart</span>
                            <img src={AddToCartIcon} alt="" />
                        </button>
                        :
                        <div className="cart-addon">
                            <button onClick={decreaseCount}> <span>-</span></button>
                            <span>{data.quantity}</span>
                            <button onClick={increaseCount}> <span>+</span></button>
                        </div>
                        

                    }

                </div>
            </div>
            {/* is show modal is true then only it will be shown consitional redering */}
            {showModal &&<Modal onClose = {handleModal}> 
                <div className='item-card__modal'>
                    <div className="img-wrap">
                        <img className="img-fluid" src={data.thumnail} alt="item" />
                    </div>
                    <div className="meta">
                        <h3>{data.title}</h3>
                        <div className="pricing">
                            <span>{`₹ ${data.discountedPrice}`}</span>
                            <small>
                                <strike>{`₹ ${data.price}`}</strike>
                            </small>
                        </div>
                        <p>{data.description}</p>
                        {
                            data.quantity<1 ?
                            <button onClick={increaseCount} className='cart-add cart-add__modal'>
                                <span>Add To Cart</span>
                                <img src={AddToCartIcon} alt="" />
                            </button>
                            :
                            <div className="cart-addon cart-addon__modal">
                                <button onClick={decreaseCount}> <span>-</span></button>
                                <span>{data.quantity}</span>
                                <button onClick={increaseCount}> <span>+</span></button>
                            </div>
                            

                        }
                    </div>
                </div>
            </Modal>}
        </>
    )
}
export default ListItem;