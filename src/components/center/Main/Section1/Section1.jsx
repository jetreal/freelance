import React from 'react';
import styles from './section1.module.sass'
import { SectionTextDiv } from './Section1Styled';

class Section1 extends React.Component {
    constructor(props) {
        super(props)
        this.props.showSection1Text.bind(this)
    }
    
    componentDidMount() {
        setTimeout(() => this.props.showSection1Text(), 2000);
    }

    render() {

        return (
            <SectionTextDiv isShowedSection1Text={this.props.isShowedSection1Text}>
                <p className={styles.sectionText}>
                    Lorem ipsum dolor sit 
                    amet consectetur adipisicing
                     elit. At dolor praesentium eos
                      quisquam tenetur atque, sapiente
                       deserunt nisi distinctio! Mollitia
                        tempore doloribus est, impedit sit
                         ab exercitationem labore dolorum vero
                          quas distinctio natus accusamus id
                           cupiditate at rem praesentium architecto
                            ea placeat quis consequatur dicta libero illo?
                             Necessitatibus, sed veniam.
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Commodi accusamus, 
                     illo sed expedita nisi deleniti vel,
                      corporis laboriosam unde dolor eius 
                      voluptatum nemo error cumque adipisci 
                      soluta blanditiis modi illum?
                </p>
            </SectionTextDiv>
    
        )
    }
}

export default Section1