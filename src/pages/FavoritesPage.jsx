import FavoriteSection from "components/FavoriteSection";

import { useSelector } from "react-redux";
import { selectFavoriteCars } from "redux/selectors";
import imageError from '../images/image_empty.svg';
import ErrorDispay from "components/ErrorDispay";


const FavoritesPage = () => {
  const cars = useSelector(selectFavoriteCars);
  const messageError = "Unfortunately, your list of favorite cars is still empty";
  
   
  return (
    <>
      {cars.length === 0
        ? <ErrorDispay messageError={messageError} imageError={ imageError} />
        : <FavoriteSection cars={cars} />
      }
    </>
  );
};

export default FavoritesPage;

