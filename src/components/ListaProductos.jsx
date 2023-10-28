import { useContext } from "react"
import Card from "./Card"
import Modal from "./Modal"
import { MenuContext } from "../context/MenuContext"

const ListaProductos = ({productos}) => {

    const {modal, setModal, setModalData, modalData} = useContext(MenuContext)
    const handleClick = (producto) => {
        setModal(true)
        setModalData(producto)
    }
  return (
    <>
        {
            productos && productos.length > 0
                ?    (<div className="1fm-category my-6 overflow-hidden relative">
                        <h2 className="text-2xl font-bold">{productos[0].CATEGORIA}</h2>
                        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-6 px-1">
                            {
                                productos.map( (producto) => (
                                    <div key={producto.UUID}
                                        onClick={() => handleClick(producto)}
                                        className="1fm-product snap-center flex flex-col cursor-pointer  bg-black flex-shrink-0 shadow w-72 rounded-2xl">
                                        <Card
                                            producto={producto}
                                            />
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
