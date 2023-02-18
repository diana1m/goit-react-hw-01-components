import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    font-weight: 700;
`;

export const Circle =styled.span`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: inline-block; 
    background-color: #bbb;
    background-color: ${props => {
       return props.isOnline ? 'green' : 'red';  
    }}
`;

