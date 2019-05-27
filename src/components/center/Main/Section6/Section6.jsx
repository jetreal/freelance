import React from 'react';
import styles from './section6.module.sass'
import {
    SixSectionDiv,
    Overlap
} from '../StyledComponents';

const Section6 = (props) => {
    return (
        <div>
            <SixSectionDiv>
                <div className={styles.logo1}></div>
                <div className={styles.logo4}>
                    <div className={styles.reactCenterLine}></div>
                    <p>ReactJS</p>
                </div>
                <div className={styles.logo3}></div>
                <Overlap reactText={props.reactText}>

                </Overlap>
            </SixSectionDiv>
        </div>
    )
}

export default Section6