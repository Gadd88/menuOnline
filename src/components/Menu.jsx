import { useEffect } from 'react';
import { createMenu } from '../data/generateMenu'
import Home from './Home';
import Proptypes from 'prop-types'

const Menu = ({menu}) => {

    // const [menu, setMenu] = useState(menuData)
    
    useEffect(() => {
        if(menu===null) return;
        createMenu({
            menu: menu,
            version: 2,
            priceSymbol: '$',
        })
    }, [menu])

    return (
        <>
            {
                menu !== null
                ? <div id="OneFoodMenu" className="container"></div>
                : <Home/>
            }
        </>
    )
}

Menu.propTypes = {
    menu: Proptypes.array
}

export default Menu