import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios"
import ListItem from './ListItems/ListItem';
import Loader from './UI/Loader';

const Products = ({onAddItem, onRemoveItem , eventState}) => {
    const [items, setItems] = useState([])
    const [loader,setLoader] = useState(true)
    // const [presentItem , setPresentItem] = useState([])
    // [
    //     {
    //         id: 0,
    //         title: "Title of this Item 1",
    //         price: 450,
    //         discountedPrice: 340,
    //         thumnail : "https://picsum.photos/240/250"
    //     },
    //     {
    //         id: 1,
    //         title: "Title of this Item 2",
    //         price: 100,
    //         discountedPrice: 80,
    //         thumnail : "https://picsum.photos/250/260"
    //     },
    //     {
    //         id: 2,
    //         title: "Title of this Item 3",
    //         price: 100,
    //         discountedPrice: 80,
    //         thumnail : "https://picsum.photos/260/270"
    //     },
    //     {
    //         id: 3,
    //         title: "Title of this Item 4",
    //         price: 100,
    //         discountedPrice: 80,
    //         thumnail : "https://picsum.photos/270/280"
    //     }
    // ]

    useEffect(()=>{

        axios.get('https://react-endterm-default-rtdb.firebaseio.com/items.json')
        .then(response => {
            const data = response.data
            const transformed = data.map((item,index)=>{
                return{
                    ...item,
                    quantity : 0,
                    id :index
                }
            })
            setLoader(false)
            setItems(transformed)
        })
        .catch(error => {
            setLoader(false)
            alert("error")
        })


    },[])

    useEffect(() =>{
        if(eventState.id){
            if(eventState.type === 1){
                handleAddItem(eventState.id)
            }
            else if(eventState.type === -1){
                handleRemoveItem(eventState.id)
            }
        }
    },[eventState])
    const handleAddItem = (id) =>{
        // if(presentItem.indexOf(id)>-1){
        //     return;
        // }
        // setPresentItem([...presentItem, id]);
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        data[index].quantity += 1
        setItems([...data])
        onAddItem(data[index]);

    }

    const handleRemoveItem = (id) =>{
        // let index = presentItem.indexOf(id)
        // if(index>-1){
        //     // splice deletes that index by 1
        //     let items = [...presentItem]
        //     items.splice(index,1)
        //     setPresentItem([...items])
        //     onRemoveItem();  
        // }
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        if(data[index].quantity !==0){
            data[index].quantity -= 1
            setItems([...data])
            onRemoveItem(data[index]);
        }   

    }
    
    return (
        <>
            <div className="product-list">
                <div className="product-list--wrapper">
                    {/* <ListItem data={items[0]}></ListItem>
                    <ListItem data={items[1]}></ListItem> */}
                    {
                        items.map(item => {
                            return (<ListItem onAdd = {handleAddItem} onRemove = {handleRemoveItem} key={item.id} data={item}/>)
                        })
                    }

                </div>
            </div>
            {loader && <Loader/>}
        </>
    )
}

export default Products


                {/* <ListItem
                price = {items[0].price}
                dicountedprice = {items[0].dicountedprice}
                title = {items[0].title} 
                thumnail = {items[0].thumnail}
                />

                <ListItem
                 price = {items[1].price} 
                 dicountedprice = {items[1].dicountedprice} 
                 title = {items[1].title} 
                 thumnail = {items[1].thumnail}
                 />
                <ListItem
                 price = {items[2].price} 
                 dicountedprice = {items[2].dicountedprice} 
                 title = {items[2].title} 
                 thumnail = {items[2].thumnail}
                 />
                <ListItem
                 price = {items[3].price} 
                 dicountedprice = {items[3].dicountedprice} 
                 title = {items[3].title} 
                 thumnail = {items[3].thumnail}
                 /> */}
                // {
                //     items.map((val)=>{
                //         return(
                //         <ListItem
                //         key = {val.id}
                //         price = {val.price}
                //         dicountedprice = {val.dicountedprice} 
                //         title= {val.title}
                //         thumnail = {val.thumnail} />
                //         )
                //     })
                // }

