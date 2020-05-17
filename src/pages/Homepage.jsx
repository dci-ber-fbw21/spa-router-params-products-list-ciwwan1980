import React from 'react'
import {Link} from "react-router-dom"
import Products from "./Products"
import Data from "../data/products.json"

export default class Homepage extends React.Component  {
    
    render(){

           return (
        <div>
            <h1>homePage</h1>
            <Link to="./Products" >
            <h1>products</h1>
            {Data.map((item)=>{
                console.log(item, "item")
            })}
            </Link>
        </div>
    )
    }
}
