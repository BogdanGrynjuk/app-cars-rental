import styled from "@emotion/styled";
import { Form } from "formik";


export const Wrapper = styled.div`  
  width: 100%;  
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope}; 
`; 


export const FormikForm = styled(Form)`
  width: 100%;
  margin: 18px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  @media screen and (${p => p.theme.mq.tablet}) {
    flex-direction: row;
  }
`;


export const FormikControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;


export const Label = styled.label`  
font-size: ${p => p.theme.fontSizes.xs};
font-weight: 500;
line-height: 18px;
color: ${p => p.theme.colors.grey};
`;

