import { useEffect } from "react";
import { createMenu } from '../data/generateMenu'


const useCreateMenu = (menu) => {
    useEffect(() => {
        if(menu===null) return;
        createMenu({
            menu: menu,
            version: 2,
            priceSymbol: '$',
        })
    }, [menu])
  return [menu]
}

export default useCreateMenu