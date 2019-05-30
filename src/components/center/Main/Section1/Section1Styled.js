import styled from 'styled-components';

export const SectionTextDiv = styled.div`
    opacity: ${props => props.isShowedSection1Text === true ? '1' : '0'};
    transform: ${props => props.isShowedSection1Text === true ? 'scale(1,1)' : 'scale(0,0)'};
    transition: all 1.5s cubic-bezier(0,1.14,.93,.98);

    width: 90%
    margin: 0 auto


`