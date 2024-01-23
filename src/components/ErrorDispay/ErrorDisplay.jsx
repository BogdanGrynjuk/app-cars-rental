import PropTypes from "prop-types";
import { ErrorMessage, ThumbImg, Section } from './ErrorDisplay.styled';
import GeneralContainer from 'components/GeneralContainer';

const ErrorDisplay = ({messageError, imageError}) => {
  return (
    <Section>
      <GeneralContainer>
        <ThumbImg>
          <img src={imageError} alt={messageError} />
        </ThumbImg>
        <ErrorMessage>{messageError}</ErrorMessage>        
      </GeneralContainer>
    </Section>    
  );
}

ErrorDisplay.propTypes = {
  messageError: PropTypes.string.isRequired,
  imageError: PropTypes.string.isRequired
};

export default ErrorDisplay;


