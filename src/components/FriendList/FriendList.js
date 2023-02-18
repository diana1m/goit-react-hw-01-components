import { List, ListItem } from "./FriendList.styled";
import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({friends}) =>{
    return (
        <List>
            {friends.map(friend =>(
                <ListItem key={friend.id}>
                    <FriendListItem friend={friend}/>
                </ListItem>
            ))}
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
      ).isRequired,
};