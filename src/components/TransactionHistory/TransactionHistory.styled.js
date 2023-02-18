import styled from 'styled-components';

export const Table = styled.table`
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: #F1F6F9;
    box-shadow: 0px 0px 7px 0px black;
    border-spacing: 1px;
`;

export const TablesHead = styled.thead`
    background-color: #1CCCC1;
    color: white;
    border: 1px solid #F4FAFA;
    font-size: 12px;
`;

export const TableBody = styled.tbody`
    text-align: center;
    font-size: 10px;
    
    background-color: #F4FAFA;
    color: #676767;
`;

export const Row = styled.tr`
    &:nth-child(even) {
        background-color: #D5E8E7;
    }
`;

export const Cell = styled.th`
    padding: 10px;
    font-weight: normal;
`;