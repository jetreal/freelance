import styled from 'styled-components';

export const Paragraph = styled.p`
font-size: 1.5em;
color: ${props => props.green === 0 ? 'red' : 'green'}
transition: all 1s;
position: relative;
left: 0;
@media (max-width: 800px) {
    color: yellow;
    position: relative;
    left: 100px;
  }
`;
export const FirstPointDiv = styled.div`
    outline: 2px solid green;
    position: absolute;
    top: ${props => props.pointsPosition === 0 ? '200px' : null ||
        props.pointsPosition === 1 ? '200px' : null ||
            props.pointsPosition === 2 ? '30px' : null
    };

    left: ${props => props.pointsPosition === 0 ? '-250px' : null ||
        props.pointsPosition === 1 ? '250px' : null ||
            props.pointsPosition === 2 ? '0px' : null
    };
    border-radius: 100%;
    transition: all 1s;
    @media (min-width: 1200px) {
        left: ${props => props.pointsPosition === 0 ? '-300px' : null ||
        props.pointsPosition === 1 ? '300px' : null ||
            props.pointsPosition === 2 ? '0px' : null
    };
}
    @media (max-width: 850px) {
        left: ${props => props.pointsPosition === 0 ? '-200px' : null ||
        props.pointsPosition === 1 ? '200px' : null ||
            props.pointsPosition === 2 ? '0px' : null
    };
}
`

export const SecondPointDiv = styled.div`
    outline: 2px solid blue;
    position: absolute;
    top: ${props => props.pointsPosition === 1 ? '200px' : null ||
        props.pointsPosition === 2 ? '200px' : null ||
            props.pointsPosition === 0 ? '30px' : null
    };
    left: ${props => props.pointsPosition === 1 ? '-250px' : null ||
        props.pointsPosition === 2 ? '250px' : null ||
            props.pointsPosition === 0 ? '0px' : null
    };
    border-radius: 100%;
    transition: all 1s;
    @media (min-width: 1200px) {
        left: ${props => props.pointsPosition === 1 ? '-300px' : null ||
        props.pointsPosition === 2 ? '300px' : null ||
            props.pointsPosition === 0 ? '0px' : null
    };
    }
    @media (max-width: 850px) {
        left: ${props => props.pointsPosition === 1 ? '-200px' : null ||
        props.pointsPosition === 2 ? '200px' : null ||
            props.pointsPosition === 0 ? '0px' : null
    };
    }

`
export const ThirdPointDiv = styled.div`
    outline: 2px solid yellow;
    position: absolute;
    top: ${props => props.pointsPosition === 2 ? '200px' : null ||
            props.pointsPosition === 0 ? '200px' : null ||
                props.pointsPosition === 1 ? '30px' : null
        }
    left: ${props => props.pointsPosition === 2 ? '-250px' : null ||
            props.pointsPosition === 0 ? '250px' : null ||
                props.pointsPosition === 1 ? '0px' : null
        };
    border-radius: 100%;
    transition: all 1s;
    @media (min-width: 1200px) {
        left: ${props => props.pointsPosition === 2 ? '-300px' : null ||
            props.pointsPosition === 0 ? '300px' : null ||
                props.pointsPosition === 1 ? '0px' : null
        };
    }
    @media (max-width: 850px) {
        left: ${props => props.pointsPosition === 2 ? '-200px' : null ||
            props.pointsPosition === 0 ? '200px' : null ||
                props.pointsPosition === 1 ? '0px' : null
        };
    }
`

export const FourSectionDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    color: white;
    justify-content: space-evenly;
    margin: 0 10px
    @media (max-width: 1200px) { 
        justify-content: space-between;
        margin: 0
     
    }
    @media (max-width: 1080px) { 
        grid-template-columns: auto auto;
        justify-content: space-evenly;
        margin: 0 
     
    }

`

export const FourSectionInnerDiv = styled.div`
    display: grid;
    align-content: center;
    padding: 0 20px;
    width: 200px;
    @media (max-width: 1200px) { 
        width: 180px;
        
    }
    @media (max-width: 1080px) { 
        width: 260px;
     
    }
    @media (max-width: 1000px) { 
        padding: 0 2px;

     
    }

`