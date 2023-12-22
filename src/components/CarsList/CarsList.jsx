import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "redux/operations";
import { selectAllCars, selectError, selectIsLoading } from "redux/selectors";

import CarsItem from "components/CarsItem";
import { Wrapper, List, Button } from "./CarsList.styled";
import GeneralContainer from "components/GeneralContainer";
import Loader from "components/Loader";

const CarsList = () => {
  const [visibleCards, setVisibleCards] = useState(8);
  const cars = useSelector(selectAllCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const carsListRef = useRef(null);
  const dispatch = useDispatch();
  
  const handleLoadMore = async () => {
    await setVisibleCards(prevState => prevState + 8);
    const newlyLoadedElements = Array.from(carsListRef.current.children).slice(-8)[0];
    const headerHeight = document.getElementById('app-bar').offsetHeight;
    const offset = headerHeight + 10


    if (newlyLoadedElements) {
      const elementPosition = newlyLoadedElements.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch])

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && !error && <Loader />}
      <Wrapper >
        <GeneralContainer>
          <List ref={carsListRef}>
            {cars.slice(0, visibleCards).map(car => (
              <CarsItem key={car.id} {...car} />
            ))}
          </List>
          {visibleCards < cars.length &&
            <Button
              type="button"
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          }
        </GeneralContainer>
      </Wrapper>
    </>
  );
}

export default CarsList;