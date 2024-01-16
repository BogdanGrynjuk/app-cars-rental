import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";

import CarsItem from "components/CarItem";
import GeneralContainer from "components/GeneralContainer";
import Loader from "components/Loader";

import { Wrapper, Grid, Button } from "./CarsGrid.styled";

const CarsGrid = ({cars}) => {
  const [visibleCards, setVisibleCards] = useState(8); 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
    
  const carsGridRef = useRef(null);
    
  const handleLoadMore = async () => {
    await setVisibleCards(prevState => prevState + 8);
    const newlyLoadedElements = Array.from(carsGridRef.current.children).slice(-8)[0];
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
          <Grid ref={carsGridRef}>
            {cars.slice(0, visibleCards).map(car => (
              <CarsItem
                key={car.id}
                car={car}
                isItemGrid={true}
              />
            ))}
          </Grid>
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

export default CarsGrid;