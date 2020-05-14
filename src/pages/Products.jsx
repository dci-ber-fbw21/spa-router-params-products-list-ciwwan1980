import React from 'react'
import data from "../data/products.json"
import {Link} from "react-router-dom"

export default function Products() {
    console.log(data,"data")
    return (
        <div>
            <h1>products</h1>
           
           
            {data.map(item=>{
                return (
                    <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.shortDescription}</p>
                    <p>{item.price}</p>
                    </div>
                )
            })}
         
        </div>
    )
}
