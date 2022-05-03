import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import styles from "../styles/Cart.module.css"
import { useEffect } from "react";

export default function Cart(){
    const { cart } = useContext(CartContext)
    const [open, setOpen] = useState(false)

    const { addToCart, rmvFromCart, deleteFromCart } = useContext(CartContext)

    function AddToCart(product){
        addToCart(product)
    }

    function RmvFromCart(product){
        rmvFromCart(product)
    }

    function DeleteFromCart(product){
        deleteFromCart(product)
    }

    function handleCart(){
        setOpen(!open)
    }

    function CartInfo(){
        let total_value = 0
        
        cart.forEach((cart_item)=>{
            total_value+=(cart_item.value*cart_item.inCart)
        })

        return (`Cart(${cart.length}) $${(total_value/100).toFixed(2)}`)
    }

    function Render(){
        return(
            cart.map((cart_item,key)=>{
                return(
                    <div key={key} className={styles.product}>
                        <button className={styles.rmvFromCart} onClick={()=>{DeleteFromCart(cart_item)}}>x</button>
                        <img src={cart_item.img}/>
                        <div>
                            <p>{cart_item.name}</p>
                            <div className={styles.value}>$ {(+cart_item.value/100).toFixed(2)}</div>
                            <div>
                                <div className={styles.manipulateQuant}>
                                    <img src="/cart.svg"/>
                                    <p>{cart_item.inCart}</p>
                                    <button onClick={()=>{AddToCart(cart_item)}} style={{height: "20px"}}>+</button>
                                    <button onClick={()=>{RmvFromCart(cart_item)}} style={{height: "20px"}}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    return(
        <div className={styles.header}>
            <div className={styles.cart}>
                <img onClick={()=>{handleCart()}} src="/cart.svg" width={40}/>
                
                {open ?
                    <div className={styles.cart_open}>
                        <button className={styles.closeCart} onClick={()=>{handleCart()}}>{">"}</button>
                        <div className={styles.cart_area}>
                            <div className={styles.cart_info}>{CartInfo()}</div>
                            <div className={styles.cart_items}>
                                {Render()}
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}