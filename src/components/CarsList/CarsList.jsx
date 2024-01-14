import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";

import CarsItem from "components/CarsItem";
import GeneralContainer from "components/GeneralContainer";
import Loader from "components/Loader";

import { Wrapper, List, Button } from "./CarsList.styled";

const CarsList = ({cars}) => {
  const [visibleCards, setVisibleCards] = useState(8); 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
    
  const carsListRef = useRef(null);
    
  const handleLoadMore = async () => {
    await setVisibleCards(prevState => prevState + 8);
    const newlyLoadedElements = Array.from(carsListRef.current.children).slice(-8)[0];
    const headerHeight = document.getElementById('app-bar').offsetHeight;
    const offset = headerHeight + 10;

    if (newlyLoadedElements) {
      const elementPosition = newlyLoadedElements.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && !error && <Loader />}
      <Wrapper >
        <GeneralContainer>
          <List ref={carsListRef}>
            {cars.slice(0, visibleCards).map(car => (
              <CarsItem key={car.id} car={car} />
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
};

export default CarsList;