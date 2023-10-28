import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Title from "./components/Title"


function App() {

  const [menu, setMenu] = useState(null)

  return (
    <>
      <Header/>
      {/* <Title setMenu={setMenu}/> */}
      <Menu
        menuData={menu}/>
      <Footer/>
    </>
  )
}

export default App
