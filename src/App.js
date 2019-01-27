import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="" scroll>
            <Link className="header-home" to="/">Esteban Castro</Link>
            <Navigation>
              {/* <Link to="/resume">Resume</Link> */}
              <a href="https://resume.io/r/ce3Y5JlPM" rel="noopener noreferrer" target="_blank">Resume</a>
              <a href="#aboutme">About Me</a>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Esteban Castro">
            <Navigation>
              <Link to="/">Landing Page</Link>
              <a href="https://resume.io/r/ce3Y5JlPM" rel="noopener noreferrer" target="_blank">Resume</a>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
