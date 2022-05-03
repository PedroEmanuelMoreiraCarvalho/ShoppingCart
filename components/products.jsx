import { useState } from "react"
import Product from "./product"

export default function Products(props){
    const [products] = useState(props.products)

    return(
        <div style={{"display":"flex","gap":"20px","alignItems":"center","justifyContent":"center", "width": "100%"}}>
            {products.map((product,key)=>{
                return(
                    <Product product={product} key={key}/>
                )
            })}
        </div>
    )
}