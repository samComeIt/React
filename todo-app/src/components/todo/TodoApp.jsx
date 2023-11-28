import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import './TodoApp.css';

export default function TodoApp()
{
    return (
        <div className="TodoApp">
            <BrowserRouter>
            <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent/>} />
                    <Route path='/login' element={<LoginComponent/>} />
                    <Route path='/welcome/:username' element={<WelcomeComponent/>} />
                    <Route path='/todos' element={<ListTodosComponent/>} />
                    <Route path='/logout' element={<LogoutComponent/>} />

                
                    <Route path='*' element={<ErrorComponent/>} />
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
