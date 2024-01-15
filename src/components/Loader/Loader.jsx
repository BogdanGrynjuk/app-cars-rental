import { Oval } from 'react-loader-spinner';
import { Text, Content, Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <Content>
        <Text>Loading...</Text>
         <Oval
        ariaLabel="loading-indicator"
        height={150}
        width={150}
        strokeWidth={5}
        strokeWidthSecondary={3}
        color="rgba(11, 68, 205, 1)"
        secondaryColor="rgba(52, 112, 255, 1)"
        visible={true}
      />
      </Content>
    </Wrapper>
  );
};

export default Loader;
