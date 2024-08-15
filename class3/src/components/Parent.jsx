import React, { createContext, useState } from 'react'
import Child1 from './Child1'


export const NameContext = createContext();

const Parent = () => {
    const [name, setName] = useState("");
    const [count, setCount] = useState(0)
    console.log("Parent calling");

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount(count - 1)}>-</button>
            <Child1 name={name} />
        </div>
    )
}

// export const NameContext = createContext();
// const { Provider, Consumer } = NameContext
// const Parent = () => {
//     const [name, setName] = useState("Ali Haider")
//     // const name = "hasnain";
//     return (
//         <Provider value={{ name: name, setName }}>
//             <Child1 name={name} />
//         </Provider>
//     )
// }
// const NameContext = createContext();

// const Parent = () => {
//     const [name, setName] = useState("Ali Haider")
//     return (
//         <NameContext.Provider value={name}>
//             <Child1 name={name} />
//         </NameContext.Provider>
//     )
// }

export default Parent
// const Parent = ({ title, description, children }) => {
//     return (
//         <section>
//             <h1>{title}</h1>
//             <p>{description}</p>
//             {children}
//         </section>
//     )
// }

// export default Parent