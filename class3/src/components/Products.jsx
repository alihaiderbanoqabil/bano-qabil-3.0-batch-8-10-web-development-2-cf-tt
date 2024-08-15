import React from 'react'
// import { products } from "../constants";

// console.log(products, 'products');

const Products = ({ products }) => {
    return (
        <section>
            <h1>Products</h1>
            {
                products.map((item, index) => {
                    // console.log(item, index);
                    return (
                        <section key={index} style={{
                            display: "flex",
                            // backgroundColor: "yellowgreen",
                            margin: "1rem",
                            flexDirection: index % 2 === 0 ? "row" : "row-reverse"
                        }}>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                            <div><img width={200} height={300} src={item.image} alt={item.title} /></div>
                        </section>
                    )
                })
            }
        </section >
    )
}

export default Products