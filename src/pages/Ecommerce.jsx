import Ecom from "../assets/Gifs/Ecom.gif"
import Icon6 from "../assets/Icons/icon6.svg"
import Circle from "../assets/circle.svg"
import "./Service.css"

function Ecommerce() {
  return (
    <section id="ecom">
      <img src={Ecom} alt="Ecom" />
      <h3>Get all your essentials in one place</h3>
      <img src={Icon6} alt="Icon6" />
      <h5>
        Ramaera Supermart is an online customer oriented marketplace to
        motivated to provide everything you need right at one place under the
        comfort of your homes.
      </h5>
      <span>
        <button>Read More</button>
        <img src={Circle} />
      </span>
    </section>
  )
}

export default Ecommerce
