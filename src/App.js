import React from 'react';
import './App.sass';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Footer from './components/Footer/Footer';
import RightSidebarContainer from './components/rightSidebar/RightSidebarContainer';
import CenterContainer from './components/center/CenterContainer';
import HeaderContainer from './components/header/HeaderContainer';



function App() {
  return (
    <div className="App">
    <ReactCSSTransitionGroup transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
      <HeaderContainer />
      <div className="mainContentAndSides">
        <LeftSidebar />
        <CenterContainer />
        <RightSidebarContainer />
      </div>
      <Footer />
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default App;
