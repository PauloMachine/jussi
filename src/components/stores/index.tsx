import { Container, Content, LeftContent, RightContent, Logo } from "./styles"

import StoreLogoBrastemp from "../../assets/images/stores/StoreLogoBrastemp.png"
import StoreLogoCompraCerta from "../../assets/images/stores/StoreLogoCompraCerta.png"
import StoreLogoConsul from "../../assets/images/stores/StoreLogoConsul.png"
import StoreLogoTheBar from "../../assets/images/stores/StoreLogoTheBar.png"

export const Stores = () => {
  return (
    <Container id="stores-container">
      <Content id="stores-content">
        <LeftContent id="stores-left-content">
          <h4>Nossas principais lojas VTEX</h4>
          <span>→</span>
        </LeftContent>
        <RightContent id="stores-right-content">
          <Logo><img src={StoreLogoBrastemp} alt="Store Brastemp"/></Logo>
          <Logo><img src={StoreLogoCompraCerta} alt="Store Compra certa"/></Logo>
          <Logo><img src={StoreLogoConsul} alt="Store Consul"/></Logo>
          <Logo><img src={StoreLogoTheBar} alt="Store Thebar"/></Logo>
        </RightContent>
      </Content>
    </Container>
  )
}