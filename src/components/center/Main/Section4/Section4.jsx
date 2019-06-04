import React from 'react'
import styles from './section4.module.sass'
import MediaQuery from 'react-responsive';
import { FourSectionDiv, FourSectionInnerDiv } from '../StyledComponents';


class Section4 extends React.Component {
    constructor(props) {
        super(props)
        // this.props.showSection4Text.bind(this)
    }
    
    componentDidMount() {
        setTimeout(() => this.props.showSection4Text(), 500);
    }


    render() {
        return (
            <FourSectionDiv>
                            <FourSectionInnerDiv isShowedSection4Text={this.props.isShowedSection4Text}>
                                <p>{this.props.isLang === true ? 
                                this.props.section4Texts[0].leftText :
                                this.props.section4Texts[1].leftText}</p>
                            </FourSectionInnerDiv>
                            <MediaQuery query="(min-width: 1081px)">
                                <FourSectionInnerDiv>
    
                                </FourSectionInnerDiv>
                            </MediaQuery>
    
                            <FourSectionInnerDiv isShowedSection4Text={this.props.isShowedSection4Text}>
                                <p>{this.props.isLang === true ? 
                                this.props.section4Texts[0].rightText :
                                this.props.section4Texts[1].rightText}</p>
                            </FourSectionInnerDiv>
                        </FourSectionDiv>
        )

    }
}

export default Section4