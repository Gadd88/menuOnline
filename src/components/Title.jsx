import hamburguesa from '../assets/icons/burgerIcon.svg'
import pizza from '../assets/icons/pizzaIcon.svg'
import home from '../assets/icons/homeIcon.svg'
import { menuBurguers } from '../data/menuBurguers'
import { menuPizzas } from '../data/menuPizzas'
import { useState } from 'react';

const Title = ({setMenu}) => {
    
    const selectBurguer = () =>{
        setMenu(menuBurguers);
    }
    const selectPizza = () =>{
        setMenu(menuPizzas)
    }
    const selectHome= () =>{
        setMenu(null)
    }
    
    return (
        <div className='botones'>
            <figure className="btn-icono" onClick={selectHome}>
                <img src={home} alt="home icono"/>
            </figure>
            <figure className='btn-icono' onClick={selectBurguer}>
                <img src={hamburguesa} alt="hamburguesa icono" />
            </figure>
            <figure className='btn-icono' onClick={selectPizza}>
                <img src={pizza} alt="pizza icono" />
            </figure>
        </div>
    )
}

export default Title