import { useSelector } from "react-redux";
import { selectFilteredCars } from "redux/selectors";

import CarsList from "components/CarsList";
import FilterSection from "components/FilterSection";

const CatalogPage = () => {
  const filteredCars = useSelector(selectFilteredCars)
  
  return (
    <>
      <FilterSection/>
      <CarsList cars={ filteredCars } />
    </>
  );
};

export default CatalogPage;