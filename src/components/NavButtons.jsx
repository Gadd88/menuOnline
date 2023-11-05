import hamburguesa from '../assets/icons/burgerIcon.svg'
import home from '../assets/icons/homeIcon.svg'
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext'
import Carrito from './Carrito';

const NavButtons = () => {

    const {setShowMenu, showMenu, pedido} = useContext(MenuContext)
    
    const selectBurguer = () =>{
        setShowMenu(true)
    }
    const selectHome= () =>{
        setShowMenu(false)
    }
    
    return (
        <div className='nav-botones'>
            <figure className="btn-icono" onClick={selectHome}>
                <img src={home} alt="home icono"/>
            </figure>
            <figure className='btn-icono' onClick={selectBurguer}>
                <img src={hamburguesa} alt="hamburguesa icono" />
            </figure>
            {
                pedido.length>0 && <Carrito aria-label='modal carrito'/>
            }
            
        </div>
    )
}

export default NavButtons