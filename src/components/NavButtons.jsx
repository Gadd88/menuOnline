// import pizza from '../assets/icons/pizzaIcon.svg'
import hamburguesa from '../assets/icons/burgerIcon.svg'
import home from '../assets/icons/homeIcon.svg'
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext'

const NavButtons = () => {

    const {setMenu, setShowMenu} = useContext(MenuContext)
    
    const selectBurguer = () =>{
        setShowMenu(true)
    }
    const selectHome= () =>{
        // setMenu(null)
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
            {/* <figure className='btn-icono' onClick={selectPizza}>
                <img src={pizza} alt="pizza icono" />
            </figure> */}
        </div>
    )
}

export default NavButtons