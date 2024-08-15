import React from 'react'
const object = {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    // "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
        "rate": 3.3,
        "count": 203
    }
};
const {
    id,
    title,
    price = 100,
    description,
    category,
    image,
    rating
} = object;
const {
    rate,
    count
} = rating;

// console.log(count, rating, price);

const Greeting = ({ name, age = 210 , object}) => {
    // console.log("props: ", props, props.object);
    return (
        // <div>Hello, good morning {JSON.stringify(props)}</div>
        // <div>Hello, good morning {props.name} {props.object && props.object.rating && props.object.rating.count}
        <div>Hello, good morning {name} {object?.rating?.count}
            {/* {props.age !== undefined ?`, your age is ${props.age}`: ", No age is passed from props"}    */}
            {/* {props.age ? `, your age is ${props.age}` : ", No age is passed from props"} */}
            {/* {props.age !== undefined && `, your age is ${props.age}`} */}
            {age && `, your age is ${age}`}
        </div>
    )
}

export default Greeting