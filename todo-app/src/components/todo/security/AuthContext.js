import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executesJwtAuthenticationService } from "../api/AuthenticationApiService";
//import { executesBasicAuthenticationService, executesJwtAuthenticationService } from "../api/AuthenticationApiService";


//1. Create a context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2. Share the created context with other components
export default function AuthProvider({children}) {

    //3. Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    
    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)
    

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

    async function login(username, password)
    {
        //const baToken = 'Basic ' + window.btoa(username + ":" + password)
        
        try {
            const response = await executesJwtAuthenticationService(username, password)

            //const response = await executesBasicAuthenticationService(baToken)
            // .then(response => console.log(response))
            // .catch(error => console.log(error))
    
    
            if(response.status === 200)
            {
                const jwtToken = 'Bearer ' + response.data.token
                console.token(jwtToken)
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true
            } else {
               logout()
               return false
            }
        } catch(error) {
            setAuthenticated(false)
                setUsername(null)
                return false
        }

    }

    function logout()
    {
        setAuthenticated(false)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, setAuthenticated, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>

    )
}