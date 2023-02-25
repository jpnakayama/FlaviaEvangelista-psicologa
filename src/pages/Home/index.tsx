import { AnswerItem, BannerDescription, FAQSection, ForWhomIsTheTherapy, HomeBanner, HomeContainer, HowItWorksSection, QuestionItem, SectionCards, TherapyContent, TherapyText } from "./styles";
import bannerHome from "../../assets/img/bannerHome2.png"
import mentalHealth from "../../assets/img/saudeMental.jpg"
import { CaretCircleRight, CaretDown } from "phosphor-react"
import * as Accordion from '@radix-ui/react-accordion';
import { WhatsAppButton } from "../../components/Buttons";

export function Home() {
  return(
    <HomeContainer>

      <HomeBanner>
          <BannerDescription>
            <h2>Cuide de sua saúde mental e bem estar</h2>
            <p><CaretCircleRight size={28} color="#050505" weight="light" />Psicoterapia individual - adultos e adolescentes</p>
            <p><CaretCircleRight size={28} color="#050505" weight="light" />Psicoterapia para casais</p>
            <p><CaretCircleRight size={28} color="#050505" weight="light" />Atendimentos presenciais e online</p>
            <WhatsAppButton />

          </BannerDescription>
          <img src={bannerHome} alt="" />
      </HomeBanner>

      <HowItWorksSection>
        <h2>Como funciona a psicoterapia?</h2>
        <SectionCards>
          <p>Através de sessões semanais, em horário previamente estabelecido e com duração aproximada de 50 minutos.</p>
          <p>A psicoterapia proporciona um ambiente seguro e acolhedor para falar de si, expor pensamentos, sentimentos e o que mais você sentir necessidade. </p>
          <p>O psicólogo é um profissional preparado para acolher, ouvir e orientar, sem julgamentos, aqueles que o procuram. </p>
          <p>Através do avanço das sessões é fortalecido o vínculo entre psicólogo e paciente e vai se desdobrando o trabalho da psicoterapia.</p>
        </SectionCards>
      </HowItWorksSection>

      <ForWhomIsTheTherapy>
        <h2>Para quem é a psicoterapia?</h2>
        <TherapyContent>
          <TherapyText>Se você sente desinteresse em assuntos e tarefas do cotidiano, desânimo constante e tem dificuldade de manter o foco e a atenção na conclusão de suas atividades a psicoterapia pode te auxiliar.</TherapyText>
          <div>
            <img src={mentalHealth} alt="" />
            <TherapyText>Alterações no sono, alimentação e humor também são sinais de atenção para o cuidado psicológico. </TherapyText>
          </div>
          <TherapyText>Estar desconfortável consigo mesmo, com suas características físicas ou capacidades de trabalho e de seu relacionar com as pessoas são igualmente campo de atuação da psicoterapia.</TherapyText>

        </TherapyContent>
      </ForWhomIsTheTherapy>

      <FAQSection>
        <h2>Perguntas frequentes</h2>
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.Header>
              <QuestionItem>Como agendar uma sessão? <CaretDown size={32} weight="light" /></QuestionItem>
            </Accordion.Header>
            <AnswerItem>Entre em contato através de ligação ou WhatsAPP. juntos iremos definir uma data e horário em comum para a realização da primeira sessão. Informe preferência de dia, horário ou período para facilitar o agendamento.</AnswerItem>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Header>
              <QuestionItem>Como funciona a primeira sessão? <CaretDown size={32} weight="light" /> </QuestionItem>
            </Accordion.Header>
            <AnswerItem>Na data e horário previamente agendada irá ocorrer a primeira sessão. Nesta ocasião irei ouvir um pouco de sua história e a demanda que lhe trouxe até a psicoterapia. Trataremos também do funcionamento das sessões, dúvidas, valores e expectativas em relação ao trabalho.</AnswerItem>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <Accordion.Header>
              <QuestionItem>Como funciona o atendimento online? <CaretDown size={32} weight="light" /> </QuestionItem>
            </Accordion.Header>
            <AnswerItem>O atendimento online é realizado em horário pré-definido através de chamada de vídeo via WhatsAPP. É necessário estar em um local reservado para que possa ser mantido o sigilo da sessão. Recomendo que o local seja agradável e silencioso, para que possa se sentir à vontade. Os atendimentos online são autorizados e regulamentados pela Resolução 011/2018 do conselho Federal de Psicologia.</AnswerItem>
          </Accordion.Item>
          <Accordion.Item value="item-4">
            <Accordion.Header>
              <QuestionItem>Há atendimentos por plano de saúde? <CaretDown size={32} weight="light" /> </QuestionItem>
            </Accordion.Header>
            <AnswerItem>Os atendimentos são realizados na modalidade particular. Você pode verificar a possibilidade de obter reembolso do valor das sessões com o plano, de acordo com a RESOLUÇÃO NORMATIVA - RN Nº 465 DE 24 DE FEVEREIRO DE 2021 da Agência Nacional de Saúde. Neste caso irei fornecer toda documentação necessária.</AnswerItem>
          </Accordion.Item>          
        </Accordion.Root>
      </FAQSection>

    </HomeContainer>
  )
}