import React, { useRef, useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        name: "", email: "", password: ""
    });
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const h1Ref = useRef(null);

    const { name, email, password } = user;
    // console.log({ name, email, password });

    const onChangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
        // console.log("event: ", event.target.value, event.target.name);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.dir(event.target[0].value);
        // console.dir(event.target[1].value);
        // console.dir(event.target[2].value);
        console.log(nameInputRef.current.value);
        console.log(emailInputRef.current.value);
        console.log(passwordInputRef.current.value);

        const data = {
            name: nameInputRef.current.value,
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value
        }
        fetch('https://fakestoreapi.com/products',
            {
                method: "POST",
                // headers: { 'Authorization': `Bearer ${token}`},
                body: JSON.stringify(data)
            }
        )
            .then((res) => { console.log({ res }); })
            .catch((error) => { console.log({ error }); })
    }
    // const isDisabled = name && email && password;
    // const isDisabled = nameInputRef.current.value && emailInputRef.current.value && passwordInputRef.current.value;
    // console.log({ isDisabled });

    // console.log(h1Ref);
    return (

        <form className='group' onSubmit={onSubmitHandler}>
            <div className='group'>
                <label htmlFor="name">Name:</label>
                <input id='name' type="text" ref={nameInputRef}
                />

            </div>
            <div className='group'>
                <label htmlFor="email">Email:</label>
                <input id='email' type="email" ref={emailInputRef}
                />

            </div>
            <div className='group'>
                <label htmlFor="password">Password:</label>
                <input id='password' type="password" ref={passwordInputRef}
                />

            </div>
            {/* <button disabled={!(nameInputRef.current?.value && emailInputRef.current?.value && passwordInputRef.current?.value)}>Submit</button> */}
            {/* <button disabled={!isDisabled}>Submit</button> */}
            <button disabled={false}>Submit</button>
        </form>
    )
}

export default Form
// <>
//     <h1 ref={h1Ref} >Heading1</h1>
//     <button onClick={() => {
//         // console.log(h1Ref);
//         h1Ref.current.style.backgroundColor = "red"
//     }}>Change BackgroundColor</button>
// </>

// <form className='group' onSubmit={onSubmitHandler}>
// <div className='group'>
//     <label htmlFor="name">Name:</label>
//     <input id='name' type="text" value={name}
//         name='name'
//         // onChange={(event) => onChangeHandler(event)}
//         onChange={onChangeHandler}
//     // onChange={(e) => {
//     //     setUser({ ...user, name: e.target.value });
//     //     // console.log(e.target.value);
//     // }}
//     />
//     {/* <input id='name' type="text" /> */}
// </div>
// <div className='group'>
//     <label htmlFor="email">Email:</label>
//     <input id='email' type="email" value={email}
//         name='email'
//         onChange={onChangeHandler}

//     // onChange={(e) => {
//     //     setUser({ ...user, email: e.target.value });
//     //     // console.log(e.target.value);
//     // }}
//     />
//     {/* <input id='email' type="email" /> */}
// </div>
// <div className='group'>
//     <label htmlFor="password">Password:</label>
//     <input id='password' type="password" value={password}
//         name='password'
//         onChange={onChangeHandler}

//     // onChange={(e) => {
//     //     setUser({ ...user, password: e.target.value });
//     //     // console.log(e.target.value);
//     // }}
//     />
//     {/* <input id='password' type="password" /> */}
// </div>
// <button disabled={!isDisabled}>Submit</button>
// </form>