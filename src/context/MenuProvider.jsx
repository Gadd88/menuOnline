import { useState } from "react"
import { MenuContext } from "./MenuContext"
import {useSheetData} from '../hooks/useSheetData'
import { toast } from 'sonner';


export const MenuContextProvider = ({children}) => {

    const [menuVersion, setMenuVersion] = useState(1)
    const [showMenu, setShowMenu] = useState(false)
    const [pedido, setPedido] = useState([])
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
        toast.success('Producto agregado...',{
            position: 'top-center',
            invert: true})
    }
    const borrarProducto = (PRODUCTO) =>{
        const draft = pedido.filter(item => item.PRODUCTO !== PRODUCTO)
        setPedido(draft)
        toast.warning('Producto eliminado..',{
            position: 'top-center',
            invert: true
        })
    }
    const vaciarPedido = () =>{
        setPedido([])
        toast.warning('Carrito vacio..', {
            position: 'top-center',
            invert: true
        })
    }

    return (
        <MenuContext.Provider
            value={{
                showMenu,
                setShowMenu,
                menuVersion,
                setMenuVersion,
                agregarPedido,
                pedido,
                borrarProducto,
                vaciarPedido,
                promos,
                hamburguesas,
                pizzas,
                bebidas
                }}>
            {children}

        </MenuContext.Provider>
    )
}
