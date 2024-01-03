import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

import {
  Container,
  Content,
  ThumbImg,
  Img,
  BlockInfo,
  BasicInfoWrapper,
  BasicInfoText,
  DescriptionList,
  DescriptionItem,
  Button,
  BtnToggleFavorite
} from "./CarsItem.styled";
import CardCarModal from "components/Modals/CardCarModal";

import { selectFavorites } from "redux/selectors";
import { addFavorite, removeFavorite } from "redux/favoriteSlice";


const CarsItem = ({ id, img, make, model, year, rentalPrice, address, rentalCompany, type, mileage, accessories }) => {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);
  const dispatch = useDispatch();
  
  const toggleFavorite = () => {
    isFavorite ? dispatch(removeFavorite(id)) : dispatch(addFavorite(id))
  };

  return (
    <Container>
      <Content>
        <ThumbImg>
          <BtnToggleFavorite isFavorite={isFavorite} onClick={toggleFavorite}>
           {isFavorite ? <IoHeartSharp /> : <IoHeartOutline />}
          </BtnToggleFavorite>             
          <Img src={img} alt={`${make} ${model}`} loading="lazy"/>
        </ThumbImg>

        <BlockInfo>
          <BasicInfoWrapper>
            <BasicInfoText>
              {make} <span>{model}</span>, {year}
            </BasicInfoText>
            <BasicInfoText>{rentalPrice}</BasicInfoText>
          </BasicInfoWrapper>
      
          <DescriptionList>
            <DescriptionItem>{address.split(',')[1]}</DescriptionItem>
            <DescriptionItem>{address.split(',')[2]}</DescriptionItem>
            <DescriptionItem>{rentalCompany}</DescriptionItem>
            <DescriptionItem>{type}</DescriptionItem>
            <DescriptionItem>{model}</DescriptionItem>
            <DescriptionItem>{id}</DescriptionItem>
            <DescriptionItem>{accessories[0]}</DescriptionItem>
          </DescriptionList>
        </BlockInfo>
      </Content>
      <Button
        type="button"
        onClick={openModal}
      >
        Learn more
      </Button>
      {isModalOpen && <CardCarModal onClose={closeModal} carId={id} />}
       
    </Container>
  );
};

CarsItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  rentalCompany: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CarsItem;