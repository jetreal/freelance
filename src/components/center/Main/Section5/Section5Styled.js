import styled from 'styled-components'

export const Section5Div = styled.div`
transform: ${props => props.isSection5TextsShowed === true ? 'scale(1,1) translateY(0px)' : 'scale(.2,.5) translateY(350px)'};
opacity: ${props => props.isStartedSection5Text === false ? '0' : '1' };
transition: transform 2s, opacity 2s;
border: 1px solid gray;
position: relative;
margin: 0 auto;
width: 90%;
background-color: rgba(10, 10, 10, .5);
border-radius: 4px;
display: grid;
grid-template-columns: 40px auto;

`