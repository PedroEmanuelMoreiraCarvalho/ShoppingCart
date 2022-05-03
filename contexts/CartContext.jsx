import { createContext, useState, useCallback } from 'react'

export const CartContext = createContext({})

function CartProvider({children}){
    const [cart, setCard] = useState({
        cart: []
    })

    const setCartContext = useCallback(
        (newState) => {
            setCard({cart: newState})
        }
    ,[cart, setCard])

    const addToCart = useCallback(
        (product) => {
            if(cart.cart.indexOf(product) == -1){
                product.inCart = 1
                let cart_ref = cart.cart
                cart_ref.push(product)
                setCartContext(cart_ref)
            }else{
                let cart_ref = cart.cart
                cart_ref.map((cart_item)=>{
                    if(cart_item.id==product.id){
                        cart_item.inCart++
                        setCartContext(cart_ref)
                        return
                    }
                })
            }
        }
    ,[cart])

    const deleteFromCart = useCallback(
        (product) => {
            product.inCart = 0
            let cart_ref = cart.cart
            cart_ref = cart_ref.filter((cart_item)=>{
                return cart_item.id != product.id
            })
            setCartContext(cart_ref)
        }
    ,[cart])

    const rmvFromCart = useCallback(
        (product) => {
            let cart_ref = cart.cart
            cart_ref.map((cart_item)=>{
                if(cart_item.id==product.id){
                    cart_item.inCart--
                    if(cart_item.inCart == 0){
                        deleteFromCart(cart_item)
                        return
                    }
                    setCartContext(cart_ref)
                    return
                }
            })
        }
    ,[cart])


    const getCard = useCallback(
        () => (
            {setCartContext, addToCart, rmvFromCart, deleteFromCart, ...cart}
        )
    ,[cart])

    return(
        <CartContext.Provider value={getCard()}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider