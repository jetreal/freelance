import React from 'react'
import styles from './main.module.sass'


import HeaderText from './HeaderText/HeaderText';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section6 from './Section6/Section6';

import { BrowserRouter, Route } from 'react-router-dom';

const Main = (props) => {

    switch (props.btnIndex) {
        case 2: {
            return (
                <div className={styles.main}>
                
                    <HeaderText isLang={props.isLang}
                        texts={props.texts}
                        btnIndex={props.btnIndex} />

                    <Section2 pointsPosition={props.pointsPosition}
                        pointsPositionWithDelay={props.pointsPositionWithDelay}
                        changePointsPlace={props.changePointsPlace} />

                </div>
            )
        }
        case 3: {
            return (

                <div className={styles.main}>
                    <HeaderText isLang={props.isLang}
                        texts={props.texts}
                        btnIndex={props.btnIndex} />
                    <Section3 slidePosition={props.slidePosition}
                        sliderBgImg={props.sliderBgImg}
                        sliderContentForShow={props.sliderContentForShow}
                        leftSlide={props.leftSlide}
                        rightSlide={props.rightSlide}
                        sliderText={props.sliderText}
                        isBlockedSlider={props.isBlockedSlider}
                    />

                </div>
            )
        }
        case 4: {
            return (

                <div className={styles.main}>
                    <HeaderText isLang={props.isLang}
                        texts={props.texts}
                        btnIndex={props.btnIndex} />
                    <Section4 />
                </div>
            )
        }
        case 6: {
            return (


                <div className={styles.main}>
                    <HeaderText isLang={props.isLang}
                        texts={props.texts}
                        btnIndex={props.btnIndex} />
                    <Section6 reactText={props.reactText} />
                </div>
            )
        }
    }
    return (
        <div className={styles.main}>
            

            <HeaderText isLang={props.isLang}
                texts={props.texts}
                btnIndex={props.btnIndex} />


            {/* <Route path='/2'
                    render={ () => <Section2 pointsPosition = {props.pointsPosition}
                                             pointsPositionWithDelay = {props.pointsPositionWithDelay}
                                             changePointsPlace = {props.changePointsPlace}/>}/> */}

            {/* {props.btnIndex === 2 &&
                    <Section2 pointsPosition = {props.pointsPosition}
                                pointsPositionWithDelay = {props.pointsPositionWithDelay}
                                changePointsPlace = {props.changePointsPlace}/>
                }

                { props.btnIndex === 3 && 
                     <Section3 slidePosition={props.slidePosition}
                                sliderBgImg={props.sliderBgImg}
                                sliderContentForShow={props.sliderContentForShow}
                                leftSlide = {props.leftSlide}
                                rightSlide = {props.rightSlide}
                                sliderText = {props.sliderText}
                     />   
                } */}
            {/* {props.btnIndex === 4 &&
                    <Section4 />
                } */}
            {/* {props.btnIndex === 6 && 
                    <Section6 reactText={props.reactText}/>
                } */}
            {/* </ReactCSSTransitionGroup> */}

        </div>
    )
}
export default Main