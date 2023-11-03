import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import NavButtons from "./components/NavButtons"
import { MenuContextProvider } from "./context/MenuProvider"

function App() {

  return (
    
      <MenuContextProvider>
        <Header/>
        <NavButtons/>
        <Menu/>
        <Footer/>
      </MenuContextProvider>
  )
}

export default App
