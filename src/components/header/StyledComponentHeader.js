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
    // width: 200px
    color: red;
    animation: ${keyFrames} 30s linear infinite
    font-size: 1.1em
    position: relative;
    left: -30px;
    transform: rotateZ(-3deg);
    top: 50px;
    display: grid;
    justify-content: center;
    align-content: center;
    z-index: 4;
    `
export const PhoneNumberP = styled.p`
    // transition: all .5s
    // @media (min-width: 1000px) {
    //     font-size: 1.2em;
    // }
    
`