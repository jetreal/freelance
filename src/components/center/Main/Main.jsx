import React from 'react'
import styles from './main.module.sass'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { FirstPointDiv, SecondPointDiv, ThirdPointDiv, FourSectionDiv, FourSectionInnerDiv } from './StyledComponents';


const Main = (props) => {
    console.log(props)
    return (
        <div className={styles.main}>
        <ReactCSSTransitionGroup transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {props.btnIndex === 2 &&
                    <div className={styles.bindPoint}>
                        <FirstPointDiv pointsPosition={props.pointsPosition}>
                            1
                        </FirstPointDiv>
                        <SecondPointDiv pointsPosition={props.pointsPosition}>
                            2
                        </SecondPointDiv>
                        <ThirdPointDiv pointsPosition={props.pointsPosition}>
                            3
                        </ThirdPointDiv>
                    <div className={styles.centerPoint}
                         onClick={props.changePointsPlace}>

                      
                </div>
            </div>      
        }
        
            <p>
                {props.isLang === false ?
                props.texts[props.btnIndex - 1].textRu:
                props.texts[props.btnIndex -1 ].textEn} 

            </p>
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
            <div>
            </div>
            
            </ReactCSSTransitionGroup>
        
        </div>
    )
}
export default Main