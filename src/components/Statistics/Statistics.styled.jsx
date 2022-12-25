import styled from 'styled-components';


export const StatisticsContainer = styled.section`
margin: 50px auto;
width: 300px;
height: 100%;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);

`;

export const StatisticsTitle = styled.h2`
color: rgb(117, 111, 111);
text-transform: uppercase;
background-color: white;

font-weight: 600;
text-align: center;
padding: 20px 20px;
`;

export const StatisticsList = styled.ul`
display: flex;
justify-content: space-around;
list-style: none;
padding-top: 10px;
padding-bottom: 10px;
background-color: #897e7e;
`;

export const StatisticsItem = styled.li`
margin: 0px auto;
padding-left: 10px;
width: 300px;
height: 100%;

box-shadow: 10px 10px 8px 2px rgba(116, 112, 112, 0.3);
`;

export const StatisticLabel = styled.span`
color: white;
margin-bottom: 20px;
`;

export const StatisticPerc = styled.span`
color: white;
`;
