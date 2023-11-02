import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"

const CardVers3 = ({producto}) => {
    const {PRODUCTO, PRECIO, DESCRIPCION} = producto
    const {agregarPedido, handleClick} = useContext(MenuContext)

  return (
    <div className="1fm-product flex flex-shrink-0 p-2 md:p-4 border-b-2 border-gray-400 relative cursor-pointer">
        <button className="absolute top-2 right-2 bg-green-700 rounded-full p-1 text-white text-lg w-8 h-8" onClick={()=>agregarPedido(producto)}>+</button>
        <div className="w-full flex flex-col" onClick={()=>handleClick(producto)}>
            <h2 className="font-bold mb-2 text-xl line-clamp-2">{PRODUCTO}</h2>
            <div className="flex gap-2 overflow-x-auto overflow-hidden max-w-full py-2">
                <div className="opacity-80 italic leading-tight w-full mb-2 text-lg">{DESCRIPCION}</div>
                <div className="pt-2">
                    <div className="flex justify-between border-t first:border-t-0 border-dashed border-gray-300 py-0 items-end">
                        <div className="text-gray-100 text-sm"></div>
                        <div className="flex">
                            <div className="text-gray-800 font-medium text-lg">{PRECIO}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardVers3