// import axios from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    // const [first, setFirst] = useState(second)
    const data = { username: "ali", emil: "ali@gmail.com" };
    let products = [];
    const gertPoducts = async (url) => {
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
            // products = 
        } catch (error) {
            console.log("error: ", error);
        } finally {
            console.log("finally block calling!");
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

        gertPoducts("https://fakestoreapi.com/products");
        // return () => { }
    }, []);



    console.log("count component render");
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

    return (
        <div>
            <button onClick={() => increment()}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
            <button onClick={() => {
                setIsPasswordVisible(!isPasswordVisible)
            }}>{isPasswordVisible ? "Hide" : "Show"}</button>
            <input type={isPasswordVisible ? "text" : "password"} />
        </div>
    )
}

export default Count