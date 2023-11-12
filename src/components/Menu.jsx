import Home from './Home';
import Proptypes from 'prop-types'
import ListaProductos from './ListaProductos';
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';



const Menu = () => {
    const {showMenu, hamburguesas, pizzas, bebidas, seleccionado} = useContext(MenuContext)



    return (
        <>
            {
                showMenu
                ? (
                    <div id='OneFoodMenu' className='container'>
                        <div id='OneFoodMenuItems'>
                            {
                                seleccionado === 'Todos' 
                                ?(<>
                                    <ListaProductos productos={hamburguesas}/>
                                    <ListaProductos productos={pizzas}/>
                                    <ListaProductos productos={bebidas}/>
                                </>)
                                : seleccionado === 'Hamburguesas'
                                    ? <ListaProductos productos={hamburguesas}/>
                                    : seleccionado === 'Pizzas'
                                        ? <ListaProductos productos={pizzas}/>
                                        : <ListaProductos productos={bebidas}/>
                            }

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