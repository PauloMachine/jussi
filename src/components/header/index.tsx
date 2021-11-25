import { FiShoppingCart } from "react-icons/fi"
import { 
  Container,
  Content, 
  LeftContent,
  RightContent,
  ImageContainer,
  List,
  Login,
  Cart
} from "./styles"

import { Search } from "../search"
import CompanyLogo from "../../assets/images/companys/CompanyLogo.png"

export const Header = () => {
  return (
    <Container id="header-container">
      <Content id="header-content">
        <LeftContent id="header-left-content">
          <ImageContainer id="header-image-container">
            <img src={CompanyLogo} alt="Company Logo"/>
          </ImageContainer>
          <List id="header-list">
            <ul>
              <li><a href="#solution-container">Nossas soluções</a></li>
              <li><a href="#about-container">Conheça a Jüssi</a></li>
            </ul>
          </List>
        </LeftContent>
        <RightContent id="header-right-content">
            <Search />
            <Login id="header-login">Login</Login>
            <Cart id="header-cart">
              <FiShoppingCart />
            </Cart>
        </RightContent>
      </Content>
    </Container>
  )
}