import { selectCars } from "redux/selectors";
import { BasicInfoText, BasicInfoWrapper, BlockInfo, DescriptionItem, DescriptionList, Img, ThumbImg, DescriptionText, Wrapper, SecondaryInfoWrapper, SecondaryInfoTitle } from "./CardCar.styled";
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
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    mileage,
  } = cars.find(car => car.id === carId);
  
  return (
    <Wrapper>
      <ThumbImg>
        <Img src={img} alt={`${make} ${model}`} />
      </ThumbImg>

      <BlockInfo>
        <BasicInfoWrapper>
          <BasicInfoText>
            {make} <span>{model}</span>, {year}
          </BasicInfoText>
      
          <DescriptionList>
            <DescriptionItem>{address.split(',')[1]}</DescriptionItem>
            <DescriptionItem>{address.split(',')[2]}</DescriptionItem>
            <DescriptionItem>Id: {id}</DescriptionItem>
            <DescriptionItem>Year: {year}</DescriptionItem>
            <DescriptionItem>Type: {type}</DescriptionItem>
          
          </DescriptionList>
          <DescriptionList>
            <DescriptionItem>Fuel Consumption: {fuelConsumption}</DescriptionItem>
            <DescriptionItem>Engine Size: {engineSize}</DescriptionItem>
          </DescriptionList>

          <DescriptionText>{description}</DescriptionText>
        </BasicInfoWrapper>
        

        <SecondaryInfoWrapper>
          <SecondaryInfoTitle>
            Accessories and functionalities:
          </SecondaryInfoTitle>
           <DescriptionList>
            {accessories.map(accessory => 
              <DescriptionItem>{accessory}</DescriptionItem>)
            }
          </DescriptionList>
           <DescriptionList>
            {functionalities.map(functionality => 
              <DescriptionItem>{functionality}</DescriptionItem>)
            }
          </DescriptionList>

        </SecondaryInfoWrapper>

      </BlockInfo>
    </Wrapper>
  );
};

export default CardCar;