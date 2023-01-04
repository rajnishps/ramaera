import Agri from "../assets/Gifs/Agri.gif"
import Icon5 from "../assets/Icons/icon5.svg"
import Circle from "../assets/circle.svg"
import "./Service.css"

function Agriculture() {
  return (
    <section id="agri">
      <img src={Agri} alt="Agri" />
      <h3>Agri-business to bestow Nature's Love</h3>
      <img src={Icon5} alt="Icon5" />
      <h5>
        Our Agri-business industry is established to get you fresh and organic
        fruits and vegetables with the blessed with the touch of nature
      </h5>
      <span>
        <button>Read More</button>
        <img src={Circle} />
      </span>
    </section>
  )
}

export default Agriculture
