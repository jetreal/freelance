import React from 'react'
import styles from './main.module.sass'


import HeaderText from './HeaderText/HeaderText';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section6 from './Section6/Section6';
import Section1 from './Section1/Section1';
import Section5 from './Section5/Section5';

class Main extends React.PureComponent {



    render() {
        switch (this.props.btnIndex) {
            case 1: {
                return (
                    <div className={styles.main}>
                        
                        <HeaderText isLang={this.props.isLang}
                            texts={this.props.texts}
                            btnIndex={this.props.btnIndex} />
                            
                        <Section1 showSection1Text={this.props.showSection1Text}
                                  isShowedSection1Text={this.props.isShowedSection1Text}
                                  textsForFirstSection={this.props.textsForFirstSection}
                                  isLang={this.props.isLang}/>
    
                    </div>
                )
            }
            case 2: {
                return (
                    <div className={styles.main}>
                    
                        <HeaderText isLang={this.props.isLang}
                            texts={this.props.texts}
                            btnIndex={this.props.btnIndex} />
    
                        <Section2 pointsPosition={this.props.pointsPosition}
                            pointsPositionWithDelay={this.props.pointsPositionWithDelay}
                            changePointsPlace={this.props.changePointsPlace}
                            showMap={this.props.showMap}
                            offMap={this.props.offMap}
                            tvOn={this.props.tvOn} />
    
                    </div>
                )
            }
            case 3: {
                return (
    
                    <div className={styles.main}>
                        <HeaderText isLang={this.props.isLang}
                            texts={this.props.texts}
                            btnIndex={this.props.btnIndex} />
                        <Section3 slidePosition={this.props.slidePosition}
                            sliderBgImg={this.props.sliderBgImg}
                            sliderContentForShow={this.props.sliderContentForShow}
                            leftSlide={this.props.leftSlide}
                            rightSlide={this.props.rightSlide}
                            sliderText={this.props.sliderText}
                            isBlockedSlider={this.props.isBlockedSlider}
                            isLang={this.props.isLang}
                            section3DownText={this.props.section3DownText}
                        />
    
                    </div>
                )
            }
            case 4: {
                return (
    
                    <div className={styles.main}>
                        <HeaderText isLang={this.props.isLang}
                            texts={this.props.texts}
                            btnIndex={this.props.btnIndex} />
                        <Section4 isShowedSection4Text={this.props.isShowedSection4Text}
                                showSection4Text={this.props.showSection4Text}
                                section4Texts={this.props.section4Texts}
                                isLang={this.props.isLang} />
                    </div>
                )
            }
            case 5: {
                return (
                    <div className={styles.main}>
                        <HeaderText isLang={this.props.isLang}
                            texts={this.props.texts}
                            btnIndex={this.props.btnIndex} />
                        <Section5 section5Texts={this.props.section5Texts}
                                  isSection5TextsShowed={this.props.isSection5TextsShowed}
                                  section5TextsIndex={this.props.section5TextsIndex}
                                  showSection5Text={this.props.showSection5Text}
                                  changeSection5Text={this.props.changeSection5Text}
                                  isLang={this.props.isLang}
                                  isStartedSection5Text={this.props.isStartedSection5Text}
                                  startShowSection5Text={this.props.startShowSection5Text}/>
                        
                    </div>
                )
            }
            case 6: {
                return (
    
                    <div className={styles.main}>
                        <HeaderText isLang={this.props.isLang}
                            texts={this.props.texts}
                            btnIndex={this.props.btnIndex} />
                        <Section6 reactText={this.props.reactText} />
                    </div>
                )
            }
            default: {}
        }
        return (
            <div className={styles.main}>
                
                <HeaderText isLang={this.props.isLang}
                    texts={this.props.texts}
                    btnIndex={this.props.btnIndex} />
    
            </div>
        )
    }
}

export default Main