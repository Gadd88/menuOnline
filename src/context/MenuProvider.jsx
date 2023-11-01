import { useState } from "react"
import { MenuContext } from "./MenuContext"
import {useSheetData} from '../hooks/useSheetData'

export const MenuContextProvider = ({children}) => {

    const [modalData, setModalData] = useState([])
    const [menuVersion, setMenuVersion] = useState(1)
    const [showMenu, setShowMenu] = useState(false)
    const [modal, setModal] = useState(false)
    const [hamburguesas, pizzas, bebidas] = useSheetData();

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
