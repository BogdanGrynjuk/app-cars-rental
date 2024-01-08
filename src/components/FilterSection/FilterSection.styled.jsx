import styled from "@emotion/styled";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FormikForm =styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const FormikControl = styled.div`
  display: flex;
  flex-direction: column;
`;


export const ListOptions = styled.datalist`
  height: 130px;
`