/* eslint-disable no-unused-vars */
import react from "react";
import product_card from "../data/product_data";
import "../css/list_items.css";
import { Card } from "react-bootstrap";
import { useState } from "react";

function List_product(product_card) {
    const [cart, setCart]  = useState([]);

    


    const list_items = product_card.map((item) => 
    <li value={item.id} key={item.id} className="card">
        <h1>{item.product_name}</h1>
        <p className="price">{item.price}</p>
        <p>{item.description}</p>
        <p><button>Add to Cart</button></p>
    </li>
    ); 
    
    return (
        <ul className="List_items">
            {list_items}
        </ul>
    );

}
  

export default List_product;