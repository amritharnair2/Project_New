import React, { useEffect, useState } from 'react'
import './App.css'
import { axiosInstance } from './axios/axiosInstance';

function App() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axiosInstance.get("/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.error(err))
  })

  if(!products)
    return <h2>Product Loading....</h2>

  return (
    <>
      <h1 style={{color:"green"}}>{products.name}</h1>
      <p>{products.description}</p>
      <h4>Rs. {products.price}</h4>
    </>
  )
}

export default App
