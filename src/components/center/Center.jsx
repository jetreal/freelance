import React from 'react'
import styles from './center.module.sass'
import Main from './Main/Main';
import Atributes from './Atributes/Atributes';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




const Center = (props) => {
    let x = props.buttons.activeButtonNum
    return (
        <div className={x !== 1 ? styles.center : styles.center2}
            style={{ backgroundImage: `url(/images/${x}.jpg)` }} >
            
         {/* <div className={styles.topMidlware}>

         </div> */}
         <Main btnIndex ={props.buttons.activeButtonNum}
               tvIndex={props.buttons.tvIndex}
               texts={props.buttons.texts} 
               isLang={props.buttons.isLang}
               pointsPosition={props.buttons.pointsPosition}
               pointsPositionWithDelay={props.buttons.pointsPositionWithDelay}
               changePointsPlace={props.changePointsPlace}
               changePointsPlaceDelay={props.changePointsPlaceDelay}
               leftSlide={props.leftSlide}
               rightSlide={props.rightSlide}
               slidePosition={props.buttons.slidePosition}
               sliderBgImg={props.buttons.sliderBgImg}
               sliderText={props.buttons.sliderText}
               sliderContentForShow={props.buttons.sliderContentForShow}
               reactText={props.buttons.reactText}
               isBlockedSlider={props.buttons.isBlockedSlider}
               
               />
               
         <Atributes changeTV={props.changeTV}
                    tvIndex={props.buttons.tvIndex}/>

        </div>
    )
}

export default Center