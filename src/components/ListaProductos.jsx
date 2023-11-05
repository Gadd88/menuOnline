import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import CardVers1 from "./CardVers1"
import CardVers2 from "./CardVers2"

const ListaProductos = ({productos}) => {

    const { menuVersion, agregarPedido } = useContext(MenuContext)

    let cardver1 = 'flex gap-4 overflow-x-auto snap-x snap-mandatory py-6 px-1'
    let cardver2 = 'grid grid-cols-1 md:grid-cols-2 gap-6 py-6'
    
    return (
    <>
        {
            productos && productos.length > 0
                ?    (<div className="1fm-category my-6 overflow-hidden relative">
                        <h2 className="text-left bg-background text-2xl md:text-3xl mb-6 uppercase border border-gray-400 p-4">{productos[0].CATEGORIA}</h2>
                        <div className={`${menuVersion == 2 ? cardver2 : cardver1}`}>
                            {
                                productos.map( (producto) => (
                                    <div key={window.crypto.randomUUID().slice(0,4)}
                                        >
                                            {
                                                menuVersion == 1 
                                                ? <CardVers1 producto={producto} agregarPedido={agregarPedido}/> 
                                                : <CardVers2 producto={producto} agregarPedido={agregarPedido}/> 
                                            }

                                    </div>
                                ))
                            }
                        </div>
                    </div>)
                : null
        }
    </>
  )
}

export default ListaProductos
