import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import { Profile } from './Profile/Profile';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Layout/Layout.styled';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <Container>
      <Profile info={user}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <GlobalStyle/>
    </Container>
  );
};
