import React from 'react';
import styles from './map.module.sass'
import { YMaps, Map, Placemark, FullscreenControl } from 'react-yandex-maps';


const mapState = {
    center: [53.265047, 34.330718],
    zoom: 11,
    
    // width: '100%',
    // height: '600px'
  };

const MapComponent = (props) => {
    return (
        <YMaps>
            <div className={styles.map}>       
                <Map defaultState={mapState}
                    width='100%'
                    height='100%'>
                <FullscreenControl />
                 
                     <Placemark geometry={[53.265047, 34.330718]} />
                </Map>
            </div>
        </YMaps>
        
    )
}

export default MapComponent