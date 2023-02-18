import styled from 'styled-components';

export const Section = styled.section`
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: #F1F6F9;
    box-shadow: 0px 0px 7px 0px black;
`;

export const DescriptionWrapper = styled.div`   
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-bottom: 35px;
`;

export const Image = styled.img`
    border-radius: 100%;
    padding: 10px;
    display: block;
    width: 130px;
`;

export const Name = styled.p`
    margin: 0;
    font-weight: 700;
    font-size: 22px;
`;

export const Text = styled.p`
    margin: 0;
    color: #676767;
`

export const StatsList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const StatsItem = styled.li`
    width: 100px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    background-color: #cee6ea;
    border: 1px solid #9bb5bb;
`;

export const StatsQuantity = styled.span`
    font-weight: 700;
`