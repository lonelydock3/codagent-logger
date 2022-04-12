import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import Header from '../Header'
import firebaseConfig from '../../config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../Auth';

const SignIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const { login, password } = e.target.elements;

        try {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, login.value, password.value)
                .catch((err) => {
                    alert(err.message);
                });
        } catch (error) {
            alert(error);
        }
    };

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Navigate replace to="/Dashboard" />
    }

    return (
        <React.Fragment>
            <Header />
            <div className="hero is-light">
                <div className="hero-body">
                    <div align="center">
                        <h2 className="title">Sign in below.</h2>
                        <p className="subtitle">Don't have an account?  Sign up here.</p>
                        <a className="button is-danger is-normal" href="/SignUp">Sign Up</a>

                    </div>
                    <div className="section">
                        <div align="center">
                            <form id="login-form" onSubmit={handleSubmit}>
                                <label className="label">Email</label>
                                <input className="input" type="text" name="login" id="login" placeholder="Email" />
                                <label className="label">Password</label>
                                <input className="input" type="password" name="password" id="password" placeholder="Password" />
                                <button className="button is-normal is-dark">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}

export default SignIn;
