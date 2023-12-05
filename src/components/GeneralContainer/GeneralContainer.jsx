import PropTypes from "prop-types";
import { Container } from "./GeneralContainer.styled";

const GeneralContainer = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

GeneralContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralContainer;