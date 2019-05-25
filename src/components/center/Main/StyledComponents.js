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
    display: grid;
    grid-template-columns: auto 250px
    align-content: center;
    position: absolute;
    top: ${props => props.pointsPosition === 0 ? '200px' : null ||
        props.pointsPosition === 1 ? '200px' : null ||
        props.pointsPosition === 2 ? '60px' : null
    };

    left: ${props => props.pointsPosition === 0 ? '220px' : null ||
        props.pointsPosition === 1 ? '-250px' : null ||
        props.pointsPosition === 2 ? '-15px' : null
    };
    border-radius: 100%;
    transition: all 1s;
    @media (min-width: 1200px) {
        left: ${props => props.pointsPosition === 0 ? '265px' : null ||
        props.pointsPosition === 1 ? '-300px' : null ||
        props.pointsPosition === 2 ? '-15px' : null
    };
}
    @media (max-width: 850px) {
        left: ${props => props.pointsPosition === 0 ? '200px' : null ||
        props.pointsPosition === 1 ? '-230px' : null ||
        props.pointsPosition === 2 ? '-15px' : null
    };
}
`

export const SecondPointDiv = styled.div`
    display: grid;
    grid-template-columns: auto 250px
    align-content: center;
    position: absolute;
    top: ${props => props.pointsPosition === 1 ? '200px' : null ||
        props.pointsPosition === 2 ? '200px' : null ||
        props.pointsPosition === 0 ? '60px' : null
    };
    left: ${props => props.pointsPosition === 1 ? '220px' : null ||
        props.pointsPosition === 2 ? '-250px' : null ||
        props.pointsPosition === 0 ? '-15px' : null
    };
    border-radius: 100%;
    transition: all 1s;
    @media (min-width: 1200px) {
        left: ${props => props.pointsPosition === 1 ? '265px' : null ||
        props.pointsPosition === 2 ? '-300px' : null ||
        props.pointsPosition === 0 ? '-15px' : null
    };
    }
    @media (max-width: 850px) {
        left: ${props => props.pointsPosition === 1 ? '200px' : null ||
        props.pointsPosition === 2 ? '-230px' : null ||
        props.pointsPosition === 0 ? '-15px' : null
    };
    }

`
export const ThirdPointDiv = styled.div`
    display: grid;
    grid-template-columns: auto 250px
    align-content: center;
    position: absolute;
    top: ${props => props.pointsPosition === 2 ? '200px' : null ||
            props.pointsPosition === 0 ? '200px' : null ||
            props.pointsPosition === 1 ? '60px' : null
        }
    left: ${props => props.pointsPosition === 2 ? '220px' : null ||
            props.pointsPosition === 0 ? '-250px' : null ||
            props.pointsPosition === 1 ? '-15px' : null
        };
    transform: ${props => props.pointsPosition === 2 ? 'rotateZ(360deg)' : null ||
        props.pointsPosition === 0 ? 'rotateZ(720deg)' : null ||
        props.pointsPosition === 1 ? 'rotateZ(0deg)' : null
    };
    border-radius: 100%;
    transition: all 1s;
    @media (min-width: 1200px) {
        left: ${props => props.pointsPosition === 2 ? '265px' : null ||
            props.pointsPosition === 0 ? '-300px' : null ||
            props.pointsPosition === 1 ? '-15px' : null
        };
    }
    @media (max-width: 850px) {
        left: ${props => props.pointsPosition === 2 ? '200px' : null ||
            props.pointsPosition === 0 ? '-230px' : null ||
            props.pointsPosition === 1 ? '-15px' : null
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
export const ContactTextDiv = styled.div`
    position: absolute
    top: 15px
    left: 65px
    transition: font-size .3s
    @media (max-width: 800px) {
        font-size: .92em;
    }
    
`

// example наследование
export const ContactTextDivMail = styled(ContactTextDiv)`

`

export const ReviewsDiv = styled.div`
    width: 0
    height: 0
    position: relative
    margin: 0 auto
    display: grid
    grid-template-columns: auto auto
    justify-content: center

`

export const ReviewsItemDivLeft = styled.div`
position: relative
top: 70px
    width: 100px
    height: 100px
`

export const ReviewsItemDivText = styled.div`
    position: absolute
    border-radius: 20px
    opacity: .8
    left: -20px
    top: 45px
    width: 250px
    height: 150px
    border-top: 1px solid gray
    border-bottom: 1px solid gray
    display: grid
    align-content: center
    justify-content: center
    text-align: justify
    box-shadow: 2px 2px 2px black
    background-color: rgba(1, 1, 10, 0.5);
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)
`

export const ReviewsItemP = styled.p`
    transition: ${props => props.slidePosition !== 'center' ? 'opacity .7s' : 'opacity 0s'} 
    opacity: ${props => props.slidePosition === 'center' ? '1' : '0'}
    position: relative

`

export const SixSectionDiv = styled.div`
    width: 100%
    display: grid
    grid-template-columns: auto 480px auto
    position: relative
    // justify-content: center
    align-content: center
    // border: 1px solid green


`

export const Overlap = styled.div`
    width: ${props => props.reactText === true ? '0': '100%'};
    transition: width 1s
    height: 120px
    position: absolute
    right: 0px
    top: -10px
    background-color: #030303
    // transform: translateX(200px);
    z-index: 0
    // border: 1px solid green

`