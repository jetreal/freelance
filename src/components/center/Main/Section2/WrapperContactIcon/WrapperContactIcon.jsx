import React from 'react'
import styles from './wrapperContactIcon.module.sass'
import { Wave, Random } from 'react-animated-text';
import { FirstPointDiv, ContactTextDiv, SecondPointDiv, ThirdPointDiv } from '../../StyledComponents';


class WrapperContactIcon extends React.PureComponent {
    render() {
        return (
            <div className={styles.bindPoint}>
                <FirstPointDiv pointsPosition={this.props.pointsPosition}>
                    <img className={styles.skypeImg} src={'images/skype2.webp'} alt='' />
                    {this.props.pointsPositionWithDelay === 2 &&
                        <ContactTextDiv>
                            <Wave text="sergey jetreal7"
                                effect="jump"
                                effectChange={8.2}
                                iterations={1}
                                speed={100}
                                effectDuration={.2} />
                        </ContactTextDiv>
                    }
                </FirstPointDiv>
                <SecondPointDiv pointsPosition={this.props.pointsPosition}>
                    <img className={styles.mailImg} src={'images/mail2.webp'} alt='' />
                    {this.props.pointsPositionWithDelay === 0 &&
                        <ContactTextDiv >
                            <Wave
                                text="Ssergey.petruninN@gmail.com"
                                effect="jump"
                                effectChange={2.2}
                                effectDuration={.2}
                                iterations={1}
                                speed={100} />
                        </ContactTextDiv>
                    }
                </SecondPointDiv>
                <ThirdPointDiv pointsPosition={this.props.pointsPosition}>
                    <img className={styles.phoneImg} src={'images/phone2.webp'} alt='' />
                    {this.props.pointsPositionWithDelay === 1 &&
                        <ContactTextDiv>
                            <Random
                                text="+ 7 952 964 57 21"
                                effect="jump"
                                effectChange={2.2}
                                effectDuration={.1}
                                iterations={1}
                                speed={100} />
                        </ContactTextDiv>}
                </ThirdPointDiv>
    
            </div>
        )
    }
}

export default WrapperContactIcon