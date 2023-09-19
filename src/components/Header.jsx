import logo from '../assets/img/carmona.png'

const Header = () => {
  return (
    <div className="header">
      <figure>
        <img src={logo} alt="Carmona Delivery" />
      </figure>
      <h1>Carmona Delivery</h1>
    </div>
  )
}

export default Header