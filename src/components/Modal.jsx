import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"

const Modal = ({producto}) => {

    const {PRODUCTO, DESCRIPCION, PRECIO, URL_IMG} = producto
    const { setModal } = useContext(MenuContext)
    
    return (
        <div id="OneFoodMenuModal"> 
            <div className="modal fixed z-20 flex items-end justify-center top-0 left-0 w-full h-screen p-2 md:p-4 fade-in">
                <div className="modal-backdrop fixed h-full w-full min-h-screen top-0 left-0 bg-black bg-opacity-30" data-close-modal></div>
                <div className="modal-container bg-gray-100 rounded-xl z-10 m-auto w-full flex flex-col flex-1 max-h-full relative overflow-hidden max-w-[375px]">
                    <div className="modal-close cursor-pointer bg-white text-black absolute text-opacity-80 transition-all p-2 rounded-full right-2 top-2" onClick={() => setModal(false)} data-close-modal>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                    <div className="modal-content overflow-y-auto h-full flex-1">
                        <div className="overflow-y-hidden">
                            <div className="flex flex-col bg-gray-100 text-black flex-shrink-0 rounded-t-xl">
                                <div className="h-80 w-full image-bg shrink-0 border-b border-opacity-20">
                                    <img src={URL_IMG} alt={PRODUCTO} className="image-bg h-full w-full rounded-t-xl"/>
                                </div>
                                <div className="p-4 flex flex-col flex-grow">
                                    <div className="font-bold my-2">{PRODUCTO.toUpperCase()}</div>
                                    <div className="flex gap-2 flex-wrap overflow-hidden max-w-full pb-2"></div> 
                                    <div className="opacity-90 text leading-tight my-2">{DESCRIPCION}</div>
                                    <div>
                                        <div className="flex justify-between items-center border-t first:border-t-0 border-dashed border-gray-300 py-2">
                                            <div className="text-gray-950 text-sm"></div>
                                            <div className="flex gap-2 items-center">
                                                <div className="font-bold text-lg">{PRECIO}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Modal
