import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectFavoriteCars } from "redux/selectors";

import FavoriteSection from "components/FavoriteSection";
import ErrorDisplay from "components/ErrorDisplay";

import imageError from '../images/image_empty.svg';

const FavoritesPage = () => {
  const navigate = useNavigate();
 
  const cars = useSelector(selectFavoriteCars);
  const messageError = "Unfortunately, your list of favorite cars is still empty. Please navigate to make your selections";
  const btnErrorLabel = "Back to Catalog";
  const onClickBtnError = () => navigate('/catalog');  
   
  return (
    <>      
      {cars.length === 0
        ? <ErrorDisplay messageError={messageError} imageError={imageError} onButtonClick={onClickBtnError} buttonLabel={btnErrorLabel} showButton={true} />
        : <FavoriteSection cars={cars} />
      }
    </>   
  );
};

export default FavoritesPage;

