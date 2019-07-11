import React from 'react'
import styles from './section4.module.sass'
import { FourSectionDiv, FourSectionInnerDiv } from '../StyledComponents';


class Section4 extends React.Component {

    componentDidMount() {
        setTimeout(() => this.props.showSection4Text(), 500);
    }


    render() {
        return (
            <FourSectionDiv>
                            <FourSectionInnerDiv isShowedSection4Text={this.props.isShowedSection4Text}>
                                <ul>{this.props.isLang === true ? 
                                this.props.section4Texts[0].leftTexts.map( item => <li key={item}>{item}</li>) :
                                this.props.section4Texts[1].leftTexts.map( item => <li key={item}>{item}</li>)}</ul>
                            </FourSectionInnerDiv>
 
                            <FourSectionInnerDiv className={styles.rightSideDiv}isShowedSection4Text={this.props.isShowedSection4Text}>
                                <ul>{this.props.isLang === true ? 
                                this.props.section4Texts[0].rightTexts.map( item => <li key={item}>{item}</li>) :
                                this.props.section4Texts[1].rightTexts.map( item => <li key={item}>{item}</li>)}</ul>
                            </FourSectionInnerDiv>
                        </FourSectionDiv>
        )

    }
}

export default Section4