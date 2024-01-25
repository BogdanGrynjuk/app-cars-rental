import { useDispatch, useSelector } from "react-redux";
import { selectError, selectFilteredCars } from "redux/selectors";
import { resetFilter } from "redux/filtersSlice";
import { useEffect } from "react";

import FilterSection from "components/FilterSection";
import CarsGrid from "components/CarsGrid";
import imageError from '../images/image_not_found.svg';

import ErrorDispay from "components/ErrorDisplay";     

const CatalogPage = () => {
  const error = useSelector(selectError);
  const filteredCars = useSelector(selectFilteredCars);

  const messageError = "Unfortunately, there are no results for your query";
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch])
  
  return (
    <>
      {error
        ? < ErrorDispay messageError={error} imageError="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" />
        : <>
          <FilterSection />
          {filteredCars.length === 0
            ? <ErrorDispay messageError={messageError} imageError={imageError} />
            : <CarsGrid cars={filteredCars} />
          }
        </>
      }
    </>    
  );
};

export default CatalogPage;