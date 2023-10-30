import { usePapaParse } from 'react-papaparse';
import Home from './Home';
import Proptypes from 'prop-types'
import ListaProductos from './ListaProductos';
import useFetchPapaParse from '../hooks/useFetchPapaParse';
import useCreateMenu from '../hooks/useCreateMenu';
import { MenuContext } from '../context/MenuContext';
import { useContext } from 'react';



const Menu = () => {

    const {hamburguesas, pizzas, bebidas, showMenu} = useContext(MenuContext)
    
    //  const [menu] = useCreateMenu(menuData)    

    return (
        <>
            {/* {
                menu !== null
                ? <div id="OneFoodMenu" className="container"></div>
                : (<div id='OneFoodMenu' className='container'>
                    <ListaProductos productos={productos}/>
                    </div>)
            } */}
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