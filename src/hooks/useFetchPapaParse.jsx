import { useState, useEffect } from "react"
import { usePapaParse } from "react-papaparse"


const useFetchPapaParse = (url) => {
    const { readRemoteFile } = usePapaParse();
    const [productos, setProductos] = useState()
    
    const fetchData = async() =>{
        readRemoteFile(url, {
            complete: (results) => {
                const data = results.data;
                const headers = data[0];
                const rows = data.slice(1);
                const formattedData = rows.map((row) => {
                    const obj = {};
                    headers.forEach((header, i) =>{
                        obj[header] = row[i];
                    });
                    return obj;
                });
                // JSON.stringify(formattedData, null, 2)
                setProductos(formattedData)
            },
        });
    }
    useEffect(() => {
        try {
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return [productos]
};


export default useFetchPapaParse