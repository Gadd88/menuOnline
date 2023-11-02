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
    let notificacion = '';
    if(pedido.length>0) notificacion = `before:content-['*'] before:text-white before:flex before:pt-2 before:items-center before:justify-center before:absolute before:-top-2 before:-right-2 before:bg-red-700 before:rounded-full before:w-4 before:h-4`
    
    return (
        <div className='nav-botones'>
            <figure className="btn-icono" onClick={selectHome}>
                <img src={home} alt="home icono"/>
            </figure>
            <figure className='btn-icono' onClick={selectBurguer}>
                <img src={hamburguesa} alt="hamburguesa icono" />
            </figure>
            <figure className={`btn-icono relative ${notificacion}`} onClick={verPedido}>
                <img src={carrito} alt="carrito icono" />
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