import CarItem from "components/CarItem";
import { List, TitleList, Wrapper } from "./CarsList.styled";

import { useDispatch } from "react-redux";
import { setActiveCard } from "redux/favoriteSlice";
import { useState, useEffect } from "react";
import { scrollToTop } from "helpers/scrollToTop";

const CarsList = ({ cars }) => {
  const [activeCarItem, setActiveCarItem] = useState(0);
  const dispatch = useDispatch();

  const handleShowCardCar = (car, index) => {
    dispatch(setActiveCard(car));
    setActiveCarItem(index);
  };
  
  useEffect(() => {
    dispatch(setActiveCard(cars[0]));
    setActiveCarItem(0);
  }, [cars, dispatch]);

  return (
    <>
      <Wrapper>
        <TitleList>Favorite Cars</TitleList>
        <List>
          {cars.map((car, index) => (
            <CarItem
              isActive={activeCarItem === index}
              key={car.id}
              car={car}
              isItemList={true}
              showCardCar={() => {
                handleShowCardCar(car, index);
                scrollToTop();
              }}             
            />
          ))}
        </List>
      </Wrapper>
    </>
  );
};

export default CarsList;