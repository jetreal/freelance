import React from 'react'
import styles from './section3.module.sass'
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import Slider from '../Slider/Slider';
import { ReviewsItemDivText, ReviewsDiv, ReviewsItemP  } from '../StyledComponents';
import Button from './Button/Button';
import DownText from './DownText/DownText';
import Round from './Round/Round';

const Section3 = (props) => {
    return (
        <div>
            <ReviewsDiv>
                <Slider slidePosition={props.slidePosition}
                        sliderBgImg={props.sliderBgImg}
                        sliderContentForShow={props.sliderContentForShow}
                        />
                        
                <Button className={styles.buttonLeft}
                        isBlockedSlider={props.isBlockedSlider}
                        handleClick={props.leftSlide}
                        name={<MdArrowBack />}/>
                        
                <Button className={styles.buttonRight}
                        isBlockedSlider={props.isBlockedSlider}
                        handleClick={props.rightSlide}
                        name={<MdArrowForward />}/>
                        

                <ReviewsItemDivText>
                    <ReviewsItemP slidePosition={props.slidePosition}>
                        {props.sliderText}
                    </ReviewsItemP>
                </ReviewsItemDivText>
                <DownText section3DownText={props.section3DownText}
                            isLang={props.isLang}/>
                <Round className={styles.roundUp}/>
                <Round className={styles.roundDown}/>
            </ReviewsDiv>
        </div>
    )
}

export default Section3