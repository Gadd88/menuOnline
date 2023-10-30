import { promosImgs } from '../data/promos'

const Home = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
  return (
    <section className='home'>
        <h1>{month.toUpperCase()}</h1>
        <section className='home-imgs'>
            {
                promosImgs.map((img,index) =>(
                    <article
                        key={index}>
                        <figure className='home-img-container'>
                            <img src={img} alt={`Img promo ${index}`} className='img-promo'/>
                        </figure>
                    </article>
                ))
            }
        </section>
    </section>
  )
}

export default Home