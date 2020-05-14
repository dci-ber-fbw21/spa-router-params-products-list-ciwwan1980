import React from 'react'
import {Link} from "react-router-dom"
import Products from "./Products"

export default function Homepage() {
    return (
        <div>
            <h1>homePage</h1>
            <Link to="./Products" >
            products
            </Link>
        </div>
    )
}
