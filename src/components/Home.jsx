import { promosImgs } from '../data/promos'

const Home = () => {
  return (
    <section className='home'>
        <h1>Septiembre</h1>
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