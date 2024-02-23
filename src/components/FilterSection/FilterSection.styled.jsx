import styled from "@emotion/styled";
import { Field, Form, ErrorMessage } from "formik";


export const Wrapper = styled.div`  
  width: 100%;  
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope}; 
`; 


export const FormikForm = styled(Form)`
  width: 100%;
  margin: 18px auto 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  @media screen and (${p => p.theme.mq.tablet}) {
    flex-direction: row;       
  };

   @media screen and (${p => p.theme.mq.desktop}) {    
    margin-bottom: 50px;
    width: 80%;
  };
`;


export const FormikControl = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;


export const Label = styled.label`  
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 18px;
  color: ${p => p.theme.colors.grey};
`;

export const GroupInputs = styled.div`
  display: flex;
  height: 48px;
  border-radius: 12px; 
  box-shadow: rgba(0, 0, 0, 0.5) 2px 3px 5px;
  overflow: hidden;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 2px 8px 5px;
  };
`;

export const GroupLabel = styled(Label.withComponent('p'))``;

export const Input = styled(Field)`
  width: 100%; 
  outline: none;
  padding: 14px;
  background-color: rgba(247, 247, 251, 1);
  border: none;
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 20px;
  color: ${p => p.theme.colors.black};

  &::placeholder{   
    color: ${p => p.theme.colors.black};
    opacity: 1;
  };

  &[name="mileage.from"]{
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.lighteGrey};
  };
  
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const BtnControl = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;
  align-self: flex-end;
`

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 24px;
  box-shadow: rgba(0, 0, 0, 0.5) 2px 3px 5px;
  -webkit-transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.lighteBlue};
    box-shadow: rgba(0, 0, 0, 0.5) 2px 8px 5px;
  };
`;


export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  width: 100%;
  top: calc(100% + 8px);
  padding: 14px;
  text-align: left; 
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 16px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.5) 2px 8px 5px;
  color: rgba(18, 20, 23, 0.5);
  background-color: rgba(247, 247, 251, 1);
  z-index: 1000;  
`;



