import FavoriteSection from "components/FavoriteSection";

import { useSelector } from "react-redux";
import { selectFavoriteCars } from "redux/selectors";


const FavoritesPage = () => {
  const cars = useSelector(selectFavoriteCars)
  
  
 
  return (
    <>
      
      <FavoriteSection cars={cars} />
      
    </>
  );
};

export default FavoritesPage;