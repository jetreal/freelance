import React from 'react'
import styles from './section2.module.sass'
import MyPhoto from './MyPhoto/MyPhoto';
import MapPoint from './MapPoint/MapPoint'; 
import CenterPoint from './CenterPoint/CenterPoint';
import WrapperContactIcon from './WrapperContactIcon/WrapperContactIcon';


const Section2 = (props) => {
    return (
        <div className={styles.bindPoint}>
        
                        <MapPoint tvOn={props.tvOn}
                                  showMap={props.showMap}
                                  offMap={props.offMap}/>
                        <MyPhoto />
                        <WrapperContactIcon pointsPosition={props.pointsPosition}
                                            pointsPositionWithDelay={props.pointsPositionWithDelay}/>
                        <CenterPoint pointsPositionWithDelay={props.pointsPositionWithDelay}
                                     pointsPosition={props.pointsPosition}
                                     changePointsPlace={props.changePointsPlace}/>
                    </div>
    )
}

export default Section2