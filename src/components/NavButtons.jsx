import hamburguesa from '../assets/icons/burgerIcon.svg'
import carrito from '../assets/icons/cart.svg'
import home from '../assets/icons/homeIcon.svg'
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext'
import ModalCarrito from './ModalCarrito';


const NavButtons = () => {

    const {pedido, setShowMenu, showCarrito, setShowCarrito} = useContext(MenuContext)
    
    const selectBurguer = () =>{
        setShowMenu(true)
    }
    const selectHome= () =>{
        setShowMenu(false)
    }
    const verPedido = () =>{
        setShowCarrito(true)
    } 
    
    return (
        <div className='nav-botones'>
            <figure className="btn-icono" onClick={selectHome}>
                <img src={home} alt="home icono"/>
            </figure>
            <figure className='btn-icono' onClick={selectBurguer}>
                <img src={hamburguesa} alt="hamburguesa icono" />
            </figure>
            <figure className='btn-icono relative' onClick={verPedido}>
                <img src={carrito} alt="carrito icono" />
                <div className={`text-white ${pedido.length > 0 ? 'flex' : 'hidden'} items-center justify-center absolute -top-2 -right-2 bg-red-700 rounded-full w-5 h-5 `}>{pedido.length}</div>
            </figure>
            {
                showCarrito
                ? <ModalCarrito pedido={pedido}/>
                : null
            }
        </div>
    )
}

export default NavButtons