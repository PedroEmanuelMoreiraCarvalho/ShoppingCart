import { useContext, useEffect, useState } from 'react'
import Cart from '../components/cart'
import Product from '../components/product'
import Products from '../components/products'

export default function Home() {

  const [products] = useState([
      {
          id: 1,
          img: "https://th.bing.com/th/id/OIP.8IVMkun3qOSceHDBpirEPQHaGb?pid=ImgDet&rs=1",
          name: "bike",
          value: 10000,
      },
      {
          id: 2,
          img: "https://th.bing.com/th/id/OIP.DifiuN411kqtWBuDgaP4twHaHa?pid=ImgDet&rs=1",
          name: "tv",
          value: 100000,
      },
      {
          id: 3,
          img: "https://www.notebookcheck.org/fileadmin/Notebooks/LG/G4s/4zu3_LG_G4s_Front.jpg",
          name: "smartphone",
          value: 30000,
      },
      {
        id: 4,
        img: "https://th.bing.com/th/id/OIP.eeG7WwG4ClBTXcEwTKBS2wHaHa?pid=ImgDet&w=500&h=500&rs=1",
        name: "chocolate",
        value: 499
      },
      {
        id:5,
        img:"https://th.bing.com/th/id/OIP.ruzeeccFINxcBjJePIK8-AHaHa?pid=ImgDet&rs=1",
        name: "sementes",
        value: 3000 
      }
  ])

  return (
    <div>
      <Cart/>
      <Products products={products}/>
    </div>
  )
}
