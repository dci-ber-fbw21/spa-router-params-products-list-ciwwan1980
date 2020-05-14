import React from 'react'


export default function ProductsDetail(props) {
    console.log(props, "props")
    return (
        <div>
            <h2>{props.location.state.name}</h2>
            <img src={props.location.state.image}  alt=""/>
            <p>{props.location.state.description}</p>
            <p>{props.location.state.price}</p>
        </div>
    )
}
