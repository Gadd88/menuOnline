import { useState } from "react"
import { MenuContext } from "./MenuContext"


export const MenuContextProvider = ({children}) => {

    const [menuVersion, setMenuVersion] = useState('0')
    const [showMenu, setShowMenu] = useState(false)
    const [seleccionado, setSeleccionado] = useState('Todos')


    return (
        <MenuContext.Provider
            value={{
                showMenu,
                setShowMenu,
                menuVersion,
                setMenuVersion,
                seleccionado,
                setSeleccionado
                }}>
            {children}

        </MenuContext.Provider>
    )
}
