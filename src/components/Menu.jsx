import Home from './Home';
import Proptypes from 'prop-types'
import ListaProductos from './ListaProductos';
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';



const Menu = () => {
    const {showMenu, hamburguesas, pizzas, bebidas} = useContext(MenuContext)

    return (
        <>
            {
                showMenu
                ? (
                    <div id='OneFoodMenu' className='container'>
                        <div id='OneFoodMenuItems'>
                            <ListaProductos productos={hamburguesas}/>
                        </div>
                        <div id='OneFoodMenuItems'>
                            <ListaProductos productos={pizzas}/>
                        </div>
                        <div id="OneFoodMenuItems">
                            <ListaProductos productos={bebidas}/>
                        </div>
                    </div>
                )
                : <Home/>
            }
        </>
    )
}

Menu.propTypes = {
    menu: Proptypes.object
}

export default Menu