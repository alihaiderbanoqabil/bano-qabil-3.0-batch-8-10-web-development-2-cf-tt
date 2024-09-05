import React from 'react'

const TodosComponent = ({ isLoading, todos, error }) => {
    if (isLoading) {
        return 'Loading...'
    }
    else if (error) {
        return <p className='text-red-500'>{error}</p>
    }
    return (
        <pre>{JSON.stringify(todos, null, 4)}</pre>
    )
}

export default TodosComponent