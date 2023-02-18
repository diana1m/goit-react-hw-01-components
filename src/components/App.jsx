import user from '../user.json';
import data from '../data.json';
import { Profile } from './Profile/Profile';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Layout/Layout.styled';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Container>
      <Profile info={user}/>
      <Statistics title="Upload stats" stats={data} />
      <GlobalStyle/>
    </Container>
  );
};
