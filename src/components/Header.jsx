import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import { Select, SelectItem } from '@nextui-org/react'
import Filtro from './Filtro'


const Header = () => {

  const {setMenuVersion, showMenu, menuVersion} = useContext(MenuContext)

  const handleVersion = (e) =>{
    setMenuVersion(e.currentKey)
  }
  return (
    <header className="header">
      <figure>
        <div className='text-2xl text-center text-white'>Logo de tu Negocio</div>
      </figure>
      {
        showMenu
        ? (<section className="selectorMenu">
              <Select
                label='Visualización'
                placeholder='Selecciona'
                color='warning'
                variant='underlined'
                className='max-w-xs'
                selectedKeys={menuVersion}
                onSelectionChange={handleVersion}>
                  <SelectItem value='1' key='0'>Card/Tarjeta</SelectItem>
                  <SelectItem value='2' key='1'>Columnas</SelectItem>

              </Select>
              <Filtro/>
            </section>)
        : null
      }

    </header>
  )
}

export default Header
      
// <section className="selectorMenu">
//               <label htmlFor="menuversion">Visualizacion</label>
//               <select 
//                 name="menuversion"
//                 id="menuversion"
//                 onChange={handleVersion}>
//                 <option value="1">Tarjetas</option>
//                 <option value="2">Columnas</option>
//               </select>
//             </section>