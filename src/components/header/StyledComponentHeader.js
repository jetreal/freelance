import styled, { keyframes }from 'styled-components';


const keyFrames = keyframes`
    0% {
        color: yellow;
    }
    50% {
        color: orange;
        text-shadow: 1px 1px 2px black
    }
    100% {
        color: yellow
    }

`

export const PhoneNumDiv = styled.div`
    color: red;
    animation: ${keyFrames} 30s linear infinite
    font-size: 1.5em
`