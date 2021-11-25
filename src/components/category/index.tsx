
import Modal from "react-modal"
import { FaArrowAltCircleLeft } from "react-icons/fa"

import { 
  Container,
  Content,
  Title,
  CardContainer,
  CardContent,
  Image
} from "./styles"

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface CategoryProps {
  category: string;
  products: Product[];
  isOpen: boolean;
  onRequestClose: () => void;
}

export const Category = ({ 
  category,
  products,
  isOpen,
  onRequestClose
}: CategoryProps) => {
  return (
    <Modal 
      id="modal"
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
    >
    <Container id="category-container">
      <Content id="category-title-content">
        <Title id="category-title">
          <button type="button" onClick={onRequestClose}>
            <FaArrowAltCircleLeft />
          </button>
          <h1>{category.toUpperCase()}</h1>
        </Title>
      </Content>
      <Content id="category-product-content">
        <CardContainer id="category-card-container">
            {products.map((product) => (
              <CardContent key={product.id}>
                <Image>
                  <img alt={product.title} src={product.image}/>
                </Image>
                <h3>{product.title}</h3>
                <h4>PRICE: $ {product.price}</h4>
                <p>{product.description}</p>
              </CardContent>
            ))}
        </CardContainer>
      </Content>
    </Container>
    </Modal>
  )
}