import { Select, SelectItem } from '@nextui-org/react'
import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'


const Filtro = () => {

    const {setSeleccionado, seleccionado} = useContext(MenuContext)

    const handleSelect = (e) =>{
      setSeleccionado(e.target.value)
    }
  return (
    <Select
      label='Filtro de productos'
      placeholder={seleccionado}
      color='warning'
      variant='underlined'
      className='max-w-xs text-white'
      onChange={handleSelect}>
        <SelectItem value='Todos' key='Todos'>Todos</SelectItem>
        <SelectItem value='Hamburguesas' key='Hamburguesas'>Hamburguesas</SelectItem>
        <SelectItem value='Pizzas' key='Pizzas'>Pizzas</SelectItem>
        <SelectItem value='Bebidas' key='Bebidas'>Bebidas</SelectItem>
    </Select>
  )
}

export default Filtro
