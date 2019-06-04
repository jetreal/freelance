import React from 'react';
import styles from './section6.module.sass'
import {
    SixSectionDiv,
    OverlapDiv
} from '../StyledComponents';

const Section6 = (props) => {
    return (
        <div>
            <SixSectionDiv>
                <div className={styles.beforeLine}> </div>

                <div className={styles.reactWrappDiv}>
                    <div className={styles.reactCenterLine}></div>
                    <p>ReactJS</p>
                </div>
                
                <div className={styles.afterLine}> </div>

                <OverlapDiv reactText={props.reactText}>
                </OverlapDiv>
            </SixSectionDiv>
        </div>
    )
}

export default Section6