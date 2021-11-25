import { Container, Content, Title } from "./styles"

export const Newletter = () => {
  return (
    <Container id="newletter-container">
      <Content id="newletter-content">
        <Title id="newletter-title">
          <h2>receba novidades da nossa área de produtos digitais.</h2>
          <div>
            <input
              id="newletter-input" 
              type="email" 
              placeholder="Digite seu e-mail"
            />
            <button id="newletter-register">CADASTRAR</button>
          </div>
        </Title>
      </Content>
    </Container>
  )
}