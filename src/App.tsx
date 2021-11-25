import { ToastContainer } from "react-toastify"

import { LandingPage } from "./pages/landingPage"
import { GlobalStyles } from "./assets/styles/global"

import "react-toastify/dist/ReactToastify.css"

export function App() {
  return (
    <section id="app">
      <ToastContainer 
        containerId="toast-container"
        theme="colored" 
        closeOnClick
      />
      <GlobalStyles/>
      <LandingPage/>
    </section>
  )
}
