import React from 'react'
import styles from './center.module.sass'
import Main from './Main/Main';
import Atributes from './Atributes/Atributes';
import Colomn from './Colomn/Colomn';
import ColumnShadow from './Colomn/ColumnShadow/ColumnShadow';
import ColumnShadow2 from './Colomn/ColumnShadow2/ColumnShadow2';




const Center = (props) => {
    let x = props.buttons.activeButtonNum
    return (
        <div className={x !== 1 ? styles.center : styles.center2}
            style={{ backgroundImage: `url(images/${x}.webp)` }} >
            
         {/* <div className={styles.topMidlware}>

         </div> */}

         {props.buttons.activeButtonNum === 6 ?  
         <div>
         <div className={styles.jsDiv}>
            <img className={styles.js} src='images/js3.webp' alt=''/>
         </div>
         <div className={styles.jetrealDiv}>
            <img className={styles.jetrealLogo} src='images/jetrealLogo.webp' alt=""/>
         </div> 
         </div> : null }
         
        
         <ColumnShadow2 />
         <ColumnShadow />
         <Colomn className={styles.columnLeft}/>
         {/* <Colomn className={styles.columnRight}/> */}

         <Main btnIndex ={props.buttons.activeButtonNum}
               tvOn={props.buttons.tvOn}
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
               showSection1Text={props.showSection1Text}
               showSection4Text={props.showSection4Text}
               isShowedSection1Text={props.buttons.isShowedSection1Text}
               isShowedSection4Text={props.buttons.isShowedSection4Text}
               section5Texts={props.buttons.section5Texts}
               isSection5TextsShowed={props.buttons.isSection5TextsShowed}
               section5TextsIndex={props.buttons.section5TextsIndex}
               startShowSection5Text={props.startShowSection5Text}
               isStartedSection5Text={props.buttons.isStartedSection5Text}
               showSection5Text={props.showSection5Text}
               changeSection5Text={props.changeSection5Text}
               showMap={props.showMap}
               offMap={props.offMap}
               textsForFirstSection={props.buttons.textsForFirstSection}
               section4Texts={props.buttons.section4Texts}
               section3DownText={props.buttons.section3DownText}
               
               />
               
         <Atributes changeTV={props.changeTV}
                    tvIndex={props.buttons.tvIndex}
                    tvOn={props.buttons.tvOn}
                    isShowMap={props.buttons.isShowMap}/>

        </div>
    )
}

export default Center