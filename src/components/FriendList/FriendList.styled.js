import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ListItem = styled.li`
   border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: #F1F6F9;
    box-shadow: 0px 0px 7px 0px black;
    overflow: hidden;
`;