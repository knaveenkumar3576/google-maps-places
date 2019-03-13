import React, { Component } from 'react';
import Wrap from '../src/HOC/Wrap';
import Layout from './HOC/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrap>
        <Layout> </Layout>
      </Wrap>
    );
  }
}

export default App;
