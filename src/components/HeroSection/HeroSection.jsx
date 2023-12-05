import GeneralContainer from "components/GeneralContainer";
import Logotype from "components/Logo/Logo";
import { Section, Content, TextMain, TextSecondary } from "./HeroSection.styled";

const HeroSection = () => {
  return (
    <Section>
      <GeneralContainer>
        <Content>
          <TextMain><Logotype /> - is for those who value service and comfort</TextMain>
          <TextSecondary>Car rental and rental in Ukraine</TextSecondary>
        </Content>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;