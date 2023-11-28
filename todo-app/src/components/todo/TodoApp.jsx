import { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css';

export default function TodoApp()
{
    return (
        <div className="TodoApp">
            <HeaderComponent />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>} />
                    <Route path='/login' element={<LoginComponent/>} />
                    <Route path='/welcome/:username' element={<WelcomeComponent/>} />
                    <Route path='/todos' element={<ListTodosComponent/>} />
                    <Route path='/logout' element={<LogoutComponent/>} />

                
                    <Route path='*' element={<ErrorComponent/>} />
                </Routes>
            </BrowserRouter>
            <FooterComponent />
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
            Your todos. <Link to="/todos">Go here</Link>
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

function HeaderComponent() {
    return (
        <div className="header">
            Header <hr />
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            Footer <hr />
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our App. Come back soon!
            </div>
        </div>
    )
}

function ListTodosComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const todos = [
        {id: 1, description: 'learn Spring', done: false, targetDate:targetDate},
        {id: 2, description: 'learn Full Stack Dev', done:false, targetDate:targetDate},
        {id: 3, description: 'learn AWS', done: false, targetDate:targetDate},
    ]


    return (
        <div className="ListTodosComponent">
            <h1>Things you want to do!</h1>
            <div>
               <table>
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
                                <td>{todo.targetDate.toDateString()}</td>
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