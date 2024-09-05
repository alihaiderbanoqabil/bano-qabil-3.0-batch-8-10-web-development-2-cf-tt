import React from 'react'
import { useSelector } from 'react-redux'
import TodosComponent from '../components/TodosComponent'

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state.todos)
    const props = { isLoading, todos, error }
    console.log({ isLoading, todos, error });

    // if (isLoading) {
    //     return 'Loading...'
    // }
    // else if (error) {
    //     return <p className='text-red-500'>{error}</p>
    // }
    // return (
    //     <pre>{JSON.stringify(todos, null, 4)}</pre>
    // )
    <TodosComponent {...props} />
}

export default Todos