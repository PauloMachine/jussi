import { DefaultLayout } from "../../layouts/default"
import { 
  About,
  Banner,
  Contact,
  Newletter,
  Solutions,
  Stores
} from "../../components"

export const LandingPage = () => {
  return (
    <DefaultLayout>
      <Banner />
      <Stores />
      <Solutions />
      <About />
      <Contact />
      <Newletter />
    </DefaultLayout>
  )
}