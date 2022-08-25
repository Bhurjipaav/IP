
import React, {useState} from "react";
import Header from "./header";
import Navbar from "./navbar";
import Carts from "./carts";
import Image from "./test.png"
import Form from "./from";
import Image1 from "./cart.png"
import {link} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Routes
} from "react-router-dom";
import {HelmetProvider, Helmet} from 'react-helmet-async'


function App() { 
  const [show, setShow] = useState(true);
  const [carts, setCart] = useState([]);

function handleClick(item) {
    if (carts.indexOf(item) !== -1) return;
    setCart([...carts, item]);
  };


 

  return (
    
    
    

    <div className="App">
      
      
      
      <React.Fragment>
      <Header setShow={setShow} size={carts.length} />
      {show ? (
        <Navbar handleClick={handleClick} />
      ) : (
        <Carts carts={carts} setCart={setCart} />
      )}
    </React.Fragment>

    <Form />
      
    </div>
    
    
  );
}

export default App;
