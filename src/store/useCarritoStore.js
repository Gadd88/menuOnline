import { create } from 'zustand'
import { toast } from 'sonner'


export const useCarritoStore = create((set)=>({

    pedido: [],
    agregarPedido: (producto) => {
        set( state => {
            const existeItem = state.pedido.find(item => item.PRODUCTO === producto.PRODUCTO) 
            if(!existeItem){
                return{
                    ...state,
                    pedido: [...state.pedido, {...producto, CANTIDAD: 1}]
                }}
            if(existeItem){
                const actualizaPedido = state.pedido.map(producto => (
                    producto.PRODUCTO === producto.PRODUCTO
                    ? {...producto, CANTIDAD: producto.CANTIDAD + 1}
                    : producto)) 
                return{
                    ...state,
                    pedido: actualizaPedido
                }
            }})
        toast.success('Producto agregado...',{
            position: 'top-center',
            invert: false,
            duration: 1000
        })},
    borrarProducto: (producto) =>{
        set( state => {
            const draft = state.pedido.filter(item => item.PRODUCTO !== producto.PRODUCTO)
            return{
                pedido: draft
            }
        })
        toast.error('Producto eliminado..',{
            position: 'top-center',
            invert: false,
            duration: 1000
        })
    },
    vaciarPedido: () =>{
        set({
            pedido: []
        })
        toast.warning('Carrito vacio..', {
            position: 'top-center',
            invert: false,
            duration: 1000
        })
    }
}))
