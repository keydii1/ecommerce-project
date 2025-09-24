import axios from 'axios';
import "./HomePage.css";
import { Header } from "../Header";
// import {products} from 'D:/Workspace/Project Wed/Test/ecommerce-project/data/products.js'
// because use data from backend to generate the html
import { useEffect, useState } from 'react';
import { ProductGrid } from './ProductGrid';

export function HomePage({cart,loadCart}) {
  const [products, setProducts]= useState([]);


useEffect(()=> {
  const loadCart = async () => {
  const response =await axios.get('/api/products')
  setProducts( response.data);
  };

  loadCart();
  },[]);


  return (
    <>
    <title>E-Commerce</title>

    <Header cart={cart} />
      <div className="home-page">
      < ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
