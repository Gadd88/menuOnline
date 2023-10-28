import { useContext, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Title from "./components/Title"
import { MenuContext, MenuContextProvider } from "./context/MenuContext"


function App() {


  return (
    <MenuContextProvider>
      <Header/>
      <Title/>
      <Menu/>
      <Footer/>
    </MenuContextProvider>
  )
}

export default App
