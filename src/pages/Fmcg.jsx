import FmcgGif from "../assets/Gifs/Fmcg.gif"
import Icon4 from "../assets/Icons/icon4.svg"
import Circle from "../assets/circle.svg"
import "./Fmcg.css"

function Fmcg() {
  return (
    <section id="fmcg">
      <img src={FmcgGif} alt="Packing" />
      <div>
        <h3>
          Offering the best with
          <br />
          FMCG industry
        </h3>
        <img src={Icon4} alt="icon4" />
        <h5>
          Ramaera FMCG industry has commenced an extensive range of FMCG to make
          your days more than ordinary. We plan to offer you nothing less than
          the best.
        </h5>
        <span>
          <button>Read More</button>
          <img src={Circle} />
        </span>
      </div>
    </section>
  )
}

export default Fmcg
