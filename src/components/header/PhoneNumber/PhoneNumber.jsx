import React from 'react'
import { PhoneNumDiv, PhoneNumberP } from '../StyledComponentHeader';

const PhoneNumber = (props) => {
    return (
        <PhoneNumDiv>
            <PhoneNumberP>
                {props.phoneNum}
            </PhoneNumberP>
        </PhoneNumDiv>
    )
}

export default PhoneNumber 