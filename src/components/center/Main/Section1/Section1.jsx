import React from 'react';
import styles from './section1.module.sass'
import { SectionTextDiv } from './Section1Styled';

class Section1 extends React.Component {
    constructor(props) {
        super(props)
        this.props.showSection1Text.bind(this)
    }
    
    componentDidMount() {
        setTimeout(() => this.props.showSection1Text(), 1500);
    }

    render() {

        return (
            <SectionTextDiv isShowedSection1Text={this.props.isShowedSection1Text}>
                <p className={styles.sectionText}>
                    {this.props.isLang === false ? 
                    this.props.textsForFirstSection[1] : this.props.textsForFirstSection[0] }
                </p>
            </SectionTextDiv>
        )
    }
}

export default Section1