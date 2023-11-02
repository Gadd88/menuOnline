import React, { useState } from 'react'
import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import borrar from '../assets/icons/delete.svg'
import borrarPedido from '../assets/icons/borrarPedido.svg'
import wsp from '../assets/icons/wsp.svg'


const ModalCarrito = ({pedido}) => {

    const { setShowCarrito, borrarProducto, vaciarPedido } = useContext(MenuContext)
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
    <div id="OneFoodMenuModal"> 
        <div className="modal fixed z-20 flex items-end justify-center top-0 left-0 w-full h-screen p-2 md:p-4 fade-in">
            <div className="modal-backdrop fixed h-full w-full min-h-screen top-0 left-0 bg-black bg-opacity-30" data-close-modal></div>
            <div className="modal-container bg-white rounded-xl z-10 m-auto w-full flex flex-col flex-1 max-h-[400px] relative max-w-[375px] min-h-[200px] ">
                <div className="modal-close cursor-pointer bg-white text-black absolute text-opacity-80 transition-all p-2 rounded-full -right-2 -top-4" onClick={() => setShowCarrito(false)} data-close-modal>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <div className="modal-content overflow-y-auto h-full flex-1">
                    <div className="">
                        <div className="flex flex-col bg-gray-300 text-black flex-shrink-0 rounded-t-xl p-2">
                            <table className='table-auto border-spacing-y-2 border-separate p-2'>
                                <thead>
                                    <tr>
                                        <th className='font-bold border-r-2 border-slate-600'>Cant.</th>
                                        <th className='font-bold border-r-2 border-slate-600'>Producto</th>
                                        <th className='font-bold'>Precio</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        pedido.length > 0
                                            ? (pedido.map(item => (
                                                <tr 
                                                    className="item border-b-2 text-sm" 
                                                    key={window.crypto.randomUUID().slice(0,4)}
                                                    >
                                                    <td className='text-center font-bold'>{item.CANTIDAD}</td>
                                                    <td className=''>{item.PRODUCTO}</td>
                                                    <td className='font-semibold'>{item.PRECIO}</td>        
                                                    <td><img src={borrar} alt="borrar" className='cursor-pointer ps-1 min-w-[20px]' onClick={()=>borrarProducto(item.PRODUCTO)}/></td>
                                                </tr>
                                                )))
                                            : (<tr className='text-center'>
                                                <td colSpan='4' className='font-normal'>No hay productos seleccionados</td>
                                                </tr>)
                                    }            
                                </tbody>
                            </table>
                            {/* <ul>
                                {
                                    pedido.length > 0
                                    ? (pedido.map(item => (
                                        <li 
                                            className="item border-b-2" 
                                            key={window.crypto.randomUUID().slice(0,4)}
                                            >
                                            <h3
                                                className='flex items-center gap-4'
                                                >
                                                    {item.PRODUCTO}
                                                    <img src={borrar} alt="borrar" className='cursor-pointer' onClick={()=>borrarProducto(item.PRODUCTO)}/></h3>
                                            <span className='font-semibold'>{item.PRECIO}</span>
                                        </li>
                                        )))
                                    : <p className='text-center font-bold'>Lista de pedidos vacia</p>
                                }
                            </ul> */}
                        </div>
                    </div>
                </div>
                <p className='p-2 text-center font-bold'>Total: ${total}</p>
                <div className='flex items-center justify-between rounded-b-xl overflow-y-hidden'>
                    <button className='btn p-2 bg-red-800 text-white active:bg-red-300 flex items-center justify-center gap-2 w-[50%]' onClick={vaciarPedido}>Vaciar Pedido<img src={borrarPedido} alt="eliminar" className='min-w-[20px]'/></button>
                    <button className='btn p-2 bg-black text-white active:bg-slate-600 w-[50%]'><a href={`https://api.whatsapp.com/send?phone=+543704632110&text=Hola%20Carmona,%20me%20gustaria%20pedirte%20lo%20siguiente:%0A${pedidoStr}`} className='flex items-center justify-center gap-2'>Enviar pedido <img src={wsp} alt="whatsapp" className='min-w-[20px]'/></a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalCarrito

// console.log(`https://api.whatsapp.com/send?phone=+3704632110&text=Hola%20me%20gustaria%20pedirte%20lo%20siguiente:%20${pedido}`)