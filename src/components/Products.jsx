import React, { useEffect } from 'react'

const Products = () => {

  useEffect(() => {
    console.log("useEffect calling");
  }, []);
  console.log("Products component calling");
  return (
    <div>Products</div>
  )
}

export default Products