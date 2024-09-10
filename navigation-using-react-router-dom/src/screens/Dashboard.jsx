import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Cakes from '../components/Cakes'
import { order1Cake, orderSpecificNumberOfCakes, restockSpecificNumberOfCakes } from '../store/features/cakeSlice'
import { fetchTodos } from '../store/features/todosSlice'
import Header from '../components/Header'
import TodosComponent from '../components/TodosComponent'
import { useAddPostMutation, useGetPostsQuery, useLazyGetPostsQuery } from '../store/features/apiSlice'
// import Header from '../components/Header'
const routes = [
    {
        path: '/messages',
        title: "Messages"
    },
    {
        path: '/tasks',
        title: "Tasks"
    },
]
const Dashboard = () => {
    const token = "kdsjhajkhjkhdasjk"
    // const { data, isSuccess, error, isError, isLoading, refetch } = useGetPostsQuery(`?userId=1`);
    // console.log({ data, isSuccess, error, isError, isLoading });
    // const [getPosts, { data, isSuccess, error, isError, isLoading, refetch }] = useLazyGetPostsQuery();
    const [addPost, { data, isSuccess, error, isError, isLoading, }] = useAddPostMutation();
    console.log({ data, isSuccess, error, isError, isLoading });

    // useEffect(() => {
    //     if (token) {
    //         getPosts(`?userId=1&token=${token}`)
    //     }
    // }, [token])

    // useLazyGetPostsQuery()
    const dispatch = useDispatch()

    const [numberOfCakes, setNumberOfCakes] = useState(0);
    const [restockedCakes, setRestockedCakes] = useState(0);

    useEffect(() => {
        dispatch(fetchTodos('https://jsonplaceholder.typicode.com/todos'))
    }, [])
    // const { isLoading, todos, error } = useSelector(state => state.todos)
    // const props = { isLoading, todos, error }
    // console.log({ isLoading, todos, error });
    return (
        <div>

            Cake Store
            <Cakes />
            {/* <Header routes={routes} isLogoVisible={false} /> */}
            {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
            <div className='flex flex-col gap-4'>
                <button className='bg-cyan-500' onClick={() => dispatch(order1Cake())}>Order 1 Cake</button>
                <input className='rounded border-cyan-500 border-2' type="number" value={numberOfCakes} onChange={(e) => { setNumberOfCakes(e.target.value) }} />
                <button className='bg-cyan-500' onClick={() => dispatch(orderSpecificNumberOfCakes(numberOfCakes))} disabled={!numberOfCakes}>Order {numberOfCakes} Cake</button>
                <input className='rounded border-cyan-500 border-2' type="number" value={restockedCakes} onChange={(e) => { setRestockedCakes(e.target.value) }} />
                <button className='bg-cyan-500' onClick={() => dispatch(restockSpecificNumberOfCakes(+restockedCakes))} disabled={!restockedCakes}>Restock {restockedCakes} Cake</button>
                <button className='bg-cyan-500' onClick={() => { addPost({ title: 'Post1', description: 'description1' }) }}>Add Post</button>
            </div>
            {/* <TodosComponent {...props} /> */}
            <Outlet />
        </div>
    )
}

export default Dashboard