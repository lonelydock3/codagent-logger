import React, { useContext } from 'react'
import Header from '../Header'
import map from '../../images/map1.png'
import { getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth';

const Dashboard = () => {

    const auth = getAuth()

    const SignOut = () => {
        auth.signOut();
    }

    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return <Navigate replace to="/" />;
    }

    return (
        <React.Fragment>
            <Header />
            <div className="hero is-light">
                <div className="hero-body">
                    <div align="center">
                        <h2 className="title"><i>Hey there.</i></h2>
                        <button className="button is-danger is-inverted is-medium" onClick={SignOut}>Sign Out</button>
                        <a className="button is-danger is-medium" href="/Upload">Upload</a>
                    </div>

                    <div className="section is-light">
                        <div align="center">
                            <div className="columns">
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <figure className="image">
                                                <img src={map} alt="score"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <figure className="image">
                                                <img src={map} alt="score"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <figure className="image">
                                                <img src={map} alt="score"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <figure className="image">
                                                <img src={map} alt="score"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <figure className="image">
                                                <img src={map} alt="score"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <figure className="image">
                                                <img src={map} alt="score"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <figure className="image">
                                                <img src={map} alt="score"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <figure className="image">
                                                <img src={map} alt="score"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <figure className="image">
                                                <img src={map} alt="score"></img>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}

export default Dashboard;