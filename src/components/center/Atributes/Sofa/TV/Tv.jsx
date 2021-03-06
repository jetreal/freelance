import React from 'react'
import styles from './tv.module.sass'

class Tv extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.props.changeTV.bind(this);
      }
    
    componentDidMount() {
        this.myRef.current.addEventListener("ended", () => this.props.changeTV()
            
            );
    }

    componentWillUnmount() {
        this.myRef.current.removeEventListener("ended", () => this.props.changeTV()
           
            );
    }

    render() {
        return (
            <>
                <video ref={this.myRef} className={styles.tvImg}
                    src={`video/${this.props.tvIndex}.mp4`}
                    autoPlay
                ></video>
            </>
        )
    }
}

export default Tv