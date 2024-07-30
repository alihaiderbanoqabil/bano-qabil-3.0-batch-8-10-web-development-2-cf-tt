import React, { useReducer, useRef } from 'react';
import { BiSolidTrashAlt } from "react-icons/bi";

const ADD = "ADD";
const UPDATE = "UPDATE";

// const initialTodos = [
//     {
//         id: 1,
//         title: "Todo 1",
//         complete: false,
//     },
//     {
//         id: 2,
//         title: "Todo 2",
//         complete: false,
//     },
// ];
const initialTodos = [];

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD:
            console.log("ADD");
            return [action.todo, ...state,]
        case UPDATE:
            console.log("UPDATE");
            return;
        case "DELETE":
            console.log("DELETE");
            return state.filter(s => s.id !== action.id);
        case "DELETE_ALL":
            console.log("DELETE_ALL");
            return;
        case "DELETE_DONE":
            console.log("DELETE_DONE");
            return
        case "COMPLETE":
            // console.log("COMPLETE");
            return state.map((todo) => todo.id === action.id ? { ...todo, complete: !todo.complete } : todo);
        // return state.map((todo) => {
        //     if (todo.id === action.id) {
        //         return { ...todo, complete: !todo.complete };
        //     } else {
        //         return todo;
        //     }
        // });
        default:
            return state;
    }
};
// for done todos filter 
// todos.filter(s => s.complete)

// for undone todos filter 
// todos.filter(s => !s.complete)
export const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const titleInputRef = useRef();
    // const descriptionInputRef = useRef();

    console.log("todos: ", todos);

    const handleAdd = (event) => {
        event.preventDefault();
        const todo = {
            id: todos.length + 1,
            title: titleInputRef.current.value,
            complete: false,
        };
        dispatch({ type: ADD, todo });
    };

    const handleUpdate = (todo) => {
        dispatch({ type: UPDATE, id: todo.id });
    };

    const handleDelete = (id) => {
        console.log("id:", id);
        dispatch({ type: "DELETE", id: id });
    };

    const handleDeleteAll = () => {
        dispatch({ type: "DELETE_ALL" });
    };

    const handleDeleteDone = () => {
        dispatch({ type: "DELETE_DONE" });
    };

    // const handleComplete = (todo) => {
    //     // console.log(todo, "todo");
    //     dispatch({ type: "COMPLETE", id: todo.id });
    // };

    const handleComplete = (id) => {
        // console.log(todo, "todo");
        dispatch({ type: "COMPLETE", id: id });
    };

    return (
        <>
            <form onSubmit={handleAdd}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" ref={titleInputRef} />
                </div>
                {/* <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        rows={5}
                        cols={15}
                        id="description"
                        ref={descriptionInputRef}
                    />
                </div> */}
                <button>Add Todo</button>
            </form>

            {todos.length > 0 ? todos.map((todo, index) => {
                // console.log(todo, "todo");
                const doneTodoStyle = { textDecoration: "line-through", color: "red" }
                return (
                    <div key={todo.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <label style={{ ...(todo.complete && doneTodoStyle) }}>
                            {/* <label style={{ textDecoration: todo.complete && "line-through", color: todo.complete && "red" }}> */}
                            {index + 1}
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => handleComplete(todo.id)}
                            // onChange={() => handleComplete(todo)}
                            />
                            {todo.title} - {todo.id}
                        </label>
                        <BiSolidTrashAlt color='red' size={15} style={{ cursor: "pointer" }} onClick={() => handleDelete(todo.id)} />
                    </div>
                )
            }): <h1>No todo's added yet, please add some from above form!</h1>}
        </>
    );
}
