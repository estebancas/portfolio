import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
        switch (this.state.activeTab) {
            case 1:
                return (
                    <div className="projects-grid">
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto', marginBottom: '20px' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.luisllamas.es/wp-content/uploads/2017/08/node.js_logo.png) center / cover' }}>
                                Node microservices
                            </CardTitle>
                            <CardText>
                                Simple project of how use a gateway with microservices in node with hash.
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a className="projects-link" href="https://github.com/estebancas/proxy-microservices" rel="noopener noreferrer" target="_blank">GitHub</a>
                                </Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                )
            // case 2:
            //     return (
            //         <div><h1>this is MongoDb</h1></div>
            //     )

            default:
                return (
                    <div className="projects-grid">
                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto', marginBottom: '20px' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://udemy-images.udemy.com/course/750x422/1075334_8b5f_4.jpg) center / cover' }}>
                                Angular Azure Storage
                            </CardTitle>
                            <CardText>
                                A sample of an angular service that consumes a API to store files in azure blob storage that returns and observable with progress percentage
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a className="projects-link" href="https://github.com/estebancas/angular-azure-storage" rel="noopener noreferrer" target="_blank">GitHub</a>
                                </Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{ minWidth: '450', margin: 'auto', marginBottom: '20px' }}>
                            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://udemy-images.udemy.com/course/750x422/1075334_8b5f_4.jpg) center / cover' }}>
                                My tunes
                            </CardTitle>
                            <CardText>
                                A project that consumes an API with music library.
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a className="projects-link" href="https://github.com/estebancas/MyTunes" rel="noopener noreferrer" target="_blank">GitHub</a>
                                </Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    {/* <Tab>React</Tab> */}
                    <Tab>Angular</Tab>
                    <Tab>Node</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;
