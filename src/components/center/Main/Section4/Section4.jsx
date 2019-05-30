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
                                <p>Lorem ipsum dolor sit amet consectetur
                                     adipisicing elit. Quae minus cupiditate
                                      sed sunt accusamus consectetur laborum nesciunt?
                                       In tempora dolore tenetur rem quis facere dignissimos
                                           minus sapiente, quae consequatur hic!</p>
                            </FourSectionInnerDiv>
                            <MediaQuery query="(min-width: 1081px)">
                                <FourSectionInnerDiv>
    
                                </FourSectionInnerDiv>
                            </MediaQuery>
    
                            <FourSectionInnerDiv isShowedSection4Text={this.props.isShowedSection4Text}>
                                <p>Lorem ipsum dolor sit amet consectetur
                                         adipisicing elit. Quae minus cupiditate
                                          sed sunt accusamus consectetur laborum nesciunt?
                                           In tempora dolore tenetur rem quis facere dignissimos
                                           minus sapiente, quae consequatur hic!</p>
                            </FourSectionInnerDiv>
                        </FourSectionDiv>
        )

    }
}

export default Section4