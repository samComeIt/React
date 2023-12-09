import { useEffect, useState } from "react";
import { retrieveTodosForUsername } from "./api/TodoApiService";

function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const [todos, setTodos] = useState([])
    // const todos = [
        // {id: 1, description: 'learn Spring', done: false, targetDate:targetDate},
        // {id: 2, description: 'learn Full Stack Dev', done:false, targetDate:targetDate},
        // {id: 3, description: 'learn AWS', done: false, targetDate:targetDate},
    // ]

    useEffect (() => refreshTodo(), [])

    function refreshTodo() {
        retrieveTodosForUsername('in28minutes')
        .then(response => {
            // console.log(response)
            setTodos(response.data)
        })
        .catch(error => console.log(error))
    }


    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
               <table className="table">
                   <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                            <td>is Done?</td>
                            <td>Target Date</td>
                        </tr>
                   </thead>
                   <tbody>
                       {
                           todos.map(
                               todo => (
                                <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done}</td>
                                <td>{todo.targetDate.toString()}</td>
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