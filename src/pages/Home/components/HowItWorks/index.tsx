import { CardItem, HowItWorksSection, SectionCards } from "./styles";

export function HowItWorks() {
 
  return (
    <HowItWorksSection>
        <h2>Como funciona a psicoterapia?</h2>
        <SectionCards>            
          <CardItem>Através de sessões semanais, em horário previamente estabelecido e com duração aproximada de 50 minutos.</CardItem>                    
          <CardItem>A psicoterapia proporciona um ambiente seguro e acolhedor para falar de si, expor pensamentos, sentimentos e o que mais sentir necessidade. </CardItem>    
          <CardItem>O psicólogo é um profissional preparado para acolher, ouvir e orientar, sem julgamentos, aqueles que o procuram. </CardItem>
          <CardItem>Através do avanço das sessões é fortalecido o vínculo entre psicólogo e paciente e vai se desdobrando o trabalho da psicoterapia.</CardItem>           
        </SectionCards>
      </HowItWorksSection>
  )
}