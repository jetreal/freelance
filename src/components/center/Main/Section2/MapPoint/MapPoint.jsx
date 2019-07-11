import React from 'react';
import styles from './mapPoint.module.sass'

class MapPoint extends React.Component { 

componentWillUnmount() {
    this.props.offMap()
}

    render() {
        return (
            <div className={styles.mapPoint}
                onClick={!this.props.tvOn === true ? this.props.showMap : null}
                style={this.props.tvOn === true ? { cursor: 'no-drop' } : {}}>
    
                <img src={'images/mapPoint.webp'} alt='mapPoint' />
            </div>
        )
    }
}

export default MapPoint