import { ServiceBannerDescription, ServicesBannerCard, ServicesBannerContainer, ServicesBannerContent } from "./styles";
import imgAtendimento from 'assets/img/banner-atendimento.png'
import { WhatsAppButton } from "components/Buttons";
import { CaretCircleRight } from "phosphor-react"

export function ServicesBanner() {
  return (
    <ServicesBannerContainer>
      <ServicesBannerContent>
        <img src={imgAtendimento} alt="" />
        
        <ServiceBannerDescription>
          <h2>Formas de atendimento</h2>
          <ServicesBannerCard>
            <h3>Atendimento remoto</h3>
            <p><CaretCircleRight size={20} color="#050505" weight="light" />Transpõe a barreira geográfica - não há necessidade de estarmos na mesma cidade</p>
            <p><CaretCircleRight size={20} color="#050505" weight="light" />Poupa deslocamentos para realização da sessão, proporcionando economia de tempo</p>
            <p><CaretCircleRight size={20} color="#050505" weight="light" />Requer aparelho de celular ou computador, além de acesso a internet</p>
          </ServicesBannerCard>
          <ServicesBannerCard>
            <h3>Atendimento presencial</h3>
            <p><CaretCircleRight size={20} color="#050505" weight="light" />São realizados na cidade de Cosmópolis/SP.</p>
            <p><CaretCircleRight size={20} color="#050505" weight="light" />Local confortável e de fácil acesso.</p>
            <p><CaretCircleRight size={20} color="#050505" weight="light" />Recomendado para quem está na mesma cidade ou região.</p>
          </ServicesBannerCard>
          <WhatsAppButton />

        </ServiceBannerDescription>


      </ServicesBannerContent>      
    </ServicesBannerContainer>
  )
}