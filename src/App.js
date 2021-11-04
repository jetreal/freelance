import React from 'react';
import './App.sass';
import './index.css';
import { YMaps } from 'react-yandex-maps';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Footer from './components/Footer/Footer';
import RightSidebarContainer from './components/rightSidebar/RightSidebarContainer';
import CenterContainer from './components/center/CenterContainer';
import HeaderContainer from './components/header/HeaderContainer';

function App() {
  return (
    <YMaps>
      
        <div className="video">
          <video className="video__media" src='video/7.mp4' muted autoPlay loop></video>
        </div>
      <div className="App" >
        
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
    </YMaps>
  );
}

export default App;
