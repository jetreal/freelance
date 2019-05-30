import React from 'react';
import styles from './section5.module.sass';
import { Section5Div } from './Section5Styled';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Section5 extends React.Component {
    constructor(props) {
        super(props)


    }


    // componentDidMount() {
    //     setTimeout(() => this.props.changeSection5Text(), 700);
    // }

    // componentWillUnmount() {
    //     setTimeout(() => this.props.showSection5Text(), 20);
    // }


    render() {
        console.log(this.props)
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={5000}
                transitionLeaveTimeout={300}>
                <Section5Div isSection5TextsShowed={this.props.isSection5TextsShowed}>
                    <img className={styles.checkMark}
                        src={'/images/checkMark2.png'}
                        onClick={this.props.showSection5Text} />

                    <p className={styles.section5Text}>
                        {this.props.section5Texts[this.props.section5TextsIndex].textRu}
                    </p>
                </Section5Div>
            </ReactCSSTransitionGroup>

        )

    }
}

export default Section5