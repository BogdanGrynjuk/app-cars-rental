import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "redux/operations";
import { selectCars } from "redux/selectors";

import CarsItem from "components/CarsItem";
import { Wrapper, List, Button } from "./CarsList.styled";
import GeneralContainer from "components/GeneralContainer";

const CarsList = () => {
  const [visibleCards, setVisibleCards] = useState(8);
  const cars = useSelector(selectCars);
  const carsListRef = useRef(null);
  const dispatch = useDispatch();
  
  const handleLoadMore = async () => {
    await setVisibleCards(prevState => prevState + 8);
    const lastElement = carsListRef.current.lastElementChild;
    lastElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    
  };

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch])

  return (
    <Wrapper ref={carsListRef}>
      <GeneralContainer>
        <List>
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
  );
}

export default CarsList;