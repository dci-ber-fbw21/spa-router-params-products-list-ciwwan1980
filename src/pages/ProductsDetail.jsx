import React from 'react'



export default function ProductsDetail(props) {
    console.log(props, "props")
    return (
        <div>
            <h2>{props.location.state.name}</h2>
        </div>
    )
}
