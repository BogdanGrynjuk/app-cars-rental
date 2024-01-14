import { useSelector } from "react-redux";
import { selectFavoriteCars } from "redux/selectors";

import CarsList from "components/CarsList";


const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  
  
 
  return (
     <>
      <CarsList
        cars={favoriteCars}        
      />
    </>
  );
};

export default FavoritesPage;