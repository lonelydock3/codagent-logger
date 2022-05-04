import React, { useContext, useState, useEffect } from 'react'
import Header from '../Header'
import map from '../../images/map1.png'
import { getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Auth';
import { getFirestore, collection, query, QuerySnapshot, getDocs, where, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { async } from '@firebase/util';

const Dashboard = () => {

    const [userMaps, setUserMaps] = useState([]);
    const [mapIds, setMapIds] = useState([]);
    const auth = getAuth()

    const SignOut = () => {
        auth.signOut();
    }

    const db = getFirestore();
    const maps = collection(db, "maps");

    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Navigate replace to="/" />;
    }


    function getMapsForUser(currentUser) {
        const mapsForUser = query(
            collection(db, "maps"),
            where("userEmail", "==", currentUser.email)
        );

        onSnapshot(mapsForUser, (querySnapshot) => {
            const allMaps = [];
            const mapIds = []
            querySnapshot.forEach((m) => {
                allMaps.push(m.data())
                mapIds.push(m.id)
            });
            setUserMaps(allMaps);
            setMapIds(mapIds);
        });

    }

    getMapsForUser(currentUser);

    function atLeastThree(userMaps) {
        if (userMaps.length >= 3) {
            return true;
        } else {
            return false;
        }
    }

    let three = atLeastThree(userMaps);
    let size = userMaps.length;
    // const doc1 = doc(db, maps.path, mapIds[0]);

    function clickedOn(docName, db, maps) {
        const updateData = {
            isClicked: true
        };

        // const doc1 = doc(maps, docName);
        // console.log(mapIds[0]);
        // console.log(docName);
        // console.log(maps.path + '/' + docName)
        const doc1 = doc(db, maps.path + '/' + docName);


        updateDoc(doc1, updateData);
    }

    // clickedOn(mapIds[0], db);

    // let test = atLeastThree(userMaps);


    // async function getMapsForUser(currentUser) {
    //     const mapsForUser = query(
    //         collection(db, "maps"),
    //         where("userEmail", "==", currentUser.email)
    //     );

    //     const querySnapshot = await getDocs(mapsForUser);
    //     let allMaps = [];
    //     querySnapshot.forEach((x) => {
    //         allMaps.push(x.data());
    //     });

    //     return allMaps;
    // }


    // // need a variable to check if there are 3 or more maps in the db for a user
    // async function atLeastThree(currentUser) {
    //     let count = 0;
    //     const userMaps = await getMapsForUser(currentUser);

    //     // userMaps.then((mapArray) => {
    //     //     count = mapArray.length;
    //     // })
    //     count = userMaps.length;

    //     return count;

    // }

    // const test = getMapsForUser(currentUser);

    // console.log(test);

    // test.then((hi) => { console.log(hi) });

    // let test2 = atLeastThree(currentUser).then((val) => { console.log(val); });
    // let test2 = atLeastThree(currentUser).then((val) => { return val }).finally((val) => { return val });
    // let test = 1;
    // (async () => {
    //     test = await atLeastThree(currentUser);
    // })()

    // console.log(test);

    return (
        <React.Fragment>
            <Header />
            {/* {userMaps.map((m) => <img src={m.image}></img>)} */}
            <div className="hero is-light">
                <div className="hero-body">
                    <div align="center">
                        <h2 className="title"><i>Hey {currentUser.email.substring(0, currentUser.email.indexOf("@"))}.</i></h2>
                        <button className="button is-danger is-inverted is-medium" onClick={SignOut}>Sign Out</button>
                        <a className="button is-danger is-medium" href="/Upload">Upload</a>
                    </div>

                    <div className="section is-light">
                        <div align="center">
                            {size > 0 ? (userMaps.map((m, i) =>
                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <figure className="image">
                                                <img src={m.image} alt={mapIds[i]}></img>
                                                {/* onClick={clickedOn("KiH0ciU5ltHVKG66oafW", db, maps)} */}
                                            </figure>
                                            <div className='is-size-2'><b>Score:</b> {m.score1} - {m.score2}</div>
                                            <div className='is-size-2'><b>Map:</b> {m.mapName} </div>
                                            <div className='is-size-2'><b>Gamemode:</b> {m.mode} </div>
                                            <div className='is-size-4'><b>Notes:</b> {m.notes} </div>
                                        </div>
                                    </div>
                                </div>
                            )) :

                                <div className="column">
                                    <div className="card is-light">
                                        <div className="card-content">
                                            <div className="is-size-3">You do not have any posts yet.</div>
                                        </div>
                                    </div>
                                </div>

                            }
                            {/* <div className="columns">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}

export default Dashboard;