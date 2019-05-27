import React from 'react'
import { PhoneNumDiv } from '../StyledComponentHeader';

const PhoneNumber = (props) => {
    return (
        <PhoneNumDiv>
            <p>
                {props.phoneNum}
            </p>
        </PhoneNumDiv>
    )
}

export default PhoneNumber 