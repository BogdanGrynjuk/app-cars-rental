import PropTypes from "prop-types";
import { Nav, Link } from './Navigation.styled';

const Navigation = ({onClose}) => {
  return (
    <Nav>
      <Link to="/" onClick={onClose}>Home</Link>
      <Link to="/catalog" onClick={onClose}>Catalog</Link>
      <Link to="/favorites" onClick={onClose}>Favorites</Link>
    </Nav>
  );
};

Navigation.propTypes = {
  onClose: PropTypes.func.isRequired,
}
export default Navigation;