import React from 'react';
import './App.css';
import productData from './components/products/productData';
import Products from './components/products/product';

function App() {
  return (
    <div>
      <main>
        <h1>
          Interfaz de usuario: React
        </h1>
        <div className={'designer'}>
          <a href="https://github.com/Zachlesk"> 
          <h4>
          By: Zachlesk
        </h4>
        <img src= 'https://cdn-icons-png.flaticon.com/512/25/25231.png' width={30}/> 
        </a>
          </div>

        <div className={"grid"}>
          {
            productData.map((product, i) => <Products {...product} key={i}/>)
          }
        </div>
      </main>
    </div>
);
}

export default App;
