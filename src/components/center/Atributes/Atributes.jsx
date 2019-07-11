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

class Atributes extends React.PureComponent {

    

    render() {
        return (
            <div className={styles.attributes}>
                
                <TableSection>
                    <SoundLeft />
                    <Table />
                    <TvRemote changeTV={this.props.changeTV}
                            isShowMap={this.props.isShowMap} />
                    <TableShadow />
                </TableSection>
    
                <Sofa>
                    <WrappTv>
                        {this.props.isShowMap === true && <MapComponent />}
                        
                        <div className={styles.tv}>
                            {this.props.tvOn === true && <Tv tvIndex={this.props.tvIndex}
                                                        changeTV={this.props.changeTV} 
                                                     />}
                        </div>
                    </WrappTv>
                    <SofaImage />
                </Sofa>
    
                <SoundRight />
    
            </div>
        )
    }
}

export default Atributes 