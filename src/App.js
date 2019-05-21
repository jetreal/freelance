import React from 'react';
import './App.sass';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Footer from './components/Footer/Footer';
import RightSidebarContainer from './components/rightSidebar/RightSidebarContainer';
import CenterContainer from './components/center/CenterContainer';
import HeaderContainer from './components/header/HeaderContainer';


function App() {
  return (
    <div className="App">
    
      <HeaderContainer />
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
