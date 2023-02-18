import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/Profile';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Layout/Layout.styled';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Profile info={user}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
      <GlobalStyle/>
    </Container>
  );
};
