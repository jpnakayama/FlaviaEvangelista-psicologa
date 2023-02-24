import { ServicesCards, ServicesContainer, ServicesContent, ServicesElement } from "./styles";

export function MyServices() {
  return (
    <ServicesContainer>
      <ServicesContent>
        <div>
          <h2>ATENDIMENTO</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate, aliquam cumque in nihil minima iste voluptas deserunt</p>
        </div>
        <ServicesCards>
          <ServicesElement>
            <h3>Adolescentes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate, aliquam cumque in nihil minima iste voluptas deserunt</p>
          </ServicesElement>
          <ServicesElement>
            <h3>Adultos</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate, aliquam cumque in nihil minima iste voluptas deserunt</p>
          </ServicesElement>
          <ServicesElement>
            <h3>Casais</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolor dignissimos fugiat et ipsa ad magnam consequatur cupiditate, aliquam cumque in nihil minima iste voluptas deserunt</p>
          </ServicesElement>
        </ServicesCards>

      </ServicesContent>

    </ServicesContainer>
  )
}