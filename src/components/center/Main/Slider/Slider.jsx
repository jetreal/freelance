import React from 'react'
import styles from './slider.module.sass'
import { WrappSliderDiv, ImgDiv, BgSliderDiv} from './SliderStyled';



const Slider = (props) => {


    let Images = props.sliderContentForShow.map((item, index) => {
        return <ImgDiv key={index} slidePosition={props.slidePosition} >
            <img src={item.url} alt='item' />
        </ImgDiv>
    })
    return (
        <WrappSliderDiv className={styles.wrappSlider}>
            <BgSliderDiv>
                <img src={props.sliderBgImg} alt='slider' />
            </BgSliderDiv>
            {Images}
        </WrappSliderDiv>

    )
}

export default Slider