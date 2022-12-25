import PropTypes from "prop-types";
import { UserPhoto, UserName, ProfileContainer,UserInfo,UserTag,UserLoc,UserStats,StatsInfo,StatsAmount,StatsName } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats}) => {
  return (
    <ProfileContainer>
      <UserInfo>
        <UserPhoto
          src={avatar}
          alt={username}/>
        
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLoc>{location}</UserLoc>
      </UserInfo>

      <UserStats>
        <StatsInfo>
          <StatsName>Followers</StatsName>
          <StatsAmount> {stats.followers}</StatsAmount>
        </StatsInfo>
        <StatsInfo>
          <StatsName>Views</StatsName>
          <StatsAmount> {stats.views}</StatsAmount>
        </StatsInfo>
        <StatsInfo>
          <StatsName>Likes</StatsName>
          <StatsAmount> {stats.likes}</StatsAmount>
        </StatsInfo>
      </UserStats>
    </ProfileContainer>
  )
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
}