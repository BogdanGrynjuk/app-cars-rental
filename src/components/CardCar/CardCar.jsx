import { selectCars } from "redux/selectors";
import { BasicInfoText, BasicInfoWrapper, BlockInfo, DescriptionItem, DescriptionList, Img, ThumbImg, DescriptionText } from "./CardCar.styled";
import { useSelector } from "react-redux";


const CardCar = ({ carId }) => {

  const cars = useSelector(selectCars);

  const {
    address,
    id,
    img,
    make,
    model,
    year,
    type,
    fuelConsumption,
    engineSize,
    description,
    
  } = cars.find(car => car.id === carId);
  
  return (
    <>
      <ThumbImg>
        <Img src={img} alt={`${make} ${model}`} />
      </ThumbImg>

      <BlockInfo>
        <BasicInfoWrapper>
          <BasicInfoText>
            {make} <span>{model}</span>, {year}
          </BasicInfoText>
            
        </BasicInfoWrapper>
      
        <DescriptionList>
          <DescriptionItem>{address.split(',')[1]}</DescriptionItem>
          <DescriptionItem>{address.split(',')[2]}</DescriptionItem>
          <DescriptionItem>Id: {id}</DescriptionItem>
          <DescriptionItem>Year: {year}</DescriptionItem>
          <DescriptionItem>Type: {type}</DescriptionItem>
          <DescriptionItem>Fuel Consumption: {fuelConsumption}</DescriptionItem>
          <DescriptionItem>Engine Size: {engineSize}</DescriptionItem>
        </DescriptionList>

        <DescriptionText>{description}</DescriptionText>
        

      </BlockInfo>
    </>
  );
};

export default CardCar;