import { Accordion, Avatar, AccordionItem } from "@nextui-org/react"
import {PropTypes} from 'prop-types'


const CardVers2 = ({producto}) => {
    CardVers2.propTypes = {
        producto: PropTypes.object
    }


    const {PRODUCTO, PRECIO, URL_IMG, DESCRIPCION} = producto

  return (
        <Accordion 
            selectionMode="multiple" 
            variant='splitted'
            >
            <AccordionItem
                key={PRODUCTO}
                aria-label={PRODUCTO}
                className="cursor-default"
                startContent={
                    <Avatar
                    isBordered
                    color="warning"
                    radius="sm"
                    className="w-20 h-20 text-large"
                    src={URL_IMG}
                    />
                }
                subtitle=''
                title={PRODUCTO}
                >
                    <p>{DESCRIPCION}</p>
                    <p className="font-bold relative -right-[75%] my-4 border-2 border-warning inline-block rounded-md p-2 ">{PRECIO}</p>        
            </AccordionItem>
        </Accordion>
  )
}

export default CardVers2


{/* <div className="1fm-product flex cursor-pointer rounded-xl flex-shrink-0 border-2 border-gray-200 drop-shadow-md h-44 relative w-[98%] p-1 dark bg-[#121212]/90 text-foreground">
        <figure className="h-full w-40 image-bg image-bg-2 shrink-0 rounded-lg overflow-hidden">
            <img src={`${URL_IMG}`} alt={`${PRODUCTO}`} className="image-bg h-full w-full object-cover scale-125 bg-black"/>
        </figure>
        <div className="p-2.5 md:p-4 flex flex-col flex-grow overflow-hidden gap-3">
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
    </div> */}