import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectError, selectFavoriteCars } from "redux/selectors";

import FavoriteSection from "components/FavoriteSection";
import ErrorDisplay from "components/ErrorDisplay";

import imageError from '../images/image_empty.svg';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const error = useSelector(selectError);
  const cars = useSelector(selectFavoriteCars);
  const messageError = "Unfortunately, your list of favorite cars is still empty";
  const btnErrorLabel = "Back to catalog";
  const onClickBtnError = () => navigate('/catalog');  
   
  return (
    <>
      {error
        ? <ErrorDisplay messageError={error} imageError="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" />
        : <>
          {cars.length === 0
            ? <ErrorDisplay messageError={messageError} imageError={imageError} onButtonClick={onClickBtnError} buttonLabel={btnErrorLabel} showButton={true}/>
            : <FavoriteSection cars={cars} />
          }
        </>
      }
    </>
  );
};

export default FavoritesPage;

