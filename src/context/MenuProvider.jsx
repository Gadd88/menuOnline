import { useState } from "react"
import { MenuContext } from "./MenuContext"
import {useSheetData} from '../hooks/useSheetData'
import { toast } from 'sonner';


export const MenuContextProvider = ({children}) => {

    const [menuVersion, setMenuVersion] = useState('0')
    const [showMenu, setShowMenu] = useState(false)
    const [pedido, setPedido] = useState([])
    const [hamburguesas, pizzas, bebidas, promos] = useSheetData();
    const [seleccionado, setSeleccionado] = useState('Todos')
    
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
            invert: false,
            duration: 1000
        })
    }
    const borrarProducto = (PRODUCTO) =>{
        const draft = pedido.filter(item => item.PRODUCTO !== PRODUCTO)
        setPedido(draft)
        toast.error('Producto eliminado..',{
            position: 'top-center',
            invert: false,
            duration: 1000
        })
    }
    const vaciarPedido = () =>{
        setPedido([])
        toast.warning('Carrito vacio..', {
            position: 'top-center',
            invert: false,
            duration: 1000
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
                bebidas,
                seleccionado,
                setSeleccionado
                }}>
            {children}

        </MenuContext.Provider>
    )
}
