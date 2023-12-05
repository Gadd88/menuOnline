import { Button, Divider, Image, Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter } from "@nextui-org/react"
import { PropTypes } from "prop-types";

const ModalProducto = ({producto, isOpen, onOpenChange}) => {
    ModalProducto.propTypes = {
        producto: PropTypes.object,
        isOpen: PropTypes.bool,
        onOpenChange: PropTypes.func
    }
    
    const {PRODUCTO, PRECIO, URL_IMG, DESCRIPCION} = producto
  return (
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
  )
}

export default ModalProducto