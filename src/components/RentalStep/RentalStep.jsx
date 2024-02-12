import React from 'react'
import PropTypes from 'prop-types'
import { Description, Icon, TextBlock, Title, Wrapper } from './RentalStep.styled'

const RentalStep = ({ id, isActive, icon, title, description }) => {
  return (
    <Wrapper id={id} isActive={isActive}>
      <Icon>
        <img src={icon} alt={title} />
      </Icon>
      <TextBlock>
        <Title><span>{title}</span></Title>
        <Description>{description}</Description>
      </TextBlock>
    </Wrapper>
  );
};

RentalStep.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

}

export default RentalStep;
