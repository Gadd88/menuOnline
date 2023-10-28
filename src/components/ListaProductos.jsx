import Card from "./Card"

const ListaProductos = ({productos}) => {
  return (
    <div className="1fm-category my-6 overflow-hidden relative">
        <h2 className="text-2xl font-bold">{productos? productos[0].CATEGORIA : 'Productos' }</h2>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-6 px-1">
            {
                productos?.map( (producto) => (
                    <div key={producto.UUID}
                        className="1fm-product snap-center flex flex-col cursor-pointer  bg-black flex-shrink-0 shadow w-72 rounded-2xl">
                        <Card
                            producto={producto}/>
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default ListaProductos
