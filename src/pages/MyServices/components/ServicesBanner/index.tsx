import { ServiceBannerDescription, ServicesBannerCard, ServicesBannerContainer, ServicesBannerContent } from "./styles";
import imgAtendimento from '../../../../assets/img/banner-atendimento.png'
import { WhatsAppButton } from "../../../../components/Buttons";
import { CaretCircleRight } from "phosphor-react"

export function ServicesBanner() {
  return (
    <ServicesBannerContainer>
      <ServicesBannerContent>
        <img src={imgAtendimento} alt="" />
        
        <ServiceBannerDescription>
          <h2>Atendimento de qualquer lugar</h2>
          <ServicesBannerCard>
            <h3>Atendimento remoto</h3>
            <p><CaretCircleRight size={20} color="#050505" weight="light" />Algum conteúdo</p>
          </ServicesBannerCard>
          <ServicesBannerCard>
            <h3>Atendimento presencial</h3>
            <p><CaretCircleRight size={20} color="#050505" weight="light" />Algum conteúdo</p>
          </ServicesBannerCard>
          <WhatsAppButton />

        </ServiceBannerDescription>


      </ServicesBannerContent>      
    </ServicesBannerContainer>
  )
}