import PropTypes from "prop-types";
import { Logo } from "./Logo.styled";

const Logotype = ({isLight}) => {
  return (
    <Logo isLight={isLight}>Car<span>go</span></Logo>
  );
};

Logotype.propTypes = {
  isLight: PropTypes.bool,
}

export default Logotype;