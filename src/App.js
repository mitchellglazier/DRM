import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation } from 'react-mdl';
import './App.css';
import { Link } from 'react-router-dom';
import Routes from './components/routes';
import Footers from './components/footers';

class App extends Component {
  render() {
    return (
      <div>
          <Layout fixedHeader>
              <Header title={<span><span style={{ color: '#ddd' }}></span><strong>Divorce Relationship Manager</strong></span>}>
                  <Navigation>
                    <Link to="/expenses">Expenses</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/documents">Documents</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/profile">Profile</Link>
                  </Navigation>
              </Header>
              <Drawer title="DRM">
                  <Navigation>
                    <Link to="/expenses">Expenses</Link>
                    <Link to="/messages">Messages</Link>
                    <Link to="/documents">Documents</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/profile">Profile</Link>
                  </Navigation>
              </Drawer>
              <Routes />
              <Footers />
          </Layout>
      </div>
    );
  }
}

export default App;
