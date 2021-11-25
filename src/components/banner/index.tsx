import { Container, Title, Image } from "./styles"
import BannerProducts from "../../assets/images/banners/BannerProducts.png"

export const Banner = () => {
  return (
    <Container id="banner-container">
      <Title id="banner-title">
        <h1>Criamos lojas que vendem mais.</h1>
        <p>
          A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
          Precisa criar sua loja ou migrar de plataforma?
        </p>
        <button id="banner-solutions">Veja nossas soluções</button>
      </Title>
      <Image id="banner-image">
        <img src={BannerProducts} alt="Banner Products"/>
      </Image>
    </Container>
  )
}