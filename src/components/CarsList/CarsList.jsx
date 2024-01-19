import CarItem from "components/CarItem";
import { List, TitleList, Wrapper } from "./CarsList.styled";

import { useDispatch } from "react-redux";
import { setActiveCard } from "redux/favoriteSlice";

const CarsList = ({ cars }) => {
  
  const dispatch = useDispatch();

  const handleShowCardCar = (car, idx) => {    
    dispatch(setActiveCard(car));    
  }

  

  return (
    <>
      <Wrapper>
        <TitleList>Favorite Cars</TitleList>
        <List>
          {cars.map((car, idx) => (
            <CarItem
              key={car.id}
              car={car}
              isItemList={true}
              showCardCar={() => handleShowCardCar(car, idx)}
             
             
            />
          ))}

        </List>
      </Wrapper>
    </>
  );
};

export default CarsList;