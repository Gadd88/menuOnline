import { useState } from "react"
import { MenuContext } from "./MenuContext"
import {useSheetData} from '../hooks/useSheetData'

export const MenuContextProvider = ({children}) => {

    const [modalData, setModalData] = useState([])
    const [menuVersion, setMenuVersion] = useState(1)
    const [showMenu, setShowMenu] = useState(false)
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [showCarrito, setShowCarrito] = useState(false)
    const [hamburguesas, pizzas, bebidas, promos] = useSheetData();

    const agregarPedido = (producto) =>{
        const existeItem = pedido.find(item => item.PRODUCTO === producto.PRODUCTO) 
        if(existeItem){
            setPedido((prev)=> prev.map((item)=>(
                item.PRODUCTO === producto.PRODUCTO
                ? {...item, CANTIDAD: item.CANTIDAD + 1}
                : item
            )))
        }else{
            setPedido([
                ...pedido, {...producto, CANTIDAD: 1}
            ])
        }
    }
    const borrarProducto = (PRODUCTO) =>{
        const draft = pedido.filter(item => item.PRODUCTO !== PRODUCTO)
        setPedido(draft)
    }
    const vaciarPedido = () =>{
        setPedido([])
    }
    const handleClick = (producto) => {
        setModal(true)
        setModalData(producto)
    }

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
                setMenuVersion,
                agregarPedido,
                pedido,
                borrarProducto,
                showCarrito,
                setShowCarrito,
                handleClick,
                vaciarPedido,
                promos
                }}>
            {children}

        </MenuContext.Provider>
    )
}
