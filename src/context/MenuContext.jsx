import { createContext, useState } from "react"
import useFetchPapaParse from "../hooks/useFetchPapaParse"
import { menuBurguers } from "../data/menuBurguers"

export const MenuContext = createContext(null)

export const MenuContextProvider = ({children}) => {

    // const [menuData, setMenuData] = useState(menuBurguers)
    const [modalData, setModalData] = useState(null)
    const [menuVersion, setMenuVersion] = useState(1)
    const [showMenu, setShowMenu] = useState(false)
    const [modal, setModal] = useState(false)
    const [hamburguesas] =  useFetchPapaParse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQbXadVqT_G86UsEjC-VJlARId1tgbnXmsQacHDktL5f1N8XdCY5UzmvEL2UINL22uthIvvGXF0TC_s/pub?gid=0&single=true&output=csv')
    const [pizzas] = useFetchPapaParse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQbXadVqT_G86UsEjC-VJlARId1tgbnXmsQacHDktL5f1N8XdCY5UzmvEL2UINL22uthIvvGXF0TC_s/pub?gid=1646481994&single=true&output=csv')
    const [bebidas] = useFetchPapaParse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQbXadVqT_G86UsEjC-VJlARId1tgbnXmsQacHDktL5f1N8XdCY5UzmvEL2UINL22uthIvvGXF0TC_s/pub?gid=1013302729&single=true&output=csv')

    return (
        <MenuContext.Provider
            value={{
                hamburguesas,
                pizzas,
                bebidas,
                modal,
                setModal,
                modalData,
                setModalData,
                showMenu,
                setShowMenu,
                menuVersion,
                setMenuVersion
                }}>
            {children}

        </MenuContext.Provider>
    )
}


