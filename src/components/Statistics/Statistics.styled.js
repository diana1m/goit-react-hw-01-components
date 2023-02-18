import styled from 'styled-components';

export const Section = styled.section`
    border-radius: 3px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: #F1F6F9;
    box-shadow: 0px 0px 7px 0px black;
`;

export const Title = styled.h2`
    text-align: center;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 5px;
    flex-grow: 1;
    color: white;
`



