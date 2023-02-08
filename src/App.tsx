import React from 'react';
import Footer from './components/footer'
import Main from './components/main'
import './App.scss';
import Header from './components/header'

function App() {

  return (
    //  wrapper отчечает за базовую расстановку контента на странице 
    <div className="wrapper">
      {/* header */}
      <Header />
      {/* main */}
      <Main />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;