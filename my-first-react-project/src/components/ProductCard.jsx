import React from "react";
import "./ProductCard.css"
function ProductCard({ props }) {
    return (
        <div className="card">
            <div>name: {props.name}</div>
            <div> manufacturer: {props.manufacturer}</div>
            <div>price {props.price}</div>
            <div>stocks Left: {props.stocks}</div>
            <button>Add to cart</button>
        </div>
    )
}

export default ProductCard;