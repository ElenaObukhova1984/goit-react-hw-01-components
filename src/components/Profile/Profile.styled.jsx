import styled from 'styled-components';

export const ProfileContainer = styled.div`
margin: 100px auto;
width: 300px;
height: 400px;
border-radius: 12px;
`;

export const UserInfo = styled.div`
border-radius: 12px 12px 0px 0px;
background-color: white;
display: flex;
flex-direction: column;
align-content: center;
justify-content: space-evenly;
align-items: center;
`;



export const UserPhoto = styled.img`
width: 120px;
height: 120px;
border: 1px black solid;
border-radius: 50%;
`;

export const UserName = styled.p`
font-size: 20px;
font-weight: 600;
margin-bottom: 10px;
text-align: center;
`;

export const UserTag = styled.p`
color: #919da9;
font-weight: 500;
margin-bottom: 10px;
`;

export const UserLoc = styled.p`
color: #919da9;
font-weight: 500;
margin-bottom: 10px;
`;

export const UserStats= styled.ul`
list-style: none;
padding: 0;
margin: 0;
display: flex;
align-items: center;
justify-content: space-around;
align-content: center;
background-color: #f3f6f9;
border: 1px solid #d6d6d6;
border-radius: 12px 12px 12px 12px;
`;

export const StatsInfo= styled.li`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`;

export const StatsName= styled.span`
color: #919da9;
font-weight: 500;
margin-bottom: 10px;
`;


export const StatsAmount= styled.span`
font-weight: 700;
text-align: center;
`;


