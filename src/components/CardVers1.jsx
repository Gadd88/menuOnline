import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import {Card, Divider, CardHeader, Image, CardFooter, Button, useDisclosure, Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/react";

const CardVers1 = ({producto}) => {
    
    const {PRODUCTO, PRECIO, URL_IMG, DESCRIPCION} = producto
    const {isOpen, onOpenChange, onOpen} = useDisclosure()


    return (
        <div>
            {/* <button className="absolute -top-3 -right-2 bg-green-700 rounded-full p-1 text-white text-lg w-8 h-8 active:bg-green-400 z-10" onClick={()=>agregarPedido(producto)}>+</button> */}
            <Card isFooterBlurred className="w-[250px] h-[350px] bg-black relative" isPressable onClick={onOpen}>
                <CardHeader className="absolute z-10 top-5 flex-col items-start ">
                    <p className="text-tiny text-white uppercase font-bold">New</p>
                    <h4 className="text-black font-bold text-md bg-white/70 w-[250px] rounded-s-xl p-2 text-left">{PRODUCTO}</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-100 -translate-y-6 object-cover"
                    src={URL_IMG}
                />
                <CardFooter className="absolute bg-slate-800/70 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between h-[120px] flex-col">
                    <div>
                        <p className="text-white text-tiny text-left">{DESCRIPCION}</p>
                    </div>
                    <Button className="text-medium" radius="sm" size="sm">
                        {PRECIO}
                    </Button>
                </CardFooter>
            </Card>
            <Modal
                isOpen={isOpen}
                placement='center'
                onOpenChange={onOpenChange}
                aria-label='modal carrito'
                >
                <ModalContent 
                    aria-label='modal carrito'
                    className="max-w-[320px] min-h-[400px] dark text-foreground">
                    {
                        (onClose)=>(
                            <>
                                <ModalHeader className="flex flex-col gap-1">{PRODUCTO}</ModalHeader>
                                <ModalBody>
                                    <Image
                                        isZoomed
                                        width={300}
                                        height={250}
                                        loading="lazy"
                                        alt={`${PRODUCTO}`}
                                        className="object-cover mx-auto"
                                        src={URL_IMG}
                                    />
                                    <Divider className="my-4"/>
                                    <p className="text-sm">{DESCRIPCION}</p>
                                </ModalBody>
                                <ModalFooter className="flex justify-center">
                                    <Button 
                                        color="warning" 
                                        variant='flat' 
                                        radius='none' 
                                        onPress={onClose}
                                        size="lg">
                                        {PRECIO}
                                    </Button>
                                </ModalFooter>
                            </>
                        )
                    }
                </ModalContent>
            </Modal>
        </div>
  )
}

export default CardVers1