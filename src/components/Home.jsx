import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
// import { promosImgs } from '../data/promos'

const Home = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const {promos} = useContext(MenuContext)

  return (
    <section className='home'>
        <h1 className="text-left bg-background text-2xl md:text-3xl mb-6 uppercase border border-gray-400 p-4">{month.toUpperCase()}</h1>
        <section className='home-imgs'>
            {
                promos?.length > 0
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