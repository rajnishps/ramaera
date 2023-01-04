import LeftPenta from "../assets/leftpenta.svg"
import "./Info.css"

function Info() {
  return (
    <div className="infoSec">
      <img className="left-penta" src={LeftPenta} />
      <section id="info">
        <h2>The Ramaera Expansion</h2>
        <h4>
          We are aiming to be a part of the major industrialisation drive in
          India and embarking our presence in every significant industrial
          domain including IT.
        </h4>
      </section>
    </div>
  )
}

export default Info
