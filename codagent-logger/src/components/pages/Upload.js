import React, { useContext } from 'react'
import Header from '../Header'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { AuthContext } from '../Auth';
import { getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

const Upload = () => {

    const auth = getAuth()

    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Navigate replace to="/" />;
    }

    const db = getFirestore();
    const maps = collection(db, "maps");

    async function addNewMap(image, mapName, mode, notes, score1, score2, currentUser) {
        const newMap = await addDoc(maps, {
            image: image,
            mapName: mapName,
            mode: mode,
            notes: notes,
            score1: score1,
            score2: score2,
            userEmail: currentUser.email,
            isClicked: false
        });
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const { image, score1, score2, map, mode, notes } = e.target.elements;
        try {
            addNewMap(image.value, map.value, mode.value, notes.value, score1.value, score2.value, currentUser).catch((err) => {
                alert(err.message);
            });
            alert("Map added!");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <React.Fragment>
            <Header />
            <div className="hero is-light">
                <div className="hero-body">
                    <div align="center">
                        <h2 className="title">Fill out the following information to upload your image.</h2>
                    </div>
                    <div className="section">
                        <div align="center">
                            <form id="upload-form" onSubmit={handleUpload}>
                                <label className="label">Image Link (use links ending in ".jpg" or ".png")</label>
                                <input className="input" type="text" name="Image" id="image" placeholder="Image" required />
                                <label className="label">Team 1 Score</label>
                                <input className="input" type="number" name="Team 1 Score" id="score1" placeholder="Team 1 Score" required />
                                <label className="label">Team 2 Score</label>
                                <input className="input" type="number" name="Team 2 Score" id="score2" placeholder="Team 2 Score" required />
                                <label className="label">Map Played</label>
                                <input className="input" type="text" name="Map" id="map" placeholder="Map" required />
                                <label className="label">Gamemode Played</label>
                                <input className="input" type="text" name="Mode" id="mode" placeholder="Gamemode" required />
                                <label className="label">Other Notes</label>
                                <input className="input" type="text" name="Notes" id="notes" placeholder="Add Other Notes (Optional)" />
                                <button className="button is-normal is-danger">Upload Map</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )

}

export default Upload;
