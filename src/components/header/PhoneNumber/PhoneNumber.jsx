import React from 'react'
import { PhoneNumDiv, PhoneNumberP } from '../StyledComponentHeader';
import IconPhone from './IconPhone/IconPhone';

const PhoneNumber = (props) => {
    return (
        <PhoneNumDiv>
            <IconPhone />
            <PhoneNumberP>
                {props.phoneNum}
            </PhoneNumberP>
        </PhoneNumDiv>
    )
}

export default PhoneNumber 