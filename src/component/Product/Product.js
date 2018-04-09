import React from 'react';
import {Link} from 'react-router-dom';
import './../../reset.css';
import './Product.css';

export default function Product( props ) {
    
    return(
        <div className="Product">
            <div className="image-container">
                <img src={props.url} alt="product"/>
            </div>
            <div className="text-container">
                <h2>{props.name}</h2>
                <h2>{props.price}</h2><br/>
                <div className="button-container">
                    <button onClick= {()=> props.deleteProd(props.id)}>Delete</button>
                    {/* <button onClick= {()=> props.setSelected(props)}>Edit</button> */}
                    <Link to={'/edit/'+props.id}><button> Edit </button></Link>
                </div>
            </div>
        </div>
    )
}