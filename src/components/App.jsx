import user from '../user.json';
import { Profile } from './Profile/Profile';
import { GlobalStyle } from 'GlobalStyle';
import { Container } from './Layout/Layout.styled';

export const App = () => {
  return (
    <Container>
      <Profile info = {user}/>
      <GlobalStyle/>
    </Container>
  );
};
