import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <>
  <Nav />
  <MainContent />
  <Footer />
  </>,
  document.getElementById('root')
)