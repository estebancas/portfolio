import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent, Card } from 'react-mdl'
import logo from '../assets/imgs/myAvatar.png'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Card shadow={1} style={{ width: '80%', margin: 'auto', maxWidth: '900px' }}>
                    <Grid className="contact-grid">
                        <Cell col={6} phone={12}>
                            <h2>Esteban Castro</h2>
                            <img
                                src={logo}
                                alt="avatar"
                                style={{ height: '250px' }}
                            />
                            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                                Information system engineer with 2+ year experience. Prominent javaScript knowledge with ES6 standard, seeking for the understandable and clean code culture. Huge capacity of collaboration and teamwork, highly committed to the organization, orientation in culture and organizational values.
                        </p>


                        </Cell>
                        <Cell col={6} phone={12}>
                            <h2>Contact Me</h2>
                            <hr />

                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent className="contact-item" style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                            <i className="fas fa-phone-square" aria-hidden="true" />
                                            (506) 89093178
                                    </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent className="contact-item" style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                            <i className="fas fa-envelope-square" aria-hidden="true" />
                                            estcascor94@gmail.com
                                    </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent className="contact-item" style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                            <i className="fab fa-skype" aria-hidden="true" />
                                            estcascor94@hotmail.com
                                    </ListItemContent>
                                    </ListItem>
                                </List>
                            </div>

                        </Cell>
                    </Grid>
                </Card>
            </div>
        )
    }
}

export default Contact;
