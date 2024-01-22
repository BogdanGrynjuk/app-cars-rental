import PropTypes from "prop-types";
import { useEffect, useState } from "react";
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
} from "./CarItem.styled";
import CardCarModal from "components/Modals/CardCarModal";

import { selectFavoriteCarsId } from "redux/selectors";
import { addFavorite, removeFavorite } from "redux/favoriteSlice";

const CarsItem = ({ car, isItemGrid, isItemList, showCardCar, isActive }) => {
  const { id, img, make, model, year, rentalPrice, address, rentalCompany, type, accessories } = car;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const favorites = useSelector(selectFavoriteCarsId);
  const isFavorite = favorites.includes(id);

  const dispatch = useDispatch();
  
  const toggleFavorite = () => {
    isFavorite ? dispatch(removeFavorite(id)) : dispatch(addFavorite(id))
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <Container
      isActive={isActive}
      isItemGrid={isItemGrid}
      isItemList={isItemList}
      onClick={viewportWidth < 768 && isItemList
        ? openModal
        : showCardCar
      }
    >
      <Content>
        <ThumbImg>
          <BtnToggleFavorite isFavorite={isFavorite} onClick={toggleFavorite}>
            {isFavorite ? <IoHeartSharp /> : <IoHeartOutline />}
          </BtnToggleFavorite>
          <Img src={img} alt={`${make} ${model}`} loading="lazy" />
        </ThumbImg>

        <BlockInfo>
          <BasicInfoWrapper>
            <BasicInfoText>
              {make} <span>{model}</span>, {year}
            </BasicInfoText>
            <BasicInfoText>{rentalPrice}</BasicInfoText>
          </BasicInfoWrapper>

          {!isItemList &&
            <DescriptionList>
              <DescriptionItem>{address.split(',')[1]}</DescriptionItem>
              <DescriptionItem>{address.split(',')[2]}</DescriptionItem>
              <DescriptionItem>{rentalCompany}</DescriptionItem>
              <DescriptionItem>{type}</DescriptionItem>
              <DescriptionItem>{model}</DescriptionItem>
              <DescriptionItem>{id}</DescriptionItem>
              <DescriptionItem>{accessories[0]}</DescriptionItem>
            </DescriptionList>
          }
         
        </BlockInfo>
      </Content>
      {!isItemList &&
        <Button
          type="button"
          onClick={openModal}
        >
          Learn more
        </Button>
      }
      {isModalOpen && <CardCarModal onClose={closeModal} carId={id} />}
       
    </Container>
  );
};

CarsItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isItemGrid: PropTypes.bool,
  isItemList: PropTypes.bool,
  showCardCar: PropTypes.func,
};

export default CarsItem;