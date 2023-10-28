import hamburguesa from '../assets/icons/burgerIcon.svg'
import pizza from '../assets/icons/pizzaIcon.svg'
import home from '../assets/icons/homeIcon.svg'
import { menuBurguers } from '../data/menuBurguers'
import { menuPizzas } from '../data/menuPizzas'
import { useContext, useState } from 'react';
import { MenuContext } from '../context/MenuContext'

const Title = () => {

    const {setMenu, setShowMenu} = useContext(MenuContext)
    
    const selectBurguer = () =>{
        // setMenu(menuBurguers);
        setShowMenu(true)
    }
    // const selectPizza = () =>{
    //     setMenu(menuPizzas)
    // }
    const selectHome= () =>{
        // setMenu(null)
        setShowMenu(false)
    }
    
    return (
        <div className='botones'>
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

export default Title