import React, { useState } from 'react'
import Header from '../Header'
import firebaseConfig from '../../config';
import { Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {

    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { login, password } = e.target.elements;

        try {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, login.value, password.value)
                .catch((err) => {
                    alert(err.message);
                });
            setCurrentUser(true);

        } catch (error) {
            alert(error);
        }
    };

    if (currentUser) {
        return <Navigate replace to="/Dashboard" />
    }

    return (
        <React.Fragment>
            <Header />
            <div className="hero is-light">
                <div className="hero-body">
                    <div align="center">
                        <h2 className="title">Sign up below.</h2>
                        <p className="subtitle">Already have an account?  Sign in here.</p>
                        <a className="button is-dark is-normal" href="/SignIn">Sign In</a>

                    </div>
                    <div className="section">
                        <div align="center">
                            <form id="login-form" onSubmit={handleSubmit}>
                                <label className="label">Your Email</label>
                                <input className="input" type="text" name="login" id="login" placeholder="Email" />
                                <label className="label">Create Password</label>
                                <input className="input" type="password" name="password" id="password" placeholder="Password" />
                                <button className="button is-normal is-danger">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}


export default SignUp;
