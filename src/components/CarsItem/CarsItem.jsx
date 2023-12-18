
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
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Container>
      <Content>
        <ThumbImg>
          <Img src={img} alt={`${make} ${model}`} />
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
        onClick={openModal}
      >
        Learn more
      </Button>
      {isModalOpen && <CardCarModal onClose={closeModal} carId={id} />}
       
    </Container>
  );
};

export default CarsItem;