import styled from 'styled-components'

export const Section5Div = styled.div`
transform: ${props => props.isSection5TextsShowed === true ? 'scale(1,1) translateY(0px)' : 'scale(.2,.5) translateY(350px)'};


transition: transform 2s;
border: 1px solid gray;
position: relative;
margin: 0 auto;
width: 90%;
background-color: rgba(10, 10, 10, .5);
border-radius: 4px;
display: grid;
grid-template-columns: auto auto;

`