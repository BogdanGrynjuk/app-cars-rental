import CarItem from "components/CarItem";
import { List } from "./CarsList.styled";


const CarsList = ({cars}) => {

  return (
    <>      
      <List>
        {cars.map(car => (
          <CarItem
            key={car.id}
            car={car}
            isItemList={true}
          />
        ))}

      </List>
    </>
  );
};

export default CarsList;