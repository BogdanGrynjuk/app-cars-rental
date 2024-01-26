import PropTypes from "prop-types";
import { ErrorMessage, ThumbImg, Section, Btn } from './ErrorDisplay.styled';
import GeneralContainer from 'components/GeneralContainer';

const ErrorDisplay = ({messageError, imageError, showButton, onButtonClick, buttonLabel}) => {
  return (
    <Section>
      <GeneralContainer>
        <ThumbImg>
          <img src={imageError} alt={messageError} />
        </ThumbImg>
        <ErrorMessage>{messageError}</ErrorMessage>
        {showButton && <Btn type="button" onClick={onButtonClick}>{buttonLabel}</Btn>}
      </GeneralContainer>
    </Section>    
  );
}

ErrorDisplay.propTypes = {
  messageError: PropTypes.string.isRequired,
  imageError: PropTypes.string.isRequired,
  showButton: PropTypes.bool,
  onButtonClick: PropTypes.func,
  buttonLabel: PropTypes.string,
};

export default ErrorDisplay;


