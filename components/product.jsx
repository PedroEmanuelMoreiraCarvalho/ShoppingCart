import { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import styles from "../styles/Product.module.css"

export default function Product(props){
    const [product] = useState(props.product)
    
    const { addToCart, rmvFromCart, deleteFromCart } = useContext(CartContext)

    function AddToCart(){
        addToCart(product)
    }

    function RmvFromCart(){
        rmvFromCart(product)
    }

    function DeleteFromCart(){
        deleteFromCart(product)
    }

    return(
        <div className={styles.product}>
            <p>{product.name}</p>
            <img src={product.img}/>
            <div className={styles.value}>$ {(+product.value/100).toFixed(2)}</div>
            {product.inCart > 0 ? 
                <div>
                    <div className={styles.manipulateQuant}>
                        <img src="/cart.svg"/>
                        <p>{product.inCart}</p>
                        <button onClick={()=>{AddToCart()}} style={{height: "20px"}}>+</button>
                        <button onClick={()=>{RmvFromCart()}} style={{height: "20px"}}>-</button>
                    </div>
                    <button className={styles.deleteFromCart} onClick={()=>{DeleteFromCart()}}>remove from Cart</button>
                </div>
            : 
            <button className={styles.addToCart} onClick={()=>{AddToCart()}}>add to Cart</button>}
        </div>
    )
}