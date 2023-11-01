import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"

const CardVers1 = ({producto}) => {
    
    const {PRODUCTO, PRECIO, URL_IMG, DESCRIPCION} = producto
    const img = `${URL_IMG}`
    const {agregarPedido} = useContext(MenuContext)

    return (
    <div className="1fm-product snap-center flex flex-col cursor-pointer  flex-shrink-0 bg-slate-200 shadow w-72 rounded-2xl overflow-hidden relative">
        <figure className="h-52 w-full image-bg image-bg-2 shrink-0 rounded-t-xl ">
            <img src={`${URL_IMG}`} alt={`${PRODUCTO}`} className="image-bg h-full w-full rounded-t-xl"/>
        </figure>
        <button className="absolute top-0 right-0 bg-green-700 rounded-full p-1 text-white text-lg w-8 h-8" onClick={()=>agregarPedido(producto)}>+</button>
        <div className="p-4 flex flex-col flex-grow text-white h-48 justify-start gap-0 bg-gray-800">
            <h2 className="font-bold">{PRODUCTO.toUpperCase()}</h2>
            <div className="flex flex-col items-end justify-between h-full">
                <div className="opacity-60 leading-tight line-clamp-2 w-full mt-1 text-sm">{DESCRIPCION}</div>
                <div className="pt-4">
                    <div className="flex justify-between border-t first:border-t-0 border-dashed border-gray-300 py-0 items-end">
                        <div className="text-gray-100 text-sm"></div>
                        <div className="flex">
                            <div className="text-gray-100 font-medium text-lg">{PRECIO}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardVers1