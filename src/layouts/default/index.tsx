import { Header, Footer } from "../../components"

export const DefaultLayout = ({ children }: any) => {
  return (
    <section id="default-layout">
      <Header/>
        {children}
      <Footer/>
    </section>
  )
}