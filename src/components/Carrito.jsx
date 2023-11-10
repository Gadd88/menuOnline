import React, { useContext } from 'react'
import carrito from '../assets/icons/cart.svg'
import wsp from '../assets/icons/wsp.svg'
import borrar from '../assets/icons/delete.svg'
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, Button, useDisclosure, Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, Link} from "@nextui-org/react";
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

    let num = ''

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
            backdrop='blur'
            onOpenChange={onOpenChange}
            pedido={pedido}
            scrollBehavior='outside'
            classNames={{closeButton:'mt-1 mr-1'}}
            className='max-h-[450px] overflow-y-auto'
            aria-label='modal carrito'
            >
            <ModalContent aria-label='modal carrito dark text-foreground'>
                {
                    (onClose)=>(
                        <>
                            <ModalHeader 
                                className="flex flex-col gap-1"
                                aria-label='modal'
                                >
                                    Productos
                            </ModalHeader>
                            <ModalBody
                                aria-label='modal'
                                >
                                {
                                    pedido.length > 0
                                    ? (<>
                                        <Table
                                            removeWrapper
                                            className='dark'
                                            aria-label='modal'>
                                            <TableHeader
                                                aria-label='modal'>
                                                <TableColumn>Cant.</TableColumn>
                                                <TableColumn>Producto</TableColumn>
                                                <TableColumn>Precio</TableColumn>
                                                <TableColumn></TableColumn>
                                            </TableHeader>
                                            <TableBody
                                                emptyContent={<p>No hay productos seleccionados</p>}
                                                aria-label='modal'
                                                >
                                                {
                                                    pedido.map(item=>(
                                                        <TableRow
                                                            key={window.crypto.randomUUID().slice(4)}
                                                            aria-label='item carrito'>
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
                            <ModalFooter 
                                className='flex justify-center items-center flex-col'
                                aria-label='modal'
                                >
                                <Button 
                                    color="warning" 
                                    variant='shadow' 
                                    radius='none' 
                                    as={Link} href={`https://api.whatsapp.com/send?phone=+54${num}&text=Hola%20TuNegocio,%20me%20gustaria%20pedirte%20lo%20siguiente:%0A${pedidoStr}`} 
                                    className='flex items-center justify-center gap-2 w-72'
                                    isDisabled={pedido.length>0 ? false : true}
                                    >
                                        Enviar pedido <img src={wsp} alt="whatsapp" className='min-w-[20px]'/>
                                </Button>
                                <Button 
                                    color="danger" 
                                    variant="light" 
                                    radius='none' 
                                    onClick={vaciarPedido}
                                    isDisabled={pedido.length>0 ? false : true} 
                                    className='w-72 flex items-center justify-center gap-2'
                                    >
                                        Vaciar Productos <img src={borrar} alt="vaciar" className='min-w-[18px]'/>
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