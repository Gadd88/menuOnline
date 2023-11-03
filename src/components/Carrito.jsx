import React, { useContext } from 'react'
import carrito from '../assets/icons/cart.svg'
import wsp from '../assets/icons/wsp.svg'
import borrar from '../assets/icons/delete.svg'
import vaciar from '../assets/icons/borrarPedido.svg'
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, Button, useDisclosure, Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/react";
import { MenuContext } from '../context/MenuContext';


const Carrito = () => {
    const {pedido, borrarProducto, vaciarPedido} = useContext(MenuContext)
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    let total = 0;

    const totalFunc = (pedido) =>{
        for (let i = 0; i < pedido.length; i++) {
            total = total + (Number(pedido[i].PRECIO.replace(/[^0-9.-]+/g,"")) * pedido[i].CANTIDAD);
        }
    }
    totalFunc(pedido);

    let pedidoStr = ''
    const convertirPedido = (pedido) =>{
        for (let i=0; i < pedido.length; i++){
            pedidoStr = pedido[i].CANTIDAD + 'x ' + pedido[i].PRODUCTO + ',%0A' + pedidoStr;
        }
    }
    convertirPedido(pedido)

  return (
    <figure 
        className='btn-icono relative' 
        onClick={onOpen}
        aria-label='modal carrito'
        >
        <img src={carrito} alt="carrito icono" />
        <div className={`text-white ${pedido.length > 0 ? 'flex' : 'hidden'} items-center justify-center absolute -top-2 -right-2 bg-red-700 rounded-full w-5 h-5 `}>{pedido.length}</div>
        <Modal
            isOpen={isOpen}
            placement='center'
            onOpenChange={onOpenChange}
            pedido={pedido}
            aria-label='modal carrito'
            >
            <ModalContent aria-label='modal carrito dark text-foreground'>
                {
                    (onClose)=>(
                        <>
                            <ModalHeader className="flex flex-col gap-1">Productos</ModalHeader>
                            <ModalBody>
                                {
                                    pedido.length > 0
                                    ? (<>
                                        <Table
                                            removeWrapper
                                            className='dark'>
                                            <TableHeader>
                                                <TableColumn>Cant.</TableColumn>
                                                <TableColumn>Producto</TableColumn>
                                                <TableColumn>Precio</TableColumn>
                                                <TableColumn></TableColumn>
                                            </TableHeader>
                                            <TableBody
                                                emptyContent={<p>No hay productos seleccionados</p>}>
                                                {
                                                    pedido.map(item=>(
                                                        <TableRow
                                                            key={window.crypto.randomUUID().slice(4)}>
                                                                <TableCell>{item.CANTIDAD}</TableCell>
                                                                <TableCell className='text-tiny'>{item.PRODUCTO}</TableCell>
                                                                <TableCell>{item.PRECIO}</TableCell>
                                                                <TableCell><Button variant='flat' color='danger' isIconOnly onClick={()=>borrarProducto(item.PRODUCTO)}><img src={borrar} alt="borrar"/></Button></TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                        <p className='font-bold'>Total: ${total}</p>
                                        </>)
                                    : <p> No hay productos seleccionados</p>
                                }
                                
                            </ModalBody>
                            <ModalFooter className='flex justify-center items-center'>
                                <Button color="danger" variant="light" radius='none' onClick={vaciarPedido}>
                                   Vaciar Productos <img src={borrar} alt="vaciar" className='min-w-[20px]'/>
                                </Button>
                                <Button color="primary" variant='flat' radius='none'>
                                    <a href={`https://api.whatsapp.com/send?phone=+543704632110&text=Hola%20Carmona,%20me%20gustaria%20pedirte%20lo%20siguiente:%0A${pedidoStr}`} className='flex items-center justify-center gap-2'>Enviar pedido <img src={wsp} alt="whatsapp" className='min-w-[20px]'/></a>
                                </Button>
                            </ModalFooter>
                        </>
                    )
                }
            </ModalContent>
        </Modal>
    </figure>
  )
}

export default Carrito