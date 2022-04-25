import React from 'react'
import submitLoginForm from '../services/submitLoginForm'

const Login = (props) => {
    let [loginCredentials, setLoginCredentials] = React.useState({ user: "", password: "" })


    const handleChangeInForm = (event) => {
        setLoginCredentials(prevLoginCredentials => {
            return { ...prevLoginCredentials, [event.target.name]: event.target.value }
        })
    }


    const handleLoginFormSubmit = (e, loginCredentials) => {
        let submitLogin = submitLoginForm(e, loginCredentials);
        submitLogin.then(res => res.access_token ? props.handleChangeInJwt(res.access_token) : alert("Credenciales incorrectas inténtalo de nuevo"));
    }
    return (
        <form onSubmit={(e) => handleLoginFormSubmit(e, loginCredentials)}>
            <label htmlFor='user'>User:</label>
            <input type="text" name="user" id='user' value={loginCredentials.user} onChange={handleChangeInForm} />
            <label htmlFor='password'>Password:</label>
            <input type="password" name="password" id='password' value={loginCredentials.password} onChange={handleChangeInForm} />
            <button type="submit">Log In</button>
        </form>
    )
}

export default Login;