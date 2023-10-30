

const CardVers3 = ({producto}) => {
    const {PRODUCTO, PRECIO, DESCRIPCION} = producto

  return (
    <div className="1fm-product flex flex-shrink-0 p-2 md:p-4 border-b-2 border-gray-400">
        <div className="w-full flex flex-col">
            <h2 className="font-bold mb-2 text-2xl line-clamp-2">{PRODUCTO}</h2>
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