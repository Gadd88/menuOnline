import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"


const CardVers2 = ({producto}) => {
    const {PRODUCTO, PRECIO, URL_IMG, DESCRIPCION} = producto
    const {agregarPedido, handleClick} = useContext(MenuContext)
    const img = `${URL_IMG}`

  return (
    <div className="1fm-product flex cursor-pointer rounded-xl bg-white flex-shrink-0 border-2 border-gray-200 shadow h-44 relative w-[98%] p-1">
        <figure className="h-full w-40 image-bg image-bg-2 shrink-0 rounded-l-xl">
            <img src={`${URL_IMG}`} alt={`${PRODUCTO}`} className="image-bg h-full bg-gray-300 w-full rounded-l-xl"/>
        </figure>
        <button className="absolute -top-3 -right-2 bg-green-700 rounded-full p-1 text-white text-2xl w-7 h-7 flex items-center justify-center" onClick={()=>agregarPedido(producto)}>+</button>
        <div className="p-2.5 md:p-4 flex flex-col flex-grow overflow-hidden justify-between" onClick={()=>handleClick(producto)}>
            <h2 className="font-bold mb-2">{PRODUCTO}</h2>
            <div className="flex flex-col gap-2 overflow-x-auto overflow-hidden max-w-full pb-2">
                <div className="mt-auto opacity-60 leading-tight line-clamp-2 w-full hidden text-base">{DESCRIPCION}</div>
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

export default CardVers2