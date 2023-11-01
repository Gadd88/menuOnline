import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import Modal from "./Modal"
import CardVers1 from "./CardVers1"
import CardVers2 from "./CardVers2"
import CardVers3 from "./CardVers3"

const ListaProductos = ({productos}) => {

    const {modal, setModal, setModalData, modalData, menuVersion, pedido} = useContext(MenuContext)

    const handleClick = (producto) => {
        // setModal(true)
        setModalData(producto)
    }

    let cardver1 = 'flex gap-4 overflow-x-auto snap-x snap-mandatory py-6 px-1'
    let cardver2 = 'grid grid-cols-1 md:grid-cols-2 gap-6 py-6'
    let cardver3 = 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-6'
    
    return (
    <>
        {
            productos && productos.length > 0
                ?    (<div className="1fm-category my-6 overflow-hidden relative">
                        <h2 className="text-center text-2xl md:text-3xl mb-6 font-semibold uppercase bg-gray-50 border border-gray-400 p-4">{productos[0].CATEGORIA}</h2>
                        <div className={`${menuVersion == 2 ? cardver2 : menuVersion == 3 ? cardver3 : cardver1}`}>
                            {
                                productos.map( (producto) => (
                                    <div key={window.crypto.randomUUID().slice(0,4)}
                                        onClick={() => handleClick(producto)}
                                        >
                                            {
                                                menuVersion == 1 
                                                ? <CardVers1 producto={producto}/> 
                                                : menuVersion == 2 
                                                    ? <CardVers2 producto={producto}/> 
                                                    : <CardVers3 producto={producto}/> 
                                            }

                                    </div>
                                ))
                            }    
                            {
                                modal
                                ? <Modal producto={modalData}/>
                                : null
                            }
                        </div>
                    </div>)
                : null
        }
    </>
  )
}

export default ListaProductos
