
import { useState } from "react";
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
  Button
} from "./CarsItem.styled";
import CardCarModal from "components/Modals/CardCarModal";

const CarsItem = ({ id, img, make, model, year, rentalPrice, address, rentalCompany, type, mileage, accessories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

 return (
    <Container>
      <Content>

        <ThumbImg>
        <Img src={img} alt={`${make} ${model}`} />
        {/* <button
          onClick={!favoriteStatus ? incrementFavorite : decrementFavorite}
          className='buttonHeart'
        >
          {!favoriteStatus ? (
            <HiOutlineHeart className='icon' />
          ) : (
            <HiOutlineHeart
              className='icon'
              style={{ fill: "blue", color: "blue" }}
            />
          )}
        </button> */}
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
          <DescriptionItem>{mileage}</DescriptionItem>
          <DescriptionItem>{accessories[0]}</DescriptionItem>
        </DescriptionList>
      </BlockInfo>
      </Content>
      <Button        
        type="button"
        onClick={toggleModal}      
      >
        Learn more
     </Button>
     {isModalOpen && <CardCarModal onClose={ toggleModal } />}
       
    </Container>
  );
};

export default CarsItem;