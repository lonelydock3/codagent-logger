import React, { useContext, useState, useEffect } from 'react'
import Header from '../Header'
import map from '../../images/map1.png'
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, QuerySnapshot } from "firebase/firestore";
import { AuthContext } from '../Auth';
import { Navigate } from 'react-router-dom';

const Image = () => {

    const auth = getAuth()

    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Navigate replace to="/" />;
    }

    const db = getFirestore();
    const maps = collection(db, "maps");

    return (
        <React.Fragment>
            <Header />
            <div className="hero is-light">
                <div className="hero-body">
                    <div align="center">
                        <a className="button is-dark is-medium" href="/Dashboard">Back to Dashboard</a>
                        <h2 className="title"><i>MapName, ModeName, Score</i></h2>
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
                            </div>
                            <div className="columns">
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <div><b>Score:</b> 250 - 150</div>
                                            <div><b>Map:</b> Tuscan</div>
                                            <div><b>Gamemode:</b> Hardpoint</div>
                                            <div><b>Notes:</b> maybe</div>
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

export default Image;

