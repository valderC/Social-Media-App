import React from 'react'; 
import './login.css'; 

export default function login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">ValderramaSocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on ValderramaSocial.
                    </span>
                </div>
                <div className="loginRight">    
                    <div className="loginBox">
                        <input placeholder="Email" type="email" className="loginInput" />
                        <input placeholder="Password" type="password" className="loginInput" />
                        <button className="loginButton">Log in</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegister">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
