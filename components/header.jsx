import Cart from "./cart"

export default function Header(){
    return(
        <div>
            <img onClick={()=>{handleCart()}} src="/cart.svg" width={40}/>
        </div>
    )
}