import FavoriteSection from "components/FavoriteSection";

import { useSelector } from "react-redux";
import { selectFavoriteCars } from "redux/selectors";


const FavoritesPage = () => {
  const cars = useSelector(selectFavoriteCars); 
  console.log("cars: ", cars)
   
  return (
    <>
      {cars.length === 0
        ? <div>Unfortunately, you don't have any favorite cars yet</div>
        : <FavoriteSection cars={cars} />
      }
    </>
  );
};

export default FavoritesPage;