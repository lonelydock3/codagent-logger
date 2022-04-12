import React from 'react'
import 'bulma/css/bulma.min.css'
import { Section, Hero } from 'react-bulma-components'
import logo from '../images/codagent_logo.png'

const Header = () => {

    return (
        <React.Fragment>
            <Section backgroundColor='dark'>
                <div align="center">
                    <a href="/"><img src={logo} height="20%" width="20%" alt="Main Logo"></img></a>
                </div>
            </Section>
        </React.Fragment>
    )

}

export default Header;
