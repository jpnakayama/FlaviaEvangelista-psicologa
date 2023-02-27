import * as Accordion from '@radix-ui/react-accordion';
import { AnswerItem, FAQSection, QuestionItem } from './styles';
import { CaretDown } from "phosphor-react"

export function FAQAccordion() {
  return (
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
  )
}