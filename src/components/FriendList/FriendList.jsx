import { FriendListItem } from "./FriendListItem"
import PropTypes from 'prop-types';
import { FriendsContainer,Friends } from "./FriendList.styled";

export const FriendList = ({friends}) => { 
    return (
        <FriendsContainer>
            <Friends>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />))}
                
            </Friends>
        </FriendsContainer>

    )
}

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
}