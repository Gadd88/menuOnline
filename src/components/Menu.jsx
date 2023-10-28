import { usePapaParse } from 'react-papaparse';
import Home from './Home';
import Proptypes from 'prop-types'
import ListaProductos from './ListaProductos';
import useFetchPapaParse from '../hooks/useFetchPapaParse';
import useCreateMenu from '../hooks/useCreateMenu';


const Menu = ({menuData}) => {

    const [hamburguesas] =  useFetchPapaParse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQbXadVqT_G86UsEjC-VJlARId1tgbnXmsQacHDktL5f1N8XdCY5UzmvEL2UINL22uthIvvGXF0TC_s/pub?gid=0&single=true&output=csv')

    const [pizzas] = useFetchPapaParse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQbXadVqT_G86UsEjC-VJlARId1tgbnXmsQacHDktL5f1N8XdCY5UzmvEL2UINL22uthIvvGXF0TC_s/pub?gid=1646481994&single=true&output=csv')
    
    // const [menu] = useCreateMenu(menuData)    

    return (
        <>
            {/* {
                menu !== null
                ? <div id="OneFoodMenu" className="container"></div>
                : <div id='OneFoodMenu' className='container'>
                    <ListaProductos productos={productos}/>
                </div>
            } */}
            <div id='OneFoodMenu' className='container'>
                <div id='OneFootMenuItems'>
                    <ListaProductos productos={hamburguesas}/>
                </div>
                <div id='OneFootMenuItems'>
                    <ListaProductos productos={pizzas}/>
                </div>
            </div>
        </>
    )
}

Menu.propTypes = {
    menu: Proptypes.object
}

export default Menu