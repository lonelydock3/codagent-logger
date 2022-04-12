import React from 'react'
import 'bulma/css/bulma.min.css'
import { Button, Columns, Column, Container, Card, Section, Hero } from 'react-bulma-components'
import Header from '../Header'
import codagent from '../../images/codagent_logo.png'
import cmg from '../../images/CheckMate_Gaming.png'
import gb from '../../images/gb_logo.png'

const Home = () => {

    return (
        <React.Fragment>
            <Header />

            <div className="hero is-light">
                <div className="hero-body">
                    <div align="center">
                        <h2 className="title"><i>Record all of the matches you play.  Get started here.</i></h2>
                        <a className="button is-dark is-medium" href="/SignIn">Sign In</a>
                        <button className="button is-light"></button>
                        <a className="button is-danger is-medium" href="/SignUp">Sign Up</a>
                    </div>

                </div>
            </div>


            <div className="hero is-danger">
                <div className="section">
                    <div align="center">
                        <h1 className="title">Tournaments</h1>
                        <div className="columns">
                            <div className="column">
                                <div className="card is-light">
                                    <div className="card-content">
                                        <figure className="image is-128x128">
                                            <a href="https://www.checkmategaming.com/tournaments"><img src={cmg} alt="CheckMate Gaming Logo"></img></a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card is-light">
                                    <div className="card-content">
                                        <figure className="image is-128x128">
                                            <a href="https://esportsagent.gg/tournament"><img src={codagent} alt="CODAgent Logo"></img></a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card is-light">
                                    <div className="card-content">
                                        <figure className="image is-128x128">
                                            <a href="https://gamebattles.majorleaguegaming.com/tournaments"><img src={gb} alt="Gamebattles Logo"></img></a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )

}

export default Home;