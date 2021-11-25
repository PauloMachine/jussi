import styled from "styled-components"

export const Container = styled.section`
  padding: 10px;

  @media (max-width: 768px) {
    padding: 20px ;
  }
`

export const Content = styled.div`
  max-width: 1210px;

  padding: 20px 60px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`

export const Title = styled.div`
  display: flex;
  flex-wrap: wrap;

  h1 {
    font-weight: 500;
    font-size: 30px;
    color: var(--green);
    margin-left: 30px;
  }

  button {
    // padding: 10px;
    background: transparent;
    border: none;

    svg {
      color: var(--green);
      height: 40px;
      width: 40px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CardContent = styled.div`
  width: 45%;
  margin: 15px;
  background-color: var(--white);
  border: 1px solid var(--grey);
  border-radius: 10px;
  padding: 20px;

  h3 {
    font-weight: 500;
    font-size: 20px;
    margin: 16px 16px;
  }

  h4 {
    font-weight: 500;
    font-size: 16px;
    margin: 16px 16px;
    color: var(--pink);
  }

  p {
    font-weight: 500;
    font-size: 14px;
    margin: 16px 16px;
    color: var(--dark-grey);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const Image = styled.div`
  font-weight: 500;
  background-color: var(--grey);
  width: 180px;
  height: 180px;

  font-size: 2rem;
  text-align: center;
  line-height: 3;
  margin: 10px 10px 50px 10px;

  img {
    width: 180px;
    height: 180px;
  }
`