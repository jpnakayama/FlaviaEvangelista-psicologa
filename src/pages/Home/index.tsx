import { HomeContainer } from "./styles";
import { FAQAccordion } from "./components/FAQAccordion";
import { IsPsychoTherapyForMe } from "./components/IsPsychoTherapyForMe";
import { HomeBanner } from "./components/Banner";
import { HowItWorks } from "./components/HowItWorks";

export function Home() {
  return(
    <HomeContainer>
      <HomeBanner />
      <HowItWorks />   
      <IsPsychoTherapyForMe />
      <FAQAccordion />
    </HomeContainer>
  )
}