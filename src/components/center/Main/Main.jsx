import React from 'react'
import styles from './main.module.sass'


import HeaderText from './HeaderText/HeaderText';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section6 from './Section6/Section6';
import { BrowserRouter, Route } from 'react-router-dom';
import Section1 from './Section1/Section1';
import Section5 from './Section5/Section5';

const Main = (props) => {
    switch (props.btnIndex) {
        case 1: {
            return (
                
                <div className={styles.main}>
                    
                    <HeaderText isLang={props.isLang}
                        texts={props.texts}
                        btnIndex={props.btnIndex} />
                        
                    <Section1 showSection1Text={props.showSection1Text}
                              isShowedSection1Text={props.isShowedSection1Text}
                              textsForFirstSection={props.textsForFirstSection}
                              isLang={props.isLang}/>

                </div>
              
            )
        }
        case 2: {
            return (
                <div className={styles.main}>
                
                    <HeaderText isLang={props.isLang}
                        texts={props.texts}
                        btnIndex={props.btnIndex} />

                    <Section2 pointsPosition={props.pointsPosition}
                        pointsPositionWithDelay={props.pointsPositionWithDelay}
                        changePointsPlace={props.changePointsPlace}
                        showMap={props.showMap}
                        tvIndex={props.tvIndex} />

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
                        isLang={props.isLang}
                        section3DownText={props.section3DownText}
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
                    <Section4 isShowedSection4Text={props.isShowedSection4Text}
                            showSection4Text={props.showSection4Text}
                            section4Texts={props.section4Texts}
                            isLang={props.isLang} />
                </div>
            )
        }
        case 5: {
            return (
                <div className={styles.main}>
                    <HeaderText isLang={props.isLang}
                        texts={props.texts}
                        btnIndex={props.btnIndex} />
                    <Section5 section5Texts={props.section5Texts}
                              isSection5TextsShowed={props.isSection5TextsShowed}
                              section5TextsIndex={props.section5TextsIndex}
                              showSection5Text={props.showSection5Text}
                              changeSection5Text={props.changeSection5Text}
                              isLang={props.isLang}
                              isStartedSection5Text={props.isStartedSection5Text}
                              startShowSection5Text={props.startShowSection5Text}/>
                    
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

        </div>
    )
    
}
export default Main