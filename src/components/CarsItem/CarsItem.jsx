
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

const CarsItem = ({img, make, model, year, rentalPrice, address, rentalCompany, type, mileage, accessories}) => {
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
        onClick={() => console.log("toggleModal")}
      
      >
        Learn more
      </Button>
       
    </Container>
      
  )
};

export default CarsItem;