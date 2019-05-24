import React from 'react'
import styles from './main.module.sass'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Wave, Random } from 'react-animated-text';

import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { FirstPointDiv,
         SecondPointDiv,
         ThirdPointDiv,
         FourSectionDiv,
         FourSectionInnerDiv,
         ContactTextDiv,
         ReviewsDiv,
         ReviewsItemDivLeft,
         ReviewsItemDivText,
         ReviewsItemP,
         SixSectionDiv} from './StyledComponents';
import Slider from './Slider/Slider';


const Main = (props) => {

    console.log(props)
    return (
        <div className={styles.main}>
            <ReactCSSTransitionGroup transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>

                { props.btnIndex === 3 && 
                    
                    <div>
                        <ReviewsDiv>
                             
                            <Slider slidePosition={props.slidePosition}
                                    sliderBgImg={props.sliderBgImg}
                                    sliderContentForShow={props.sliderContentForShow}
                                    />   
                            <button className={styles.buttonLeft} onClick={props.slidePosition === 'center' && props.leftSlide}></button>
                            <button className={styles.buttonRight} onClick={props.slidePosition === 'center' && props.rightSlide}></button>
                            <ReviewsItemDivText>
                                <ReviewsItemP slidePosition={props.slidePosition}>
                                  {props.sliderText}
                                </ReviewsItemP>
                            </ReviewsItemDivText>
                        </ReviewsDiv>

                    </div>
                }
                

                {props.btnIndex === 2 &&
                    <div className={styles.bindPoint}>
                        <div className={styles.myPhoto}>
                            <img src={'/images/serjMini.jpg'}/>
                        </div>
                        <FirstPointDiv pointsPosition={props.pointsPosition}>
                            <img className={styles.skypeImg} src={'/images/skype2.png'} />
                            {props.pointsPositionWithDelay === 2 &&

                                <ContactTextDiv>
                                    <Wave text="sergey jetreal7"
                                         effect="jump" 
                                         effectChange={8.2} 
                                         iterations={1}
                                         speed={100} 
                                         effectDuration={.2}/>
                                </ContactTextDiv>
                            }
                        </FirstPointDiv>
                        <SecondPointDiv pointsPosition={props.pointsPosition}>
                            <img className={styles.mailImg} src={'../../../images/mail2.png'} />
                            {props.pointsPositionWithDelay === 0 &&
                                <ContactTextDiv >
                                    <Wave 
                                    text="Ssergey.petruninN@gmail.com"
                                     effect="jump"
                                      effectChange={2.2}
                                       effectDuration={.2}
                                        iterations={1} 
                                        speed={100}/>
                                </ContactTextDiv>
                            }
                        </SecondPointDiv>
                        <ThirdPointDiv pointsPosition={props.pointsPosition}>
                            <img className={styles.phoneImg} src={'../../../images/phone2.png'} />
                            {props.pointsPositionWithDelay === 1 &&
                                <ContactTextDiv>
                                    <Random 
                                    text="+ 7 952 964 57 21"
                                     effect="jump"
                                      effectChange={2.2} 
                                      effectDuration={.1}
                                       iterations={1} 
                                       speed={100}/>
                                </ContactTextDiv>}
                        </ThirdPointDiv>
                        <div className={styles.centerPoint}
                            onClick={props.pointsPositionWithDelay === props.pointsPosition ? props.changePointsPlace : null}>
                            <img className={styles.hour24} src={'../../../images/hours.png'} />
                        </div>
                    </div>
                }

                <div className={styles.headerText}>
                    <p>
                        {props.isLang === false ?
                            props.texts[props.btnIndex - 1].textRu :
                            props.texts[props.btnIndex - 1].textEn}

                    </p>
                </div>

                

                {props.btnIndex === 4 &&
                    <FourSectionDiv>
                        <FourSectionInnerDiv>
                            <p>Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Quae minus cupiditate
                                  sed sunt accusamus consectetur laborum nesciunt?
                                   In tempora dolore tenetur rem quis facere dignissimos
                                       minus sapiente, quae consequatur hic!</p>
                        </FourSectionInnerDiv>
                        <MediaQuery query="(min-width: 1081px)">
                            <FourSectionInnerDiv>

                            </FourSectionInnerDiv>
                        </MediaQuery>

                        <FourSectionInnerDiv>
                            <p>Lorem ipsum dolor sit amet consectetur
                                     adipisicing elit. Quae minus cupiditate
                                      sed sunt accusamus consectetur laborum nesciunt?
                                       In tempora dolore tenetur rem quis facere dignissimos
                                       minus sapiente, quae consequatur hic!</p>
                        </FourSectionInnerDiv>
                    </FourSectionDiv>

                }
                {props.btnIndex === 6 && 
                    <div className={styled.bindPoint}>
                        <SixSectionDiv>
                            <div className={styles.logo1}></div>
                            <div className={styles.logo2}></div>
                            <div className={styles.logo3}></div>
                        </SixSectionDiv>
                    </div>
                }

            </ReactCSSTransitionGroup>

        </div>
    )
}
export default Main