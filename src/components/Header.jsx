import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'

const Header = () => {

  const {setMenuVersion, showMenu} = useContext(MenuContext)

  const handleVersion = (e) =>{
    setMenuVersion(e.target.value)
  }
  return (
    <header className="header">
      <figure>
        <div className='text-2xl text-center text-white'>Logo de tu Negocio</div>
      </figure>
      {
        showMenu
        ? (<section className="selectorMenu">
              <label htmlFor="menuversion">Visualizacion</label>
              <select 
                name="menuversion"
                id="menuversion"
                onChange={handleVersion}>
                <option value="1">Tarjetas</option>
                <option value="2">Columnas</option>
              </select>
            </section>)
        : null
      }
      
    </header>
  )
}

export default Header