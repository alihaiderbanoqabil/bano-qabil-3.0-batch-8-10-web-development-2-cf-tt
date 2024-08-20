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
        <pre>{JSON.stringify(data, null, 4)}</pre>
    )
}

export default Post