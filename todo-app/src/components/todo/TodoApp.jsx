import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'
import './TodoApp.css';

export default function TodoApp()
{
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('sammy')

    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();


    function handleUsernameChange(event) {
        // console.log(event);
        // console.log(event.target.value);
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function hanldeSubmit()
    {
        if(username==='sammy' && password==='dummy')
        {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
        console.log(username);
        console.log(password);
    }

    // function SuccessMessageComponent() {
    //     if(showSuccessMessage)
    //     {
    //         return  <div className="successMessage">Authenticated SUcceddfully</div>
    //     }
    
    //     return null
    // }
    // function ErrorMessageComponent() {
    //     if(showErrorMessage)
    //     {
    //         return  <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
    //     }
    
    //     return null
    // }
    

    return (
        <div className="Login">
            <h1>Time to Login</h1>
            {showSuccessMessage && <div className="successMessage">Authenticated SUcceddfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            {/* <SuccessMessageComponent />
            <ErrorMessageComponent /> */}
            <div className="LoginForm">
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="Login" onClick={hanldeSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    const {username} = useParams()

    console.log(username);

    return (
        <div className="WelcomeComponent">
        <h1>Welcome {username}!</h1>
        <div>
            Welcome Component
        </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}