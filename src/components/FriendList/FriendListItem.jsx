import PropTypes from 'prop-types';
import { FriendItem, FriendsStatus, FriendsAvatar, FriendsName } from './FriendList.styled';

export const FriendListItem = ({ avatar, name,isOnline }) => {
    return (
        <FriendItem>
        <FriendsStatus isOnline={isOnline}></FriendsStatus>
        <FriendsAvatar src={avatar} alt={name} width="48" />
        < FriendsName>{name}</FriendsName>
        </FriendItem>)
}




FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
       })
   )

};


