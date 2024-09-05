import React from 'react'
import { useSelector } from 'react-redux';

const Cakes = () => {
    // const state = useSelector(state => state);
    // const cake = useSelector(state => state.cake);
    const { cake } = useSelector(state => state);
    // console.log(state);
    console.log(cake.numOfCakes);
  return (
    <p>Total number of cakes in stock : {cake.numOfCakes}</p>
  )
}

export default Cakes