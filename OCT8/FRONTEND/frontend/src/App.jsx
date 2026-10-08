import React, { useEffect, useState } from 'react'
import ProductList from './ProductList.jsx';

function App() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      console.log("......loading");

      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();

      setProducts(data.products);
      console.log(products);
    }

    getData();
  }, [])

  return (
    <div>
      <ProductList products={products}></ProductList>
    </div>
  )
}

export default App