import { Checkbox, CheckboxGroup, Radio, RadioGroup, Select, SelectItem } from '@nextui-org/react'
import {PlusIcon} from '../assets/icons/plusIcon'
import { useContext, useState } from 'react'
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


    // <RadioGroup  
    //     color='warning'
    //     onValueChange={setSeleccionado}
    //     value={seleccionado}
    //     label='Filtro'
    //     className='filtro'
    //     orientation='horizontal'
    //     >
    //     <Radio color="warning" value='Todos'>Todos</Radio>  
    //     <Radio color="warning" value='Hamburguesas'>Hamburguesas</Radio>  
    //     <Radio color="warning" value='Pizzas'>Pizzas</Radio>  
    //     <Radio color="warning" value='Bebidas'>Bebidas</Radio>  
    // </RadioGroup>


//     <CheckboxGroup 
//     className="flex flex-row " 
//     orientation='horizontal'
//     color='warning'
//     onValueChange={handleChange}
//     >
//   <Checkbox icon={<PlusIcon/>} color="warning" value='Hamburguesas'>Hamburguesas</Checkbox>  
//   <Checkbox icon={<PlusIcon/>} color="warning" value='Pizzas'>Pizzas</Checkbox>  
//   <Checkbox icon={<PlusIcon/>} color="warning" value='Bebidas'>Bebidas</Checkbox>  
// </CheckboxGroup>