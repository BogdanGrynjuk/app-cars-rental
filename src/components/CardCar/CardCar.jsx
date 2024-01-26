import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { BasicInfoText, BasicInfoWrapper, BlockInfo, DescriptionItem, DescriptionList, Img, ThumbImg, DescriptionText, Wrapper, SecondaryInfoWrapper, SecondaryInfoTitle, RentalConditionsList, RentalConditionsItem, BlockButtons, BtnRentalCar, BtnBack, IconArrowUp, TitleCard } from "./CardCar.styled";

import { selectAllCars } from "redux/selectors";

const CardCar = ({ carId, onClose, isFavorite, showTitle }) => {

  const cars = useSelector(selectAllCars);
  
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
    rentalConditions,
    mileage,
  } = cars.find(car => car.id === carId);

  const conditions = rentalConditions.split('\n');
  const age = conditions[0].split(':')[1];
  
  return (
    <Wrapper>
      {showTitle && <TitleCard>Car details</TitleCard>}

      <ThumbImg isFavorite={isFavorite}>
        <Img src={img} alt={`${make} ${model}`} loading="lazy"/>
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
            {accessories.map((accessory, index) =>
              <DescriptionItem key={index}>{accessory}</DescriptionItem>)
            }
          </DescriptionList>
          <DescriptionList>
            {functionalities.map((functionality, index) =>
              <DescriptionItem key={index}>{functionality}</DescriptionItem>)
            }
          </DescriptionList>

        </SecondaryInfoWrapper>

        <SecondaryInfoWrapper>
          <SecondaryInfoTitle>
            Rental Conditions:
          </SecondaryInfoTitle>
          <RentalConditionsList>
            <RentalConditionsItem>{conditions[0].split(':', 1)}: <span>{age}</span></RentalConditionsItem>
            <RentalConditionsItem>{conditions[1]}</RentalConditionsItem>
            <RentalConditionsItem>{conditions[2]}</RentalConditionsItem>
            <RentalConditionsItem>Mileage: <span>{mileage.toLocaleString('en-US')}</span></RentalConditionsItem>
            <RentalConditionsItem>Price: <span>{rentalPrice.slice(1)}$</span></RentalConditionsItem>
          </RentalConditionsList>
        </SecondaryInfoWrapper>

        <BlockButtons>
          <BtnRentalCar href='tel:+380730000000'>Rental car</BtnRentalCar>
          <BtnBack type="button" onClick={onClose}>
            <IconArrowUp size={18} />
          </BtnBack>
        </BlockButtons>

      </BlockInfo>
    </Wrapper>
  );
};

CardCar.propTypes = {
  carId: PropTypes.number.isRequired,
  onClose: PropTypes.func,
  isFavorite: PropTypes.bool,
  showTitle: PropTypes.bool,
};

export default CardCar;
