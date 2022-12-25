import styled from 'styled-components';

export const FriendsContainer = styled.section`
margin: 100px auto;
width: 300px;
height: 100%;

`

export const Friends = styled.section`
margin: 0 auto;
width: 200px;
height: auto;

`

export const FriendItem = styled.li`
display: flex;
height: auto;
background-color: white;
margin-bottom: 10px;
padding: 5px;
align-items: center;
border-radius: 2px;
box-shadow: 10px 10px 8px 2px rgba(162, 158, 158, 0.3);

`
export const FriendsStatus = styled.span`
margin-left: 15px;
width: 12px;
height: 12px;
border-radius: 12px;
background-color: red;
${({ isOnline }) => {
      if (isOnline) {
        return `
         background-color: green; `;
      }
    }}

`
export const FriendsAvatar = styled.img`
margin-left: 12px;

`

export const FriendsName = styled.p`
margin-left: 20px;
font-weight: 700;

`