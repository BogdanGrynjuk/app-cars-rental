import { useDispatch, useSelector } from "react-redux";
import { selectFilteredCars } from "redux/selectors";
import { resetFilter } from "redux/filtersSlice";
import { useEffect } from "react";

import FilterSection from "components/FilterSection";
import CarsGrid from "components/CarsGrid";     

const CatalogPage = () => {
  const filteredCars = useSelector(selectFilteredCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch])
  
  return (
    <>
      <FilterSection />
      {filteredCars.length === 0
        ? <div>Unfortunately, there are no results for your query</div>
        :<CarsGrid cars={ filteredCars } />
      }
    </>
  );
};

export default CatalogPage;