import React from 'react'
import PropTypes from 'prop-types'
import { Description, Icon, NumberStep, Title, Wrapper } from './RentalStep.styled'

const RentalStep = ({id, isActive, icon, title, description, step}) => {
  return (
    <Wrapper id={id} isActive={isActive}>
      <Title><span>{title}</span></Title>
      <Icon>
        <img src={icon} alt={title}/>
      </Icon>
      <Description>{description}</Description> 
      <NumberStep>{step}</NumberStep>
    </Wrapper>
  )
}

RentalStep.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

}

export default RentalStep;
