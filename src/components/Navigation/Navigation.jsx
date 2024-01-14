import PropTypes from "prop-types";
import { Nav, Link, Counter } from './Navigation.styled';
import { useSelector } from "react-redux";
import { selectAllCars, selectFavoriteCars } from "redux/selectors";

const Navigation = ({ onClose }) => {
  const allCars = useSelector(selectAllCars);
  const favorites = useSelector(selectFavoriteCars);

  return (
    <Nav>
      <Link to="/" onClick={onClose}>Home</Link>
      <Link to="/catalog" onClick={onClose}>Catalog<Counter>{ allCars.length }</Counter></Link>
      <Link to="/favorites" onClick={onClose}>Favorites<Counter>{ favorites.length }</Counter></Link>
    </Nav>
  );
};

Navigation.propTypes = {
  onClose: PropTypes.func,
}
export default Navigation;