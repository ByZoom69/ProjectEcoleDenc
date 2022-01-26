/* eslint-disable no-unused-vars */
import react from "react";
import product_card from "../data/product_data";

function list_product(product_card) {
    const list_items = product_card.map((item) => 
    <ul>
        <li>{item.product_name}</li>
        <li>{item.price}</li>
        <li>{item.description}</li>
    </ul>
    );
    return (
        <div>
            {list_items}
        </div>
    );
  }

export default list_product;