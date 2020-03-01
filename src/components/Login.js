import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Welcome to Stock Management</h1>
                <form>
                    <h2>Login to continue</h2>
                    <input className="login" type="email" placeholder="Email"></input>
                    <input className="login" type="password" placeholder="Password"></input>
                    <br />
                    <br />
                    <button className="loginbtn">Login</button>
                    <p>Or</p>
                    <button onClick>Login using Facebook</button>

                </form>
            </div>
        )
    }
}

export default Login 
