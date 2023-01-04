import Tech from "../assets/Gifs/Tech.gif"
import Icon1 from "../assets/Icons/icon1.svg"
import Circle from "../assets/circle.svg"
import "./Technology.css"

function Technology() {
  return (
    <section id="tech">
      <img src={Tech} alt="tech" />
      <div>
        <h3>
          Unleashing the strength of
          <br />
          Technology
        </h3>
        <img src={Icon1} alt="icon1" />
        <h5>
          We believe in innovation and excellence hence , our approach in the
          field of technology is focused to relish incredible customer
          experience and stabilising business models for tomorrow.
        </h5>
        <span>
          <button>Read More</button>
          <img src={Circle} />
        </span>
      </div>
    </section>
  )
}

export default Technology
