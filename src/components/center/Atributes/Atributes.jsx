import React from 'react'
import styles from './atributes.module.sass'
import SoundRight from './SoundRight/SoundRight';
import WrappTv from './Sofa/TV/WrappTv';
import Tv from './Sofa/TV/Tv';
import Sofa from './Sofa/Sofa';
import TableSection from './TableSection/TableSection';
import SoundLeft from './TableSection/SoundLeft/SoundLeft';
import Table from './TableSection/Table/Table';
import TvRemote from './TableSection/TvRemote/TvRemote';
import SofaImage from './Sofa/SofaImage/SofaImage';
import MapComponent from './Sofa/Map/MapComponent';
import TableShadow from './TableSection/Table/TableShadow/TableShadow';


const Atributes = (props) => {
    console.log(props)
    return (
        <div className={styles.attributes}>
            
            <TableSection>
                <SoundLeft />
                <Table />
                <TvRemote changeTV={props.changeTV}
                        isShowMap={props.isShowMap} />
                <TableShadow />
            </TableSection>

            <Sofa>
                <WrappTv>
                    {props.isShowMap === true && <MapComponent />}
                    <Tv tvIndex={props.tvIndex} changeTV={props.changeTV} />
                </WrappTv>
                <SofaImage />
            </Sofa>

            <SoundRight />

        </div>
    )
}

export default Atributes 