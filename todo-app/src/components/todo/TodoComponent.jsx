import { useEffect } from "react"
import { useParams } from "react-router"
import { retrieveTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"

export default function TodoComponent() {
    const {id} = useParams()

    const authContext = useAuth()
    const username = authContext.username

    useEffect(
        () => retrieveTodos(),
        [id]
    )

    function retrieveTodos() {
        retrieveTodoApi(username, id)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>

            </div>
        </div>
    )
}