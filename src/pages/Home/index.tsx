import { BannerDescription, HomeBanner, HomeContainer, HowItWorksSection, SectionCards } from "./styles";
import bannerHome from "../../assets/img/bannerHome2.png"
import { CaretCircleRight } from "phosphor-react"
import { GetInTouchButton } from "../../styles/global";

export function Home() {
  return(
    <HomeContainer>

      <HomeBanner>
          <BannerDescription>
            <h2>Cuide de sua saúde mental e bem estar</h2>
            <p><CaretCircleRight size={28} color="#050505" weight="light" />Psicoterapia individual - adultos e adolescentes</p>
            <p><CaretCircleRight size={28} color="#050505" weight="light" />Psicoterapia para casais</p>
            <p><CaretCircleRight size={28} color="#050505" weight="light" />Atendimentos presenciais e online</p>
            <div>
              <GetInTouchButton>Entre em contato</GetInTouchButton>
            </div>
          </BannerDescription>
          <img src={bannerHome} alt="" />
      </HomeBanner>

      <HowItWorksSection>
        <h2>Como funciona?</h2>
        <SectionCards>
          <p>Através de sessões semanais, em horário previamente estabelecido e com duração aproximada de 50 minutos.</p>
          <p>A psicoterapia proporciona um ambiente seguro e acolhedor para falar de si, expor pensamentos, sentimentos e o que mais você sentir necessidade. </p>
          <p>O psicólogo é um profissional preparado para acolher, ouvir e orientar, sem julgamentos, aqueles que o procuram. </p>
          <p>Através do avanço das sessões é fortalecido o vínculo entre psicólogo e paciente e vai se desdobrando o trabalho da psicoterapia.</p>
        </SectionCards>
      </HowItWorksSection>

    </HomeContainer>
  )
}