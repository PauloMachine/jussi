import styled from "styled-components"

export const Container = styled.header`
  width: 100%;
  height: 80px;
  max-height: 80px;
  @media (max-width: 768px) {
    height: auto;
    max-height: fit-content;
    padding: 5px;
  }
`

export const Content = styled.div`
  padding: 0 50px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: inherit;
`

export const LeftContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const RightContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 30%;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`


export const ImageContainer = styled.div`
  width: 46%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
`

export const List = styled.nav`
  width: 54%;

  ul {
    display: -webkit-box;
    list-style: none;
    li {
      margin: 20px;
      a {
        font-weight: 500;
        text-decoration: none;
        color: var(--black);
      }
    }

  }
`

export const Login = styled.div`
  font-weight: 500;
  text-decoration: none;
  color: var(--black);
  margin-left: 20px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`

export const Cart = styled.div`
  svg {
    width: 25px;
    height: 25px;
    color: var(--black);
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`