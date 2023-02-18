import PropTypes from 'prop-types';
import { Section, DescriptionWrapper, Image, Name, Text, StatsList, StatsItem, StatsQuantity } from './Profile.styled';

export const Profile = ({info: {username, tag, location, avatar, stats}})=> {
    return(
        <Section>
            <DescriptionWrapper>
                <Image src = {avatar} alt={username}/>
                <Name>{username}</Name>
                <Text>@{tag}</Text>
                <Text>{location}</Text>
            </DescriptionWrapper>
            <StatsList>
                <StatsItem>
                    <Text>Followers</Text> 
                    <StatsQuantity>{stats.followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <Text>Views</Text> 
                    <StatsQuantity>{stats.views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <Text>Likes</Text> 
                    <StatsQuantity>{stats.likes}</StatsQuantity>
                </StatsItem>
            </StatsList>
        </Section>
    )
}

Profile.propTypes={
    info : PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired
        }).isRequired  
    }).isRequired,
}