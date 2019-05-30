import React from 'react'
import styles from './section3.module.sass'

import Slider from '../Slider/Slider';
import { ReviewsItemDivText, ReviewsDiv, ReviewsItemP  } from '../StyledComponents';

const Section3 = (props) => {
    return (
        <div>
                        <ReviewsDiv>
                            <Slider slidePosition={props.slidePosition}
                                    sliderBgImg={props.sliderBgImg}
                                    sliderContentForShow={props.sliderContentForShow}
                                    />   
                            <button className={styles.buttonLeft} onClick={props.isBlockedSlider === false ? props.leftSlide : null}></button>
                            <button className={styles.buttonRight} onClick={props.isBlockedSlider === false ? props.rightSlide : null}></button>
                            <ReviewsItemDivText>
                                <ReviewsItemP slidePosition={props.slidePosition}>
                                  {props.sliderText}
                                </ReviewsItemP>
                            </ReviewsItemDivText>
                        </ReviewsDiv>
                    </div>
    )
}

export default Section3