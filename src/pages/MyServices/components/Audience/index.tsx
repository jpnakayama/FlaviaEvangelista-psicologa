import { AudienceSectionCard, AudienceSectionCardContent, AudienceSectionContainer, AudienceSectionContent } from "./styles";
import adolescente from 'assets/img/atendimento-adolescente.jpg'
import adulto from 'assets/img/atendimento-adulto.jpg'
import casal from 'assets/img/atendimento-casal.jpg'

export function Audience() {

  return(
    <AudienceSectionContainer>
      <AudienceSectionContent>
        <h2>PÚBLICO ATENDIDO</h2>
        <AudienceSectionCard>
          <h3>ADOLESCENTES</h3>
          <AudienceSectionCardContent>
            <p> A adolescência é uma fase de intensas mudanças, tanto físicas quanto emocionais, além de um período de descobertas e descolamento das figuras de identificação inicial. Todas essas transformações, além de outras situações do convívio social com os pares e as diversas escolhas inerentes a idade, podem levar ao aumento da insegurança, ansiedade e angústia. A psicoterapia é uma ferramenta importante de apoio ao adolescente no caminho do amadurecimento e do autoconhecimento.</p>
            <img src={adolescente} alt="" />
          </AudienceSectionCardContent>
        </AudienceSectionCard>,
        <AudienceSectionCard>
          <h3>ADULTOS</h3>
          <AudienceSectionCardContent>
            <img src={adulto} alt="" />
            <p> A psicoterapia proporciona um ambiente acolhedor e seguro para falar de si, expor inseguranças, medos e dificuldades cotidianas. Através do vínculo e da fala do paciente o psicólogo está capacitado para reconhecer sintomas e identificar e trabalhar padrões de comportamentos repetitivos e que impactam de forma negativa a rotina do paciente.</p>
          </AudienceSectionCardContent>
        </AudienceSectionCard>,
        <AudienceSectionCard>
          <h3>CASAIS</h3>
          <AudienceSectionCardContent>
            <p> Com o objetivo de melhorar a qualidade do relacionamento o casal pode optar pela psicoterapia de casal. A psicoterapia de casal proporciona um ambiente seguro e estável para que o casal possa discutir seus conflitos, necessidades e demandas afetivas e cotidianas com a mediação do psicoterapeuta.</p>
            <img src={casal} alt="" />
          </AudienceSectionCardContent>
        </AudienceSectionCard>
      </AudienceSectionContent>
    </AudienceSectionContainer>
  )
}