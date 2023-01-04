import Agri from "../assets/Gifs/Agri.gif"
import Icon5 from "../assets/Icons/icon5.svg"
import Circle from "../assets/circle.svg"
import "./Agriculture.css"

function Agriculture() {
  return (
    <section id="agri">
      <img src={Agri} alt="Agri" />
      <div>
        <h3>
          Agri-business to bestow
          <br />
          Nature's Love
        </h3>
        <img src={Icon5} alt="Icon5" />
        <h5>
          Our Agri-business industry is established to get you fresh and organic
          fruits and vegetables with the blessed with the touch of nature
        </h5>
        <span>
          <button>Read More</button>
          <img src={Circle} />
        </span>
      </div>
    </section>
  )
}

export default Agriculture
