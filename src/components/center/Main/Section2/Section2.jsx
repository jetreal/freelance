import React from 'react'
import styles from './section2.module.sass'
import { Wave, Random } from 'react-animated-text';

import { FirstPointDiv, ContactTextDiv, SecondPointDiv, ThirdPointDiv  } from '../StyledComponents';
import MyPhoto from './MyPhoto/MyPhoto';
import MapPoint from './MapPoint/MapPoint';
import CenterPoint from './CenterPoint/CenterPoint';

const Section2 = (props) => {
    console.log(props)
    return (
        <div className={styles.bindPoint}>
        
                        <MapPoint tvIndex={props.tvIndex}
                                  showMap={props.showMap}/>
                        <MyPhoto />
                        <FirstPointDiv pointsPosition={props.pointsPosition}>
                            <img className={styles.skypeImg} src={'images/skype2.png'} />
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
                            <img className={styles.mailImg} src={'images/mail2.png'} />
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
                            <img className={styles.phoneImg} src={'images/phone2.png'} />
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
                        <CenterPoint pointsPositionWithDelay={props.pointsPositionWithDelay}
                                     pointsPosition={props.pointsPosition}
                                     changePointsPlace={props.changePointsPlace}/>
                    </div>
    )
}

export default Section2