import { useDispatch, useSelector } from "react-redux";
import { selectFilteredCars } from "redux/selectors";

import CarsList from "components/CarsList";
import FilterSection from "components/FilterSection";
import { resetFilter } from "redux/filtersSlice";
import { useEffect } from "react";



const CatalogPage = () => {
  const filteredCars = useSelector(selectFilteredCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch])
  
  return (
    <>
      <FilterSection/>
      <CarsList cars={ filteredCars } />
    </>
  );
};

export default CatalogPage;