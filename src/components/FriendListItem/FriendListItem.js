import { Circle, Wrapper } from "./FriendListItem.styled";
import PropTypes from 'prop-types';

export const FriendListItem =({friend: {name, avatar, isOnline}})=>{
    return(
        <Wrapper>
            <Circle isOnline={isOnline}/>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </Wrapper>
    )
}

FriendListItem.propTypes ={
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
}