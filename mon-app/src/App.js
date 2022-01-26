/* eslint-disable no-unused-vars */
import './App.css';
import list_product from './components/list_product';
import react from "react";
import product_card from './data/product_data';

function App() {
  const lol = list_product(product_card)
  return (
    <div>{lol}</div>
  );
  
}

export default App;
