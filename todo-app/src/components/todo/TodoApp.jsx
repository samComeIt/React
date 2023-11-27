import { useState } from 'react';
import './TodoApp.css';

export default function TodoApp()
{
    return (
        <div className="TodoApp">
            Todo Managament Application
            <LoginComponent/>
            {/* <WelcomeComponent/> */}
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('sammy')

    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

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
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
        console.log(username);
        console.log(password);
    }

    function SuccessMessageComponent() {
        if(showSuccessMessage)
        {
            return  <div className="successMessage">Authenticated SUcceddfully</div>
        }
    
        return null
    }

    function ErrorMessageComponent() {
        if(showErrorMessage)
        {
            return  <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
        }
    
        return null
    }
    

    return (
        <div className="Login">
            <SuccessMessageComponent />
            <ErrorMessageComponent />
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
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}