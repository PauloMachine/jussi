import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { Container, Content, LeftContent, RightContent } from "./styles"

import CompanyWpp from "../../assets/images/companys/CompanyWpp.png"

export const Footer = () => {
  return (
    <Container id="footer-container">
      <Content id="footer-content">
        <LeftContent id="footer-left-content">
          <img src={CompanyWpp} alt="Company Wpp" />
        </LeftContent>
        <RightContent id="footer-right-content">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </RightContent>
      </Content>
    </Container>
  )
}