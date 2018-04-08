import './../../reset.css';
import './Product.css';
import React from 'react';

export default function Product( props ) {
    
    return(
        <div className="Product">
            <div className="image-container">
                <img src={props.url} alt="product"/>
            </div>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            <button onClick= {()=> props.deleteProd(props.id)}>Delete</button>
            {/* <button onClick= {()=> props.setSelected(props)}>Edit</button> */}
            <button onClick = {()=> console.log(props)}> Edit</button>
        </div>
    )
}