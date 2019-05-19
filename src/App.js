import React from 'react';
import './App.sass';
import Header from './components/header/Header';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Footer from './components/Footer/Footer';
import RightSidebarContainer from './components/rightSidebar/RightSidebarContainer';
import CenterContainer from './components/center/CenterContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContentAndSides">
        <LeftSidebar />
        <CenterContainer />
        <RightSidebarContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
