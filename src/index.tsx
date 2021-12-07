import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { Layout } from './components/layout'
import { Header } from './components/header'
import { Main } from './components/main'

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Header />
      <Main />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);
