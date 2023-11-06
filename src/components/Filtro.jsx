import { Checkbox, CheckboxGroup, Radio, RadioGroup } from '@nextui-org/react'
import {PlusIcon} from '../assets/icons/plusIcon'
import { useContext, useState } from 'react'
import { MenuContext } from '../context/MenuContext'


const Filtro = () => {

    const {setSeleccionado, seleccionado} = useContext(MenuContext)

  return (
    <RadioGroup  
        color='warning'
        onValueChange={setSeleccionado}
        value={seleccionado}
        label='Filtro'
        className='filtro'
        orientation='horizontal'
        >
        <Radio color="warning" value='Todos'>Todos</Radio>  
        <Radio color="warning" value='Hamburguesas'>Hamburguesas</Radio>  
        <Radio color="warning" value='Pizzas'>Pizzas</Radio>  
        <Radio color="warning" value='Bebidas'>Bebidas</Radio>  
    </RadioGroup>
  )
}

export default Filtro

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