import React from 'react';
import { useNavigate } from 'react-router-dom';

import imageError from '../images/image-page-not-found.svg';

import ErrorDisplay from 'components/ErrorDisplay';

const ErrorPage = () => {
  const navigate = useNavigate();
  const messageError = "Unfortunately, on the other hand, as you were joking, it was not found. Please, check the correct URL or speed up your navigation to find other information.";
  const btnErrorLabel = "Back to Home";
  const onClickBtnError = () => navigate('/');

  return (
    <>
      <ErrorDisplay imageError={imageError} messageError={messageError} showButton={true} onButtonClick={onClickBtnError} buttonLabel={ btnErrorLabel } />
    </>
  )
}

export default ErrorPage;