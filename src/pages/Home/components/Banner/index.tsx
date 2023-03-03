import { BannerContainer, BannerContent, BannerDescription, BannerNameSection } from "./styles";
import bannerHome from "assets/img/banner-home.png"
import { CaretCircleRight } from "phosphor-react"
import { WhatsAppButton } from "components/Buttons";

export function HomeBanner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerDescription>
          <BannerNameSection>
            <h1>Flávia Barbosa Evangelista</h1>
            <p>Psicóloga Clínica | CRP 06/109482</p>   
          </BannerNameSection>
          <h2>Cuide de sua saúde mental e bem estar</h2>
          <p><CaretCircleRight size={20} color="#050505" weight="light" />Psicoterapia individual</p>
          <p><CaretCircleRight size={20} color="#050505" weight="light" />Atendimento a adultos e adolescentes</p>
          <p><CaretCircleRight size={20} color="#050505" weight="light" />Psicoterapia para casais</p>
          <p><CaretCircleRight size={20} color="#050505" weight="light" />Atendimentos presenciais e online</p>
          <WhatsAppButton />
        </BannerDescription>
        <img src={bannerHome} alt="" />
      </BannerContent>
    </BannerContainer>
  )
}