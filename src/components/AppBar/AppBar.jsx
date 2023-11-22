import Logo from 'components/Logo';
import { Header, Container, Navigation, Link } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Container>
        <Link to="/"><Logo/></Link>
        <Navigation>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Navigation>
      </Container>          
    </Header>
  );
};

export default AppBar;