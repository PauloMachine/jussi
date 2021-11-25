import { 
  Container,
  Content,
  Title,
  CardContainer,
  CardContent,
  RoundTitle,
} from "./styles"

export const Solutions = () => {
  return (
    <Container id="solution-container">
      <Content id="solution-content">
        <Title id="solution-title">Nossas soluções</Title>
        <CardContainer id="solution-card-container">
          <CardContent>
            <RoundTitle>P1</RoundTitle>
            <h4>Nome do Produto #1</h4>
            <p>Descrição do produto #1</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver solução</button>
          </CardContent>
          <CardContent>
            <RoundTitle>P2</RoundTitle>
            <h4>Nome do Produto #2</h4>
            <p>Descrição do produto #2</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver solução</button>
          </CardContent>
          <CardContent>
            <RoundTitle>P3</RoundTitle>
            <h4>Nome do Produto #3</h4>
            <p>Descrição do produto #3</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver solução</button>
          </CardContent>
          <CardContent>
            <RoundTitle>P4</RoundTitle>
            <h4>Nome do Produto #4</h4>
            <p>Descrição do produto #4</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
            <button>Ver solução</button>
          </CardContent>
        </CardContainer>
      </Content>
    </Container>
  )
}