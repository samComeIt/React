import { createContext, useContext, useState } from "react";
import { executesBasicAuthenticationService } from "../api/HelloWorldApiService";

//1. Create a context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2. Share the created context with other components
export default function AuthProvider({children}) {

    //3. Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    
    const [username, setUsername] = useState(null)
    

    // function login(username, password)
    // {
    //     if(username==='in28minutes' && password==='dummy')
    //     {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    function login(username, password)
    {
        const baToken = 'Basic ' + window.btoa(username + ":" + password)
        executesBasicAuthenticationService(baToken)
        .then(response => console.log(response))
        .catch(error => console.log(error))

        setAuthenticated(false)
    }

    function logout()
    {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, setAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>

    )
}