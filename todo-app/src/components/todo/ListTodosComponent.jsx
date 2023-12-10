import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveTodosForUsernameApi } from "./api/TodoApiService";

function ListTodosComponent() {

    const today = new Date();
    //const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)
    // const todos = [
        // {id: 1, description: 'learn Spring', done: false, targetDate:targetDate},
        // {id: 2, description: 'learn Full Stack Dev', done:false, targetDate:targetDate},
        // {id: 3, description: 'learn AWS', done: false, targetDate:targetDate},
    // ]

    useEffect (() => refreshTodo(), [])

    function refreshTodo() {
        retrieveTodosForUsernameApi('in28minutes')
        .then(response => {
            //console.log(response)
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        deleteTodoApi('in28minutes', id)
        .then(
            // 1. Display messgae
            // 2. Update Todos list
            () => {
                setMessage(`Delete od todo with ${id} successful!`)
                refreshTodo()
            }
        )
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            { message && <div className="alert alert-warning">{message}</div>}
            
            <div>
               <table className="table">
                   <thead>
                        <tr>
                            <th>description</th>
                            <th>is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                        </tr>
                   </thead>
                   <tbody>
                       {
                           todos.map(
                               todo => (
                                <tr>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td><button className="btn btn-warning" 
                                    onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                            </tr>
                               )
                           )
                       }
                
                   </tbody>
               </table>
            </div>
        </div>
    )
}

export default ListTodosComponent