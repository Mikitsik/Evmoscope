import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Layout from './components/Layout';
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Header />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
