import PackingGif from "../assets/Gifs/Packing.gif"
import Icon3 from "../assets/Icons/icon3.svg"
import Circle from "../assets/circle.svg"
import "./Packing.css"

function Packing() {
  return (
    <section id="packing">
      <img src={PackingGif} alt="Packing" />
      <div>
        <h3>
          Packaging industry for
          <br />
          business growth
        </h3>
        <img src={Icon3} alt="icon3" />
        <h5>
          We provide packaging solutions to help your business flourish with
          boosted outreach. Ensuring the protection, containment, and
          communication of packaged projects is our foremost priority.
        </h5>
        <span>
          <button>Read More</button>
          <img src={Circle} />
        </span>
      </div>
    </section>
  )
}

export default Packing
