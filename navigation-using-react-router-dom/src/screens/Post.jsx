import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Post = () => {
    let { postId } = useParams();
    let location = useLocation();
    const { state } = location
    console.log(state, 'state', location);

    const { isLoading, error, data } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    // console.log({ isLoading, error, data });

    return (
        <>
            <button className="bg-sky-500 hover:bg-sky-700 hover:text-red-700 hover:font-black rounded-full p-4">
                Save changes
            </button>
            <pre className='lg:font-bold border'>{JSON.stringify(data, null, 4)}</pre>
        </>
    )
}

export default Post