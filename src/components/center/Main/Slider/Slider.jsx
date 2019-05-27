import React from 'react'
import styles from './slider.module.sass'
import { WrappSliderDiv, ImgDiv, BgSliderDiv} from './SliderStyled';



const Slider = (props) => {


    let Images = props.sliderContentForShow.map( (item, index) => {
            return  <ImgDiv slidePosition={props.slidePosition} >
                        <img src={item.url}/>
                    </ImgDiv>
    })
    return (
        <WrappSliderDiv className={styles.wrappSlider}>
            <BgSliderDiv>
                <img src={props.sliderBgImg}/>
            </BgSliderDiv>
            {Images}
            {/* <ImgDiv slidePosition={props.slidePosition}>
                <img src={'/images/soundRight.jpg'}/>
            </ImgDiv>
            <ImgDiv slidePosition={props.slidePosition}>
                <img src={'/images/soundLeft.jpg'}/>
            </ImgDiv>
            <ImgDiv slidePosition={props.slidePosition}>
                <img src={'/images/soundRight.jpg'}/>
            </ImgDiv> */}

           

        </WrappSliderDiv>

	  
    )
}

export default Slider