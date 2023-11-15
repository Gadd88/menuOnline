import { Spinner } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useSheetData } from '../hooks/useSheetData';

const Home = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const {promos} = useSheetData()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 1500);
    }, [])
    

  return (
    <section className='home'>
        <h2 className="text-left bg-background text-2xl md:text-3xl my-4 uppercase border border-gray-400 p-4">{month.toUpperCase()}</h2>
        <section className='home-imgs'>
            {
                loading
                ? <Spinner color='secondary' label='Cargando...' labelColor='secondary' size='lg' className='w-full h-full mx-auto top-20'/>
                :   promos?.length > 0
                        ? promos.map((img) =>(
                            <article
                                key={window.crypto.randomUUID().slice(4)}>
                                <figure className='home-img-container'>
                                    <img src={img.IMAGEN} alt={img.PROMO} className='img-promo'/>
                                </figure>
                            </article>
                            ))
                        : null
            }
        </section>
    </section>
  )
}

export default Home