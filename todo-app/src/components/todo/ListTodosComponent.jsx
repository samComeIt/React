import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodoApi, retrieveTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

function ListTodosComponent() {

    const today = new Date();
    //const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const authContext = useAuth(); 

    const username = authContext.username

    const navigate = useNavigate()

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)
    // const todos = [
        // {id: 1, description: 'learn Spring', done: false, targetDate:targetDate},
        // {id: 2, description: 'learn Full Stack Dev', done:false, targetDate:targetDate},
        // {id: 3, description: 'learn AWS', done: false, targetDate:targetDate},
    // ]

    useEffect (() => refreshTodo(), [])

    function refreshTodo() {
        retrieveTodosForUsernameApi(username)
        .then(response => {
            //console.log(response)
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        deleteTodoApi(username, id)
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

    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }

    function addNewTodo()
    {
        navigate(`/todo/-1`)
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
                            <th>Update</th>
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
                                <td><button className="btn btn-success" 
                                    onClick={() => updateTodo(todo.id)}>Update</button></td>
                            </tr>
                               )
                           )
                       }
                
                   </tbody>
               </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}

export default ListTodosComponent