// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Products from './Products';

// const categories = ["electronics", "jewelery", "men's clothing"]
const categories = [
    { label: "All", value: "" },
    { label: "Electronics", value: "electronics" },
    { label: "Jewelery", value: "jewelery" },
    { label: "Men's clothing", value: "men's clothing" },
    { label: "Women's clothing", value: "women's clothing" },
]

const Count = () => {

    const [count, setCount] = useState(0);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    // const [first, setFirst] = useState(second)
    const data = { username: "ali", emil: "ali@gmail.com" };
    // let products = [];
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [category, setCategory] = useState('');
    

    const gertPoducts = async (url) => {
        setIsLoading(true);
        try {
            const response = await axios(url,
                // {
                //     method: "GET",
                //     headers: {},
                //     data: data
                // }
            )
            console.log("response: ", response);
            console.log("products: ", response.data);
            setProducts(response.data)
        } catch (error) {
            console.log("error: ", error);
            // setIsLoading(false);
            setError(error.message)
        } finally {
            // console.log("finally block calling!");
            setIsLoading(false);
        }
    }

    useEffect(() => {
        console.log("useEffect calling");
        // fetch('https://fakestreapi.com/products',
        //     // {
        //     //     method: "GET",
        //     //     headers: { 'Authorization': `Bearer ${token}`},
        //     //     body: JSON.stringify({ username: "ali", emil: "ali@gmail.com" })

        //     // }
        // )
        //     .then(res => {
        //         console.log(res, "res");
        //         return res.json()
        //     })
        //     .then(json => console.log(json, 'json'))
        //     .catch((error) => { console.log("error", error); })
        //     .finally(() => {
        //         console.log("finally block calling ");
        //     })
        // gertPoducts(`https://fakestoreapi.com/products${category ? `/category/${category}` : ""}`);
        const decodedCategory = decodeURIComponent(category);
        console.log({ decodedCategory });
        gertPoducts(`https://fakestoreapi.com/products${category ? `/category/${decodeURIComponent(category)}` : ""}`);

        // return () => { }
    }, [category]);



    const increment = () => {
        // setCount(count + 1)
        setCount((previousCount) => {
            // console.log({ previousCount });
            return previousCount + 1
        })

        console.log("increment", count);
    }
    const decrement = () => {
        // setCount(count - 1)
        setCount((previousCount) => previousCount - 1)

        console.log("decrement", count);
    }
    console.log("count component render", isLoading, error, products);

    console.log({ products, isLoading, error, category });
    return (
        <>
            <div>
                <button onClick={() => increment()}>+</button>
                <span>{count}</span>
                <button onClick={decrement}>-</button>
                <button onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible)
                }}>{isPasswordVisible ? "Hide" : "Show"}</button>
                <input type={isPasswordVisible ? "text" : "password"} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <select onChange={(event) => {
                    setCategory(event.target.value)
                    console.log(event.target.value);
                }}>
                    <option value="">Select any category to filter products!</option>
                    {/* <option value="electronics">electronics</option> */}
                    {/* {categories.map((category) => <option value={category}>{category}</option>)} */}
                    {categories.map((category) => <option value={category.value}>{category.label}</option>)}
                </select>
                <h1>Products:{products.length}</h1>
            </div>

            {/* {isLoading ? "Loading..." : null} */}
            {/* {isLoading && "Loading..."} */}
            {isLoading && <h1>Loading...</h1>}
            {/* {error ? <h1>{error}</h1> : null} */}
            {error && <h1 style={{ color: "red" }}>{error}</h1>}

            {products.length > 0 && <Products products={products} />}

        </>
    )
}

export default Count


// const increment = () => {
//     // setCount(count + 1)
//     setCount((previousCount) => {
//         // console.log({ previousCount });
//         return previousCount + 1
//     })

//     console.log("increment", count);
// }
// const decrement = () => {
//     // setCount(count - 1)
//     setCount((previousCount) => previousCount - 1)

//     console.log("decrement", count);
// }
// let count = 0;
// const increment = () => {
//     count++;
//     console.log("increment", count);
// }
// const decrement = () => {
//     count--;
//     console.log("decrement", count);
// }
// console.log({ count: count });
// console.log({ count });
// console.log(count);

// <div>
//     <button onClick={() => increment()}>+</button>
//     <span>{count}</span>
//     <button onClick={decrement}>-</button>
//     <button onClick={() => {
//         setIsPasswordVisible(!isPasswordVisible)
//     }}>{isPasswordVisible ? "Hide" : "Show"}</button>
//     <input type={isPasswordVisible ? "text" : "password"} />
// </div>