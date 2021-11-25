import { Container, Content, Title, ImageContainer, Image } from "./styles"
import CompanyDesk from "../../assets/images/companys/CompanyDesk.png"

export const About = () => {
  return (
    <Container id="about-container">
      <Content id="about-content">
        <Title id="about-title">
          <h2>Olá, somos A Jüssi</h2>
          <p>
            A Jüssi é uma agência integrante do grupo global WPP que vem há 10
            anos consolidando o pensamento voltado para produtos e resolução de
            problemas. Nosso área dedicada exclusivamente para Produtos Digitais
            é organizada em 6 especialidades: Product Managamenet, User
            Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
          </p>
          <button id="about-meet">Conheça a Jüssi</button>
        </Title>
        <ImageContainer id="about-image-container">
          <Image id="about-image">
            <img src={CompanyDesk} alt="Company Desk"/>
          </Image>
        </ImageContainer>
      </Content>
    </Container>
  )
}