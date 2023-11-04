import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"


const CardVers2 = ({producto}) => {
    const {PRODUCTO, PRECIO, URL_IMG, DESCRIPCION} = producto
    const {agregarPedido, handleClick} = useContext(MenuContext)

  return (
    <div className="1fm-product flex cursor-pointer rounded-xl flex-shrink-0 border-2 border-gray-200 shadow h-44 relative w-[98%] p-1 dark bg-background text-foreground">
        <figure className="h-full w-40 image-bg image-bg-2 shrink-0 rounded-l-lg">
            <img src={`${URL_IMG}`} alt={`${PRODUCTO}`} className="image-bg h-full w-full rounded-l-md"/>
        </figure>
        <button className="absolute -top-3 -right-2 bg-green-700 rounded-full p-1 text-white text-2xl w-7 h-7 flex items-center justify-center active:bg-green-400" onClick={()=>agregarPedido(producto)}>+</button>
        <div className="p-2.5 md:p-4 flex flex-col flex-grow overflow-hidden gap-3" onClick={()=>handleClick(producto)}>
            <h2 className="font-bold">{PRODUCTO}</h2>
            <div className="flex flex-col overflow-x-auto max-w-full sm:gap-4">
                <div className="opacity-80 w-full sm:text-sm leading-relaxed text-tiny relative">{DESCRIPCION}</div>
                <div className=" absolute bottom-2 right-5">
                    <div className="flex justify-between border-t first:border-t-0 border-dashed border-gray-300 py-0 items-end ">
                        <div className="text-gray-100 text-sm"></div>
                        <div className="flex">
                            <div className=" font-medium text-lg">{PRECIO}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardVers2