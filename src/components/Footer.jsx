import insta from '../assets/icons/instagram.svg'
import wsp from '../assets/icons/whatsapp.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-sociales'>
            <figure>
                <a href="https://www.instagram.com/carmonadelivery" target='_blank' rel='noreferrer noopener'>
                    <img src={insta} alt="instagram logo" className='social-insta'/>
                </a>
            </figure>
            <figure>
                <a href="https://wa.me/5493704264971" target='_blank' rel='noreferrer noopener'>
                    <img src={wsp} alt="whatsapp logo" className='social-wsp' />
                </a>
            </figure>
        </div>
        <div className="copy">
            <p>Creado por Matias Saade &copy; 2023</p>
        </div>
    </div>
  )
}

export default Footer