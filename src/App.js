import React from 'react'

import Header from './components/Header'
import Main from './pages/main'

import './styles/css/index.css'

export default () => {
  return (
    <div className="App"> 
      <Header />
      <Main />
    </div>
  );
}
