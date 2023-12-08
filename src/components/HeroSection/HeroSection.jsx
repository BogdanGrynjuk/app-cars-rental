import GeneralContainer from "components/GeneralContainer";
import Logotype from "components/Logo/Logo";
import { Section, Content, TextMain, TextSecondary, DecorLine, Btn } from "./HeroSection.styled";

const HeroSection = () => {
  return (
    <Section>
      <GeneralContainer>
        <Content>
          <TextMain><Logotype /> - is for those who value service and comfort</TextMain>
          <DecorLine/>
          <TextSecondary>Car rental in Ukraine</TextSecondary>
          <Btn type="button">Choose auto</Btn>
        </Content>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;