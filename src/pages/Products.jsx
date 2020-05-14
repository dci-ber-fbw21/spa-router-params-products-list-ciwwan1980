import React, {useState,useEffect} from 'react'
import data from "../data/products.json"
import {Link} from "react-router-dom"


export default function Products() {
    // console.log(data,"data")
const [state,setState] = useState({})


useEffect(() => {
    setState(data)

}, [])


    return (
        <div>
            <h1>products</h1>
           
    
            {data.map(item=>{

                return (
                <Link to={{
                        pathname:`/productsDetails/${item.id}`,
                        state:{
                            name: item.name,
                            image: item.image,
                            description: item.description, 
                            price: item.price
                        }

                    }}>

                    <div key={item.id}>
                   
                    <p>{item.name}</p>
                   
                    <p>{item.shortDescription}</p>
                    <p>{item.price}</p>
                    </div>
                    </Link>
                )
            })}
         
        </div>
    )
}
