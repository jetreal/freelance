import styled from 'styled-components'

export const StyledP = styled.p`
    position: relative;
    text-align: center
    left: ${props => props.btnIndex === 3 ? '108px' : '0px'};
    top: ${props => props.btnIndex === 1 ? '5px' : '0px'}
`