import React from 'react';
import './App.sass';
import Header from './components/header/Header';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Center from './components/center/Center';
import RightSidebar from './components/rightSidebar/RightSidebar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContentAndSides">
        <LeftSidebar />
        <Center />
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
