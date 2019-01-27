import React, { Component } from 'react'
import { Grid, Cell, Footer, FooterSection, FooterLinkList } from 'react-mdl'
import logo from '../assets/imgs/myAvatar.png'
import section from '../assets/imgs/section1.jpg'

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={logo}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <p>
                                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB
                            </p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://linkedin.com/in/estebancas94" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/estebancas" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                <section className="section1" style={{ background: 'url(' + section + ') no-repeat' }}>
                    <div className="overlay">
                        <section className="aboutme" id="aboutme">
                            <div>
                                <h2 style={{ textAlign: 'center' }}>
                                    About Me
                                </h2>
                                <hr />
                                <p>
                                    Information system engineer with 2+ year experience as full stack developer. Prominent javaScript knowledge with ES6/7 standard, knowlegde in JS frontend frameworks such as Angular 2+, react, jQuery. Also experience with BackEnd applications, RESTful APIs using NodeJS, Express or sails.
                                    Also:
                                </p>
                                <ul>
                                    <li>
                                        <strong>Common libraries: </strong>
                                        <br />
                                        Bluebird, body-parser, hash, Mongoose, lodash
                                    </li>
                                    <li>
                                        <strong>Common UI libraries: </strong>
                                        <br />
                                        Bootstrap, ngx-Bootstrap, material-ui, angular-material, materialize, react-mdl
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </section>
                <Footer size="mini">
                    <FooterSection type="left" logo="Esteban Castro, 2019">

                    </FooterSection>
                </Footer>
            </div>
        )
    }
}

export default Landing;
