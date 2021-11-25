import { FormEvent, useState } from "react"
import { FiSearch } from "react-icons/fi"
import { toast } from "react-toastify"

import { Category } from "../category"
import { Container } from "./styles"

import { api } from "../../services/api"

export const Search = () => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [text, setText] = useState("")

  async function handleSearchCategory(event: FormEvent) {
    event.preventDefault();

    if (text) {
      setLoading(true)
      try {
        const textLowerCase = text.toLowerCase()
        const response = await api.get(`products/category/${textLowerCase}`)
        const result = response.data

        if (result && result.length) {
          setProducts(result)
          setShowModal(true)
        } else {
          toast.error(`A categoria "${text}" não existe!`);
          setText("")
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
  }

  async function handleOnRequestClose() {
    setShowModal(false)
    setText("")
  }

  return (
    <Container id="search-container">
      <Category
        key="modal"
        category={text}
        products={products}
        isOpen={showModal}
        onRequestClose={() => handleOnRequestClose()}
      />
      <form onSubmit={handleSearchCategory}>
        <input
          placeholder="Buscar"
          disabled={loading}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button disabled={loading} type="submit">
          <FiSearch/>
        </button>
      </form>
    </Container>
  )
}