import { useContext } from "react"
import Card from "./Card"
import Modal from "./Modal"
import { MenuContext } from "../context/MenuContext"
import CardVers2 from "./CardVers2"

const ListaProductos = ({productos}) => {

    const {modal, setModal, setModalData, modalData, menuVersion} = useContext(MenuContext)
    const handleClick = (producto) => {
        setModal(true)
        setModalData(producto)
    }

    let cardver1 = 'flex gap-4 overflow-x-auto snap-x snap-mandatory py-6 px-1'
    let cardver2 = 'grid grid-cols-1 md:grid-cols-2 gap-6 pt-2'
    console.log(menuVersion)
    return (
    <>
        {
            productos && productos.length > 0
                ?    (<div className="1fm-category my-6 overflow-hidden relative">
                        <h2 className="text-2xl font-bold">{productos[0].CATEGORIA}</h2>
                        <div className={`${menuVersion == 1 ? cardver1 : cardver2}`}>
                            {
                                productos.map( (producto) => (
                                    <div key={producto.UUID}
                                        onClick={() => handleClick(producto)}
                                        >
                                            {
                                                menuVersion == 1 ? <Card producto={producto}/> : <CardVers2 producto={producto}/>
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
