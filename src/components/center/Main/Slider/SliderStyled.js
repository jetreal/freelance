import styled from 'styled-components'

export const WrappSliderDiv = styled.div`
    position: relative
    width: 150px
    height: 150px
    display: grid
    grid-template-columns: auto auto auto
    justify-content: center
    border: 1px solid gray
    overflow: hidden 
    border-radius: 100%
    top: 45px
    left: -130px
    box-shadow: -2px 2px 2px black
    // z-index: 1
   
`

export const ImgDiv = styled.div`
    position: relative
    border-radius: 100px;
    top: 0px
    left: 0px
    width: 150px
    height: 150px
    // overflow: hidden
    z-index: 1

    opacity: ${props => props.slidePosition === 'center' ? '0' : '1'}
    transition: ${props => props.slidePosition === 'center' ? 'transform 0s' : 'transform .4s'}

    transform: ${props => props.slidePosition === 'center' ? 'translateX(0px)' : null ||
     props.slidePosition === 'left' ? 'translateX(-150px)': null ||
     props.slidePosition === 'right' ? 'translateX(150px)': null 
}

`

export const BgSliderDiv = styled.div`
    position: absolute
    left: -1px
    
    width: 150px
    height: 150px
`